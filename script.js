
const questions = 
[
    {
        "question": "¿Cuál es el animal más grande?",
        "answers": [
            {text: "A. Perro"},
            {text: "B. Gato"},
            {text: "C. Rata"},
            {text: "D. Elefante"},
        ],

        "correct": 'D. Elefante'
    },
    {
        "question": "¿Qué hacemos hoy para comer?",
        "answers": [
            {text: "A. Arroz"},
            {text: "B. Garbanzos"},
            {text: "C. Rata"},
        ],

        "correct": 'A. Arroz'
    },
    {
        "question": "¿Quien la tine más grande?",
        "answers": [
            {text: "A. Robert"},
            {text: "B. Roberto"},
            {text: "C. Rob"},
            {text: "D. Roberto pito gordo"},
        ],

        "correct": 'B. Roberto'
    }
]

let indexQuestion = 0;
let score = 0;

const nextBtn = document.getElementById('next-btn');
const answersElement = document.getElementById('answers_btn');
const buttons = document.getElementById('answers');

function startQuiz(){
    const rng = Math.floor(Math.random() * questions.length);
    const questionElement = document.getElementById('question');
    const correct = questions[rng].correct;

    questionElement.innerHTML = questions[rng].question;
    answersElement.innerHTML = questions[rng].answers.map(answer => {
        if (answer.text === correct){
            return   `<button id="answers" onclick="checkAnswer('${answer.text}', '${correct}')" class="correct"> ${answer.text} </button>`;
        }else{
            return   `<button id="answers" onclick="checkAnswer('${answer.text}', '${correct}')" class="incorrect"> ${answer.text} </button>`;
        }
        }).join('');
    nextBtn.style.display = 'none';
    
}

function checkAnswer(selectedAnswer, correctAnswer){
    if (selectedAnswer === correctAnswer){
        score++;

    }

    nextBtn.style.display = 'block';
}


function showAnswer(){
    return buttons.removeAttribute('id');
}

function nextQuestion(){
    indexQuestion++;
    if (indexQuestion === questions.length){
        alert('¡Fin del quiz! Tu puntuación es: ' + score + '/' + questions.length);
        indexQuestion = 0;
        score = 0;
    }
    startQuiz();
}

startQuiz();