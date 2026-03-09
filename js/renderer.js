// ========================================
// Study Mode - Renderer
// ========================================

const Renderer = {
    currentFilter: 'all',
    completedQuestions: new Set(),

    init() {
        this.loadProgress();
        this.renderCards();
        this.setupFilterChips();
        this.setupSearch();
        this.setupSidebarFilters();
    },

    loadProgress() {
        const saved = localStorage.getItem('completedQuestions');
        if (saved) {
            this.completedQuestions = new Set(JSON.parse(saved));
        }
    },

    saveProgress() {
        localStorage.setItem('completedQuestions', JSON.stringify([...this.completedQuestions]));
        this.updateProgressBar();
    },

    updateProgressBar() {
        const total = questions.length;
        const done = this.completedQuestions.size;
        const pct = Math.round((done / total) * 100);

        const bar = document.getElementById('progressBar');
        const text = document.getElementById('progressText');
        if (bar) bar.style.width = pct + '%';
        if (text) text.textContent = done + ' / ' + total + ' completed';
    },

    getFilteredQuestions() {
        let filtered = questions;

        if (this.currentFilter !== 'all') {
            filtered = filtered.filter(q => q.category === this.currentFilter);
        }

        const search = document.getElementById('searchInput');
        if (search && search.value.trim()) {
            const term = search.value.toLowerCase();
            filtered = filtered.filter(q =>
                q.title.toLowerCase().includes(term) ||
                q.description.toLowerCase().includes(term) ||
                q.category.toLowerCase().includes(term) ||
                q.concepts.some(c => c.toLowerCase().includes(term))
            );
        }

        return filtered;
    },

    renderCards() {
        const container = document.getElementById('studyCards');
        if (!container) return;

        const filtered = this.getFilteredQuestions();

        if (filtered.length === 0) {
            container.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-search"></i>
                    <p>No questions found. Try a different filter or search term.</p>
                </div>`;
            return;
        }

        container.innerHTML = filtered.map((q, idx) => {
            const num = q.id.replace('java-', 'J').replace('js-', 'JS').replace('php-', 'P');
            const isCompleted = this.completedQuestions.has(q.id);

            return `
            <div class="question-card ${isCompleted ? 'completed' : ''}" data-id="${q.id}">
                <div class="card-header" onclick="Renderer.toggleCard('${q.id}')">
                    <span class="card-number ${q.category}">${num.toUpperCase()}</span>
                    <span class="card-title">${q.title}</span>
                    <div class="card-actions">
                        <button class="completion-checkbox ${isCompleted ? 'checked' : ''}"
                                onclick="event.stopPropagation(); Renderer.toggleComplete('${q.id}')"
                                title="Mark as completed">
                            <i class="fas fa-check"></i>
                        </button>
                        <i class="fas fa-chevron-down expand-icon" id="icon-${q.id}"></i>
                    </div>
                </div>
                <div class="card-body" id="body-${q.id}">
                    <p class="card-description">${q.description}</p>

                    <div class="code-section">
                        <div class="code-section-header">
                            <h4>💻 Solution</h4>
                            <button class="show-solution-btn" onclick="Renderer.toggleSolution('${q.id}')">
                                <i class="fas fa-eye"></i> Show Solution
                            </button>
                        </div>
                        <div class="code-block-wrapper" id="code-${q.id}">
                            <pre class="line-numbers"><code class="language-${q.language}">${this.escapeHtml(q.code)}</code></pre>
                        </div>
                    </div>

                    <div class="concepts-section">
                        <h4><i class="fas fa-lightbulb"></i> Key Concepts</h4>
                        <ul class="concepts-list">
                            ${q.concepts.map(c => `<li>${c}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>`;
        }).join('');

        this.updateProgressBar();
    },

    escapeHtml(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    },

    toggleCard(id) {
        const body = document.getElementById('body-' + id);
        const icon = document.getElementById('icon-' + id);
        if (!body) return;

        const isOpen = body.classList.contains('open');
        body.classList.toggle('open');
        if (icon) icon.classList.toggle('rotated');

        // Highlight code when opened
        if (!isOpen) {
            setTimeout(() => {
                const codeBlock = document.getElementById('code-' + id);
                if (codeBlock) {
                    Prism.highlightAllUnder(codeBlock);
                }
            }, 50);
        }
    },

    toggleSolution(id) {
        const codeBlock = document.getElementById('code-' + id);
        if (!codeBlock) return;

        const isVisible = codeBlock.classList.contains('visible');
        codeBlock.classList.toggle('visible');

        // Find the button
        const card = codeBlock.closest('.question-card');
        const btn = card.querySelector('.show-solution-btn');
        if (btn) {
            btn.innerHTML = isVisible
                ? '<i class="fas fa-eye"></i> Show Solution'
                : '<i class="fas fa-eye-slash"></i> Hide Solution';
        }

        if (!isVisible) {
            setTimeout(() => Prism.highlightAllUnder(codeBlock), 50);
        }
    },

    toggleComplete(id) {
        if (this.completedQuestions.has(id)) {
            this.completedQuestions.delete(id);
        } else {
            this.completedQuestions.add(id);
        }
        this.saveProgress();
        this.renderCards();
    },

    setupFilterChips() {
        document.querySelectorAll('.chip').forEach(chip => {
            chip.addEventListener('click', () => {
                document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
                chip.classList.add('active');
                this.currentFilter = chip.dataset.filter;

                // Update sidebar filter
                document.querySelectorAll('.filter-link').forEach(link => {
                    link.classList.toggle('active-filter', link.dataset.filter === this.currentFilter);
                });

                this.renderCards();
            });
        });
    },

    setupSidebarFilters() {
        document.querySelectorAll('.filter-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();

                // Switch to study mode
                App.switchMode('study');

                // Apply filter
                this.currentFilter = link.dataset.filter;
                document.querySelectorAll('.filter-link').forEach(l => l.classList.remove('active-filter'));
                link.classList.add('active-filter');

                document.querySelectorAll('.chip').forEach(c => {
                    c.classList.toggle('active', c.dataset.filter === this.currentFilter);
                });

                this.renderCards();
            });
        });
    },

    setupSearch() {
        const search = document.getElementById('searchInput');
        if (search) {
            let timeout;
            search.addEventListener('input', () => {
                clearTimeout(timeout);
                timeout = setTimeout(() => this.renderCards(), 200);
            });
        }
    },

    resetProgress() {
        this.completedQuestions.clear();
        this.saveProgress();
        this.renderCards();
    }
};
