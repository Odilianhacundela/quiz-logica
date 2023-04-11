const $startGameButton = document.querySelector(".start-quiz")
const $questionsContaineir = document.querySelector(".questions-container")
const $answersContainer = document.querySelector(".answers-container")
const $questionText = document.querySelector(".question")
const $nextQuestionButton = document.querySelector(".next-question")

$startGameButton.addEventListener("click", startGame)
$nextQuestionButton.addEventListener("click", displayNextQuestion)


let currentQuestionIndex = 0
let totalCorrect = 0



function startGame() {
    $startGameButton.classList.add("hide")
    $questionsContaineir.classList.remove("hide")
    displayNextQuestion()
}

function displayNextQuestion() {
   resetState();

    if (questions.length === currentQuestionIndex) {
        return finishGame()
    }

    $questionText.textContent = questions[currentQuestionIndex].question
    questions[currentQuestionIndex].answers.forEach(answer => {
        const newAnswer = document.createElement("button")
        newAnswer.classList.add("button", "answer")
        newAnswer.textContent = answer.text

        if (answer.correct) {
            newAnswer.dataset.correct = answer.correct
        }
        $answersContainer.appendChild(newAnswer)

        newAnswer.addEventListener("click", selectAnswer)
    })

}

function finishGame() {
    const totalQuestions = questions.length
    const perfomance = Math.floor((totalCorrect * 100 / totalQuestions))

    let message = ""

    switch (true) {
        case perfomance >= 90:
            message = "Parabéns, você é um gênio!"
            break;
        case perfomance >= 70:
            message = "Você é bom!"
            break;
        case perfomance >= 50:
            message = "Você é razoável!"
            break;
        case perfomance >= 30:
            message = "Você é péssimo!"
            break;
        case perfomance >= 10:
            message = "Você é burro !"
            break;
        default:
            message = "Você é um lixo!"

}

$questionsContaineir.innerHTML = 
`
<p class="final-message"> Você acertou ${totalCorrect} de ${totalQuestions} questões </p>
<span> ${message} </span>
<button onclick=window.location.reload() class="button"> Refazer Teste </button>
`

}

function resetState() {
    while ($answersContainer.firstChild) {
        $answersContainer.removeChild($answersContainer.firstChild)
    }

    document.body.removeAttribute("class")
    $nextQuestionButton.classList.add("hide")

}

function selectAnswer (event) {
    const answerClicked = event.target

    if (answerClicked.dataset.correct) {
      document.body.classList.add("correct")
      totalCorrect++
    } else {
      document.body.classList.add("incorrect")
    }

    document.querySelectorAll(".answer").forEach(button => {
        if (button.dataset.correct) {
            button.classList.add("correct")
        } else {
            button.classList.add("incorrect")
        }

        button.disabled = true;
    })
    $nextQuestionButton.classList.remove("hide")
    currentQuestionIndex++
}







const questions = [
    {
        question: "Qual é a próxima letra na sequência: A, E, I, M, Q, _?",
        answers: [
            { text: "U", correct: true },
            { text: "S", correct: false },
            { text: "T", correct: false },
            { text: "V", correct: false }
        ]
    },
    {
        question: "Se um relógio leva 6 segundos para tocar 6 horas, quanto tempo leva para tocar 12 horas?",
        answers: [
            { text: "12 segundos", correct: false },
            { text: "18 segundos", correct: true },
            { text: "24 segundos", correct: false },
            { text: "36 segundos", correct: false} 
        ]
    },
    {
        question: "Quantos meses do ano têm 28 dias?",
        answers: [
            { text: "1", correct: false },
            { text: "2", correct: false },
            { text: "6", correct: false },
            { text: "12", correct: true }
        ]
    },
    {
        question: "Se todos os Blips são Bloops e alguns Bloops são Bleeps, o que podemos concluir sobre os Blips e os Bleeps?",
        answers: [
            { text: "Todos os Blips são Bleeps", correct: false },
            { text: "Todos os Bleeps são Blips", correct: false },
            { text: "Alguns Blips são Bleeps", correct: true },
            { text: "Alguns Bleeps são Blips", correct: false }
        ]
    },
    {
        question: "Qual é a próxima figura na sequência: círculo, quadrado, triângulo, círculo, quadrado, _?",
        answers: [
            { text: "triângulo", correct: false },
            { text: "círculo", correct: false },
            { text: "quadrado", correct: false },
            { text: "retângulo", correct: true }
        ]
    },
    {
        question: "Qual é o próximo número na sequência: 1, 3, 6, 10, 15, _?",
        answers: [
            { text: "20", correct: true },
            { text: "24", correct: false },
            { text: "32", correct: false },
            { text: "36", correct: false }
        ]
    },
    {
        question: "Se um carro se move a 60 km/hora em uma estrada reta por 2 horas, quantos quilômetros ele terá percorrido?",
        answers: [
            { text: "60 km", correct: false },
            { text: "120 km", correct: true },
            { text: "180 km", correct: false },
            { text: "240 km", correct: false }
        ]
    },
    {
        question: "Se um relógio de parede adianta 5 minutos por hora, quantos minutos ele adiantará em um dia (24 horas)?",
        answers: [
            { text: "60 minutos", correct: false },
            { text: "120 minutos", correct: false },
            { text: "240 minutos", correct: true },
            { text: "300 minutos", correct: false }
        ]
    },
    {
        question: "Quantas vezes um ponteiro dos minutos passará pelo ponteiro das horas em um dia (24 horas)?",
        answers: [
            { text: "12 vez", correct: false },
            { text: "24 vezes", correct: true },
            { text: "48 vezes", correct: false },
            { text: "96 vezes", correct: false }
        ]
    },
    {
        question: "Qual é a próxima letra na sequência: J, F, M, A, M, _?",
        answers: [
            { text: "J", correct: true },
            { text: "A", correct: false },
            { text: "S", correct: false },
            { text: "O", correct: false }
        ]
    },

    
]