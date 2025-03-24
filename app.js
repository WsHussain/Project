document.addEventListener("DOMContentLoaded", () => {
    "use strict";
    let questions = [];
    let currentQuestionIndex = 0;
    let score = 0;

    const questionElement = document.getElementById("question");
    const answersElement = document.getElementById("answers");
    const totalElement = document.getElementById("total");
    const scoreElement = document.getElementById("score");
    const progressElement = document.getElementById("progress");

    async function loadQuestions() {
        try {
            const response = await fetch("document.json");
            if (!response.ok) {
                throw new Error("Erreur lors du chargement du fichier JSON");
            }
            questions = await response.json();
            totalElement.textContent = questions.length;
            showQuestion();
        } catch (error) {
            console.error("Erreur de chargement du fichier JSON :", error);
            questionElement.textContent = "Impossible de charger le quiz";
        }
    }

    function endQuiz() {
        const performancePoints = score;
        let performanceMessage = "";
        if (performancePoints === questions.length) {
            performanceMessage = "L'ELU c'est toi ! Vous avez obtenu le maximum de points (" + performancePoints + ").";
        } else if (performancePoints >= questions.length * 0.75) {
            performanceMessage = "Bonne performance, j'applaudie  ! Vous avez obtenu " + performancePoints + " points.";
        } else if (performancePoints >= questions.length * 0.5) {
            performanceMessage = "J'ai un petit sourire mais j'en attends mieux ! Vous avez obtenu " + performancePoints + " points, mais vous pouvez faire mieux.";
        } else {
            performanceMessage = "Je suis en larme ! Votre score est de " + performancePoints + " points.";
        }

        questionElement.textContent = "FIN DU QUIZZZZ!";
        answersElement.innerHTML = "";
        scoreElement.textContent = "Score : " + score + " sur " + questions.length;
        if (progressElement) {
            progressElement.textContent = performanceMessage;
        }
    }

    function showQuestion() {
        if (currentQuestionIndex >= questions.length) {
            endQuiz();
            return;
        }

        const questionData = questions[currentQuestionIndex];
        questionElement.textContent = questionData.question;
        answersElement.innerHTML = "";

        if (progressElement) {
            const remaining = questions.length - currentQuestionIndex - 1;
            progressElement.textContent = "Question " + (currentQuestionIndex + 1) + " sur " + questions.length +
                " (" + remaining + " encore)";
        }

        questionData.reponses.forEach((answer, index) => {
            const button = document.createElement("button");
            button.textContent = answer;
            button.addEventListener("click", () => handleAnswer(index));
            answersElement.appendChild(button);
        });
    }

    function handleAnswer(selectedIndex) {
        const correctIndex = parseInt(questions[currentQuestionIndex].solution, 10) - 1;
        if (selectedIndex === correctIndex) {
            score++;
        } else {
            alert("Mauvaise réponse !");
        }
        currentQuestionIndex++;
        showQuestion();
    }

    loadQuestions();
});

