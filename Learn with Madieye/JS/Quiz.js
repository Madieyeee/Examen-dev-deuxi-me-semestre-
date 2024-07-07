document.addEventListener('DOMContentLoaded', function() {
    const quizData = [
        {
            question: "Quelle balise HTML est utilisée pour définir un titre de niveau 1 ?",
            a: "h1",
            b: "title",
            c: "header",
            correct: "a"
        },
        {
            question: "Quelle propriété CSS est utilisée pour changer la couleur de fond d'un élément ?",
            a: "color",
            b: "background-color",
            c: "border-color",
            correct: "b"
        },
        {
            question: "Comment pouvez-vous créer une fonction en JavaScript ?",
            a: "function:myFunction()",
            b: "function myFunction()",
            c: "create myFunction()",
            correct: "b"
        },
        {
            question: "Quelle classe Bootstrap est utilisée pour créer un bouton de style primaire ?",
            a: ".btn-main",
            b: ".btn-primary",
            c: ".btn-first",
            correct: "b"
        }
    ];

    const quizContainer = document.getElementById('quiz-container');
    const submitBtn = document.getElementById('submit-btn');
    const resultContainer = document.getElementById('result');

    function loadQuiz() {
        quizContainer.innerHTML = '';
        quizData.forEach((quizItem, index) => {
            const questionElement = document.createElement('div');
            questionElement.classList.add('question');
            questionElement.innerHTML = `
                <h3>${index + 1}. ${quizItem.question}</h3>
                <ul class="answers">
                    <li>
                        <input type="radio" name="question${index}" id="question${index}a" value="a">
                        <label for="question${index}a">${quizItem.a}</label>
                    </li>
                    <li>
                        <input type="radio" name="question${index}" id="question${index}b" value="b">
                        <label for="question${index}b">${quizItem.b}</label>
                    </li>
                    <li>
                        <input type="radio" name="question${index}" id="question${index}c" value="c">
                        <label for="question${index}c">${quizItem.c}</label>
                    </li>
                </ul>
            `;
            quizContainer.appendChild(questionElement);
        });
    }

    function getSelectedAnswers() {
        const answers = document.querySelectorAll('.answers input[type="radio"]:checked');
        return [...answers].map(answer => answer.value);
    }

    function calculateScore(selectedAnswers) {
        let score = 0;
        selectedAnswers.forEach((answer, index) => {
            if (answer === quizData[index].correct) {
                score++;
            }
        });
        return score;
    }

    submitBtn.addEventListener('click', function() {
        const selectedAnswers = getSelectedAnswers();
        if (selectedAnswers.length !== quizData.length) {
            alert('Veuillez répondre à toutes les questions');
        } else {
            const score = calculateScore(selectedAnswers);
            resultContainer.innerHTML = `Vous avez obtenu ${score} sur ${quizData.length} points.`;
        }
    });
    loadQuiz();
});
