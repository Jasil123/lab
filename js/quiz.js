// ========================================
// Quiz Mode
// ========================================

const Quiz = {
    questions: [],
    currentIndex: 0,
    score: 0,
    answers: [],
    timerInterval: null,
    timeLeft: 0,
    timePerQuestion: 60,
    selectedOption: -1,

    init() {
        this.setupControls();
        this.displayHighScore();
    },

    setupControls() {
        const startBtn = document.getElementById('startQuiz');
        if (startBtn) {
            startBtn.addEventListener('click', () => this.startQuiz());
        }

        const submitBtn = document.getElementById('quizSubmit');
        if (submitBtn) {
            submitBtn.addEventListener('click', () => this.submitAnswer());
        }

        const hintBtn = document.getElementById('quizHint');
        if (hintBtn) {
            hintBtn.addEventListener('click', () => this.showQuizHint());
        }

        const retryBtn = document.getElementById('retryQuiz');
        if (retryBtn) {
            retryBtn.addEventListener('click', () => this.resetQuiz());
        }

        const reviewBtn = document.getElementById('reviewQuiz');
        if (reviewBtn) {
            reviewBtn.addEventListener('click', () => this.showReview());
        }
    },

    startQuiz() {
        const category = document.getElementById('quizCategory').value;
        const count = parseInt(document.getElementById('quizCount').value);
        this.timePerQuestion = parseInt(document.getElementById('quizTimer').value);

        // Get available questions
        let available = questions.filter(q => q.quiz);
        if (category !== 'all') {
            available = available.filter(q => q.category === category);
        }

        // Shuffle and pick
        available = this.shuffle([...available]);
        this.questions = available.slice(0, Math.min(count, available.length));
        this.currentIndex = 0;
        this.score = 0;
        this.answers = [];
        this.selectedOption = -1;

        // Show quiz UI
        document.getElementById('quizSetup').classList.add('hidden');
        document.getElementById('quizActive').classList.remove('hidden');
        document.getElementById('quizResults').classList.add('hidden');

        this.renderQuestion();
    },

    shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    },

    renderQuestion() {
        if (this.currentIndex >= this.questions.length) {
            this.finishQuiz();
            return;
        }

        const q = this.questions[this.currentIndex];
        const quiz = q.quiz;
        this.selectedOption = -1;

        // Update progress
        document.getElementById('quizProgress').textContent =
            `Question ${this.currentIndex + 1} / ${this.questions.length}`;
        document.getElementById('quizScoreLive').textContent = `Score: ${this.score}`;

        // Build question HTML
        const num = q.id.replace('java-', 'J').replace('js-', 'JS').replace('php-', 'P').toUpperCase();
        const container = document.getElementById('quizQuestionContainer');

        let optionsHtml = '';
        if (quiz.options) {
            const letters = ['A', 'B', 'C', 'D'];
            optionsHtml = `<div class="quiz-options">
                ${quiz.options.map((opt, idx) => `
                    <button class="quiz-option-btn" onclick="Quiz.selectOption(${idx})" id="quizOpt-${idx}">
                        <span class="quiz-option-letter">${letters[idx]}</span>
                        <span>${opt}</span>
                    </button>
                `).join('')}
            </div>`;
        }

        container.innerHTML = `
            <div class="quiz-question-title">
                <span class="card-number ${q.category}" style="font-size: 0.75rem; margin-right: 8px;">${num}</span>
                ${q.title}
            </div>
            <p class="quiz-question-text">${quiz.question}</p>
            ${optionsHtml}
            <div class="quiz-hint-text" id="quizHintText">
                💡 ${q.concepts[0]}
            </div>
        `;

        // Start timer
        if (this.timePerQuestion > 0) {
            this.startTimer();
        } else {
            document.getElementById('quizTimerDisplay').textContent = '∞';
        }
    },

    selectOption(idx) {
        this.selectedOption = idx;

        // Update visual selection
        document.querySelectorAll('.quiz-option-btn').forEach((btn, i) => {
            btn.classList.toggle('selected', i === idx);
        });
    },

    startTimer() {
        this.timeLeft = this.timePerQuestion;
        const display = document.getElementById('quizTimerDisplay');

        if (this.timerInterval) clearInterval(this.timerInterval);

        display.textContent = this.timeLeft + 's';
        display.classList.remove('warning');

        this.timerInterval = setInterval(() => {
            this.timeLeft--;
            display.textContent = this.timeLeft + 's';

            if (this.timeLeft <= 10) {
                display.classList.add('warning');
            }

            if (this.timeLeft <= 0) {
                clearInterval(this.timerInterval);
                this.submitAnswer(true);
            }
        }, 1000);
    },

    submitAnswer(timedOut = false) {
        if (this.timerInterval) clearInterval(this.timerInterval);

        const q = this.questions[this.currentIndex];
        const quiz = q.quiz;

        const isCorrect = this.selectedOption === quiz.answer;
        if (isCorrect) this.score++;

        this.answers.push({
            question: q,
            selected: this.selectedOption,
            correct: quiz.answer,
            isCorrect: isCorrect,
            timedOut: timedOut
        });

        // Show correct/incorrect
        document.querySelectorAll('.quiz-option-btn').forEach((btn, i) => {
            btn.disabled = true;
            if (i === quiz.answer) {
                btn.classList.add('correct');
            } else if (i === this.selectedOption && !isCorrect) {
                btn.classList.add('incorrect');
            }
        });

        // Show explanation
        const container = document.getElementById('quizQuestionContainer');
        const explanationDiv = document.createElement('div');
        explanationDiv.style.cssText = 'margin-top: 16px; padding: 12px; border-radius: 8px; font-size: 0.9rem;';
        explanationDiv.style.background = isCorrect ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)';
        explanationDiv.style.border = isCorrect ? '1px solid #10b981' : '1px solid #ef4444';
        explanationDiv.innerHTML = `
            <strong>${isCorrect ? '✅ Correct!' : (timedOut ? '⏰ Time\'s up!' : '❌ Incorrect!')}</strong>
            <p style="margin-top: 6px; color: var(--text-secondary);">${quiz.explanation}</p>
        `;
        container.appendChild(explanationDiv);

        // Update score display
        document.getElementById('quizScoreLive').textContent = `Score: ${this.score}`;

        // Change submit button to Next
        const submitBtn = document.getElementById('quizSubmit');
        submitBtn.textContent = this.currentIndex < this.questions.length - 1 ? 'Next →' : 'See Results';
        submitBtn.onclick = () => {
            this.currentIndex++;
            submitBtn.innerHTML = 'Submit <i class="fas fa-arrow-right"></i>';
            submitBtn.onclick = () => this.submitAnswer();
            this.renderQuestion();
        };
    },

    showQuizHint() {
        const hint = document.getElementById('quizHintText');
        if (hint) {
            hint.classList.toggle('visible');
        }
    },

    finishQuiz() {
        if (this.timerInterval) clearInterval(this.timerInterval);

        document.getElementById('quizActive').classList.add('hidden');
        document.getElementById('quizResults').classList.remove('hidden');

        const total = this.questions.length;
        const pct = Math.round((this.score / total) * 100);

        // Title based on score
        let title = '';
        let emoji = '';
        if (pct === 100) { title = 'Perfect Score!'; emoji = '🏆'; }
        else if (pct >= 80) { title = 'Excellent!'; emoji = '🌟'; }
        else if (pct >= 60) { title = 'Good Job!'; emoji = '👍'; }
        else if (pct >= 40) { title = 'Keep Practicing!'; emoji = '📚'; }
        else { title = 'Needs More Study'; emoji = '💪'; }

        document.getElementById('resultsTitle').textContent = emoji + ' ' + title;
        document.getElementById('resultsScore').textContent = `${this.score} / ${total} (${pct}%)`;

        // Save high score
        this.saveHighScore(pct);

        // Show review
        this.showReview();
    },

    showReview() {
        const details = document.getElementById('resultsDetails');
        details.innerHTML = this.answers.map((ans, idx) => {
            const q = ans.question;
            const letters = ['A', 'B', 'C', 'D'];
            const selectedText = ans.selected >= 0 ? letters[ans.selected] + ': ' + q.quiz.options[ans.selected] : 'No answer';
            const correctText = letters[ans.correct] + ': ' + q.quiz.options[ans.correct];

            return `
                <div class="result-item ${ans.isCorrect ? 'correct' : 'incorrect'}">
                    <strong>${idx + 1}. ${q.title}</strong>
                    <div style="margin-top: 4px;">
                        ${ans.isCorrect
                            ? `✅ Your answer: ${selectedText}`
                            : `❌ Your answer: ${selectedText}<br>✅ Correct: ${correctText}`
                        }
                        ${ans.timedOut ? '<br><em>⏰ Timed out</em>' : ''}
                    </div>
                </div>
            `;
        }).join('');
    },

    resetQuiz() {
        document.getElementById('quizResults').classList.add('hidden');
        document.getElementById('quizSetup').classList.remove('hidden');
        document.getElementById('quizActive').classList.add('hidden');
        this.displayHighScore();
    },

    saveHighScore(pct) {
        const key = 'quizHighScore';
        const prev = parseInt(localStorage.getItem(key) || '0');
        if (pct > prev) {
            localStorage.setItem(key, pct.toString());
        }
    },

    displayHighScore() {
        const el = document.getElementById('highScore');
        const hs = localStorage.getItem('quizHighScore');
        if (el && hs) {
            el.innerHTML = `🏆 High Score: <strong>${hs}%</strong>`;
        }
    }
};
