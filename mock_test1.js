let currentQuestion = 1;
let timerDuration = 120; // Duration in seconds (e.g., 120 seconds = 2 minutes)
let timerInterval;
// const goHomeBtn = documnet.querySelector('.goHome-btn');

function startTimer() {
    timerInterval = setInterval(() => {
        let minutes = Math.floor(timerDuration / 60);
        let seconds = timerDuration % 60;

        if (seconds < 10) {
            seconds = '0' + seconds;
        }

        document.getElementById('time').innerText = `${minutes}:${seconds}`;

        if (timerDuration <= 0) {
            clearInterval(timerInterval);
            showResults();
        }

        timerDuration--;
    }, 1000);
}

function nextQuestion(questionNumber) {
    document.getElementById('question' + currentQuestion).classList.remove('active');
    currentQuestion = questionNumber;
    document.getElementById('question' + currentQuestion).classList.add('active');
}

function prevQuestion(questionNumber) {
    document.getElementById('question' + currentQuestion).classList.remove('active');
    currentQuestion = questionNumber;
    document.getElementById('question' + currentQuestion).classList.add('active');
}

function showResults() {
    clearInterval(timerInterval);

    let score = 0;
    const totalQuestions = 3;
    const answers = {
        q1: 'df',
        q2: '6',
        q3: '100'
    };

    for (let i = 1; i <= totalQuestions; i++) {
        const selectedAnswer = document.querySelector(`input[name="q${i}"]:checked`);
        if (selectedAnswer && selectedAnswer.value === answers[`q${i}`]) {
            score++;
        }
    }

    document.getElementById('question' + currentQuestion).classList.remove('active');
    document.getElementById('result-container').style.display = 'block';
    document.getElementById('result').innerText = `You scored ${score} out of ${totalQuestions}`;
}

function restartQuiz() {
    clearInterval(timerInterval);
    timerDuration = 120; // Reset the timer duration
    document.getElementById('result-container').style.display = 'none';
    currentQuestion = 1;
    document.getElementById('question' + currentQuestion).classList.add('active');
    document.querySelectorAll('input[type="radio"]').forEach(radio => radio.checked = false);
    startTimer(); // Restart the timer
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('question1').classList.add('active');
    startTimer(); // Start the timer when the page loads
});


// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', (event) => {
    // Get the button element by its ID
    const homeButton = document.getElementById('homeButton');

    // Add a click event listener to the button
    homeButton.addEventListener('click', () => {
        // Redirect to the index.html page
        window.location.href = 'index.html';
    });
});
