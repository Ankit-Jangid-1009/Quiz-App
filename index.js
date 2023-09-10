const questions = [
    {
        question: "What is the capital of France?",
        options: ["London", "Berlin", "Paris", "Madrid"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Giraffe", "Blue Whale", "Hippopotamus"],
        answer: "Blue Whale"
    },
    // Add more questions here
];

let currentQuestionIndex = 0;
let score = 0;

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const scoreText = document.getElementById('score');
const nextButton = document.getElementById('next-button');
const resultContainer = document.getElementById('result-container');

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    optionsContainer.innerHTML = '';

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(option));
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionText.textContent = 'Quiz Complete!';
    optionsContainer.innerHTML = '';
    resultContainer.style.display = 'block';
    scoreText.textContent = score + '/' + questions.length;
    nextButton.style.display = 'none';
}

nextButton.addEventListener('click', () => {
    loadQuestion();
    resultContainer.style.display = 'none';
});

loadQuestion();
