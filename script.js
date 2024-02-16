
const questions = 
[
    {
        "question": "¿Cuál es el animal más grande?",
        "answers": [
            {text: "A. Perro"},
            {text: "A. Gato"},
            {text: "A. Rata"},
            {text: "A. Elefante"},
        ],

        "correct": 'A. Elefante'
    },
    {
        "question": "¿Qué hacemos hoy para comer?",
        "answers": [
            {text: "A. Arroz"},
            {text: "A. Garbanzos"},
            {text: "A. Rata"},
            {text: "A. Elefante"},
        ],

        "correct": 'A. Elefante'
    },
    {
        "question": "¿Quien la tine más grande?",
        "answers": [
            {text: "A. Robert"},
            {text: "A. Roberto"},
            {text: "A. Rob"},
            {text: "A. Roberto pito gordo"},
        ],

        "correct": 'A. Roberto'
    }
]

var rng = Math.floor(Math.random() * questions.length);

const question = document.getElementById('question')
const answers = document.getElementById('answers_btn')
const next_btn = document.getElementById('next-btn')

const correct = questions[rng]['correct']


let indexQuestion = 0
let score = 0

console.log(correct)

function starQuiz(){
    question.innerHTML = questions[rng]['question'];
    answers.innerHTML = questions[rng]['answers'].map(answer => `<button id='answers'
    onclick='checkAnswer("${answer.text}" , "${correct}")'>${answer.text}</button>`).join('');

}


function checkAnswer(a,b){
    if ( a == b){
        console.log('Correcto')

    }else{
        console.log('Incorrecto')
    }
    next_btn.style.display = 'block'
}

starQuiz()