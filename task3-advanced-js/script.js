const questions = [

    {
        question: "Which language is used for styling webpages?",
        answers: ["HTML", "CSS", "Python", "C++"],
        correct: "CSS"
    },

    {
        question: "Which language is used for webpage structure?",
        answers: ["Java", "HTML", "Python", "C"],
        correct: "HTML"
    },

    {
        question: "Which language is used for webpage interactivity?",
        answers: ["CSS", "JavaScript", "SQL", "Java"],
        correct: "JavaScript"
    }

];

const questionElement = document.getElementById("question");

const answerButtons = document.querySelectorAll(".answer-btn");

const nextBtn = document.getElementById("nextBtn");

let currentQuestionIndex = 0;

function loadQuestion() {

    const currentQuestion = questions[currentQuestionIndex];

    questionElement.textContent = currentQuestion.question;

    answerButtons.forEach((button, index) => {

        button.textContent = currentQuestion.answers[index];

        button.onclick = function() {

            if (button.textContent === currentQuestion.correct) {

                alert("Correct Answer!");

            } else {

                alert("Wrong Answer!");

            }

        };

    });

}

nextBtn.addEventListener("click", function() {

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {

        loadQuestion();

    } else {

        alert("Quiz Completed!");

        currentQuestionIndex = 0;

        loadQuestion();

    }

});

loadQuestion();


const jokeBtn = document.getElementById("jokeBtn");

const jokeText = document.getElementById("joke");

jokeBtn.addEventListener("click", async function() {

    try {

        const response = await fetch(
            "https://official-joke-api.appspot.com/random_joke"
        );

        const data = await response.json();

        jokeText.textContent =
            `${data.setup} - ${data.punchline}`;

    } catch (error) {

        jokeText.textContent =
            "Failed to fetch joke. Please try again.";

    }

});