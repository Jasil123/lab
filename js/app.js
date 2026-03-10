// ========================================
// App.js - Main Controller
// ========================================

const App = {
    currentMode: 'study',

    init() {
        this.setupNavigation();
        this.setupTheme();
        this.setupMobileMenu();
        this.setupResetProgress();

        // Initialize modules
        Renderer.init();
        Practice.init();
        Quiz.init();

        // Handle hash routing
        this.handleRoute();
        window.addEventListener('hashchange', () => this.handleRoute());
    },

    handleRoute() {
        const hash = window.location.hash.replace('#', '') || 'study';

        if (['study', 'practice', 'quiz', 'guide'].includes(hash)) {
            this.switchMode(hash);
        } else if (['java', 'javascript', 'php'].includes(hash)) {
            this.switchMode('study');
            Renderer.currentFilter = hash;
            document.querySelectorAll('.chip').forEach(c => {
                c.classList.toggle('active', c.dataset.filter === hash);
            });
            document.querySelectorAll('.filter-link').forEach(l => {
                l.classList.toggle('active-filter', l.dataset.filter === hash);
            });
            Renderer.renderCards();
        }
    },

    switchMode(mode) {
        this.currentMode = mode;

        // Toggle between main content and guide content
        const mainContent  = document.getElementById('mainContent');
        const guideContent = document.getElementById('guideContent');
        if (mode === 'guide') {
            mainContent.classList.add('hidden');
            guideContent.classList.remove('hidden');
        } else {
            mainContent.classList.remove('hidden');
            guideContent.classList.add('hidden');
        }

        // Hide all views
        document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));

        // Show selected view
        const viewId = mode + 'View';
        const view = document.getElementById(viewId);
        if (view) view.classList.remove('hidden');

        // Update sidebar active link
        document.querySelectorAll('.sidebar-link[data-mode]').forEach(link => {
            link.classList.toggle('active', link.dataset.mode === mode);
        });

        // Load practice question when switching to practice mode
        if (mode === 'practice') {
            Practice.loadQuestion();
        }

        // Re-highlight code blocks
        if (typeof Prism !== 'undefined') Prism.highlightAll();

        // Close mobile menu
        this.closeMobileMenu();
    },

    setupNavigation() {
        document.querySelectorAll('.sidebar-link[data-mode]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const mode = link.dataset.mode;
                window.location.hash = mode;
                this.switchMode(mode);
            });
        });
    },

    setupTheme() {
        // Load saved theme
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        this.updateThemeButton(savedTheme);

        // Desktop toggle
        const toggle = document.getElementById('themeToggle');
        if (toggle) {
            toggle.addEventListener('click', () => this.toggleTheme());
        }

        // Mobile toggle
        const mobileToggle = document.getElementById('themeToggleMobile');
        if (mobileToggle) {
            mobileToggle.addEventListener('click', () => this.toggleTheme());
        }
    },

    toggleTheme() {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        this.updateThemeButton(next);
    },

    updateThemeButton(theme) {
        const toggle = document.getElementById('themeToggle');
        const mobileToggle = document.getElementById('themeToggleMobile');

        if (theme === 'dark') {
            if (toggle) toggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
            if (mobileToggle) mobileToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            if (toggle) toggle.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
            if (mobileToggle) mobileToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
    },

    setupMobileMenu() {
        const hamburger = document.getElementById('hamburger');
        const overlay = document.getElementById('overlay');

        if (hamburger) {
            hamburger.addEventListener('click', () => this.toggleMobileMenu());
        }
        if (overlay) {
            overlay.addEventListener('click', () => this.closeMobileMenu());
        }
    },

    toggleMobileMenu() {
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('overlay');
        sidebar.classList.toggle('open');
        overlay.classList.toggle('active');
    },

    closeMobileMenu() {
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('overlay');
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
    },

    setupResetProgress() {
        const resetBtn = document.getElementById('resetProgress');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                if (confirm('Are you sure you want to reset all progress? This will clear completed questions and quiz scores.')) {
                    Renderer.resetProgress();
                    localStorage.removeItem('quizHighScore');
                    Quiz.displayHighScore();
                    alert('Progress has been reset!');
                }
            });
        }
    }
};

// Start the app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});
