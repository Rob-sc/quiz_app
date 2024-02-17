
const questions = 
[
    {
        "question": "¿Cuál es el animal más grande?",
        "answers": [
            {text: "A. Perro"},
            {text: "B. Gato fuera un texto debidamente consturido sería un problema para los botones de abajo? en lugar de la mancha de cuyo nombre no quiero acordarme habia una cabra que comia latas todas las mañanas."},
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
let first_click = true

const nextBtn = document.getElementById("nextBtn")
const showBtn = document.getElementById("showBtn")
const answersElement = document.getElementById('answers_btn');
const buttons = document.getElementById('answers');

function startQuiz(){
    const rng = Math.floor(Math.random() * questions.length);
    const questionElement = document.getElementById('question');
    const correct = questions[rng].correct;
    first_click = true

    questionElement.innerHTML = questions[rng].question;
    answersElement.innerHTML = questions[rng].answers.map(answer => {
        if (answer.text === correct){
            return   `<button id="correct" onclick="checkAnswer('${answer.text}', '${correct}')" class="answers"> ${answer.text} </button>`;
        }else{
            return   `<button id="incorrect" onclick="checkAnswer('${answer.text}', '${correct}')" class="answers"> ${answer.text} </button>`;
        }
        }).join('');

    nextBtn.style.display = 'none';
    showBtn.style.display = 'none';

}

function checkAnswer(selectedAnswer, correctAnswer){
    
    if (first_click)
        if (selectedAnswer === correctAnswer){
            score++;

        }else{
            first_click = !first_click
            console.log(first_click)
        }

    nextBtn.style.display = 'inline';
    showBtn.style.display = 'inline';
}


function showAnswer(){
    const correctBtn = document.getElementById('correct')
    correctBtn.style.backgroundColor = "#6be88a36"; 
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