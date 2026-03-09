// ========================================
// Practice Mode
// ========================================

const Practice = {
    currentQuestion: null,
    score: 0,
    total: 0,
    category: 'all',

    init() {
        this.setupControls();
        this.loadQuestion();
    },

    setupControls() {
        const categorySelect = document.getElementById('practiceCategory');
        if (categorySelect) {
            categorySelect.addEventListener('change', () => {
                this.category = categorySelect.value;
                this.score = 0;
                this.total = 0;
                this.updateScore();
                this.loadQuestion();
            });
        }

        const nextBtn = document.getElementById('nextPractice');
        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.loadQuestion());
        }
    },

    getAvailableQuestions() {
        if (this.category === 'all') return questions;
        return questions.filter(q => q.category === this.category);
    },

    loadQuestion() {
        const available = this.getAvailableQuestions();
        if (available.length === 0) return;

        // Pick random question
        const randIdx = Math.floor(Math.random() * available.length);
        this.currentQuestion = available[randIdx];

        this.renderPractice();
    },

    renderPractice() {
        const container = document.getElementById('practiceContainer');
        if (!container || !this.currentQuestion) return;

        const q = this.currentQuestion;
        const num = q.id.replace('java-', 'J').replace('js-', 'JS').replace('php-', 'P').toUpperCase();
        const blanks = q.blanks || [];

        // Build code with blanks
        let codeDisplay = this.escapeHtml(q.code);

        // Create blank inputs
        const blanksHtml = blanks.map((blank, idx) => `
            <div class="practice-blank-item" style="margin: 8px 0; padding: 10px; background: var(--concept-bg); border-radius: 8px;">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
                    <span style="font-weight: 600; color: var(--accent); font-size: 0.85rem;">Blank ${idx + 1}:</span>
                    <span style="font-size: 0.85rem; color: var(--text-secondary);">${blank.hint}</span>
                    <button class="practice-hint-btn" onclick="Practice.showHint(${idx})" id="hintBtn-${idx}">
                        <i class="fas fa-lightbulb"></i> Hint
                    </button>
                </div>
                <div class="practice-hint-text" id="hintText-${idx}" style="display: none; margin-bottom: 8px; padding: 6px 10px; background: #fef9c3; color: #854d0e; border-radius: 4px; font-size: 0.8rem;">
                    First few chars: <strong>${blank.text.substring(0, Math.min(4, blank.text.length))}...</strong>
                </div>
                <input type="text" class="practice-input" id="blank-${idx}"
                       placeholder="Type the code here..."
                       style="width: 100%; padding: 10px; font-family: Consolas, monospace; font-size: 0.9rem;
                              border: 2px dashed var(--accent); border-radius: 6px;
                              background: var(--bg-primary); color: var(--text-primary); outline: none;">
                <div class="practice-blank-feedback" id="feedback-${idx}" style="margin-top: 4px; font-size: 0.8rem;"></div>
            </div>
        `).join('');

        container.innerHTML = `
            <div class="practice-card">
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;">
                    <span class="card-number ${q.category}" style="font-size: 0.8rem;">${num}</span>
                    <span class="practice-question-title">${q.title}</span>
                </div>
                <p class="practice-question-desc">${q.description}</p>

                <div style="margin-bottom: 20px;">
                    <h4 style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 8px;">
                        <i class="fas fa-code"></i> Fill in the blanks:
                    </h4>
                    ${blanksHtml}
                </div>

                <details style="margin-top: 16px;">
                    <summary style="cursor: pointer; color: var(--accent); font-weight: 600; padding: 8px 0;">
                        <i class="fas fa-code"></i> View Full Code (for reference)
                    </summary>
                    <div class="code-block-wrapper visible" style="margin-top: 10px;">
                        <pre class="line-numbers"><code class="language-${q.language}">${this.escapeHtml(q.code)}</code></pre>
                    </div>
                </details>

                <div class="practice-actions">
                    <button class="btn btn-primary" onclick="Practice.checkAnswers()">
                        <i class="fas fa-check"></i> Check Answers
                    </button>
                    <button class="btn btn-secondary" onclick="Practice.revealAll()">
                        <i class="fas fa-eye"></i> Reveal All
                    </button>
                </div>

                <div id="practiceOverallFeedback" style="margin-top: 12px;"></div>
            </div>
        `;

        // Highlight code
        setTimeout(() => Prism.highlightAll(), 100);
    },

    escapeHtml(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    },

    showHint(idx) {
        const hint = document.getElementById('hintText-' + idx);
        if (hint) {
            hint.style.display = hint.style.display === 'none' ? 'block' : 'none';
        }
    },

    normalizeAnswer(str) {
        return str.replace(/\s+/g, ' ').trim().toLowerCase()
                  .replace(/\s*\(\s*/g, '(')
                  .replace(/\s*\)\s*/g, ')')
                  .replace(/\s*;\s*/g, ';')
                  .replace(/;$/, '');
    },

    checkAnswers() {
        if (!this.currentQuestion || !this.currentQuestion.blanks) return;

        const blanks = this.currentQuestion.blanks;
        let allCorrect = true;
        let correctCount = 0;

        blanks.forEach((blank, idx) => {
            const input = document.getElementById('blank-' + idx);
            const feedback = document.getElementById('feedback-' + idx);
            if (!input || !feedback) return;

            const userAns = this.normalizeAnswer(input.value);
            const correctAns = this.normalizeAnswer(blank.text);

            // Check for partial match too
            const isCorrect = userAns === correctAns ||
                              correctAns.includes(userAns) && userAns.length > correctAns.length * 0.5;

            if (isCorrect || userAns === correctAns) {
                input.style.borderColor = '#10b981';
                input.style.background = 'rgba(16, 185, 129, 0.1)';
                feedback.innerHTML = '<span style="color: #10b981;">✅ Correct!</span>';
                correctCount++;
            } else {
                allCorrect = false;
                input.style.borderColor = '#ef4444';
                input.style.background = 'rgba(239, 68, 68, 0.1)';
                feedback.innerHTML = `<span style="color: #ef4444;">❌ Expected: <code style="background: #fee2e2; padding: 2px 6px; border-radius: 3px;">${blank.text}</code></span>`;
            }
        });

        this.total++;
        if (allCorrect) this.score++;
        this.updateScore();

        const overall = document.getElementById('practiceOverallFeedback');
        if (overall) {
            if (allCorrect) {
                overall.innerHTML = '<div class="practice-feedback success">🎉 All answers correct! Click "Next Question" to continue.</div>';
            } else {
                overall.innerHTML = `<div class="practice-feedback error">Got ${correctCount}/${blanks.length} correct. Review the answers above and try the next question.</div>`;
            }
        }
    },

    revealAll() {
        if (!this.currentQuestion || !this.currentQuestion.blanks) return;

        this.currentQuestion.blanks.forEach((blank, idx) => {
            const input = document.getElementById('blank-' + idx);
            const feedback = document.getElementById('feedback-' + idx);
            if (input) {
                input.value = blank.text;
                input.style.borderColor = '#6366f1';
                input.style.background = 'rgba(99, 102, 241, 0.1)';
            }
            if (feedback) {
                feedback.innerHTML = '<span style="color: #6366f1;">📝 Answer revealed</span>';
            }
        });
    },

    updateScore() {
        const scoreEl = document.getElementById('practiceScore');
        const totalEl = document.getElementById('practiceTotal');
        if (scoreEl) scoreEl.textContent = this.score;
        if (totalEl) totalEl.textContent = this.total;
    }
};
