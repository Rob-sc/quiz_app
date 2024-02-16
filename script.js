
const questions = 
[
    {
        "question": "¿Cuál es el animal más grande?",
        "answers": {
            "A": "Perro",
            "B": "Rata",
            "C": "Elefante",
            "D": "Pingüino"
        }
    },
    {
        "question": "¿Qué hacemos hoy para comer?",
        "answers": {
            "A": "Perro",
            "B": "Rata",
            "C": "Elefante",
            "D": "Pingüino"
        }
    },
    {
        "question": "¿Quien la tine más grande?",
        "answers": {
            "A": "Perro",
            "B": "Rata",
            "C": "Elefante",
            "D": "Pingüino"
        }
    }
]

var rng = Math.floor(Math.random() * questions.length());

const question = document.getElementById('question')
const answers = document.getElementById('answers_btn')
const next_btn = document.getElementById('next-btn')



question.innerHTML = questions[rng]['question'];
answers.innerHTML = questions[rng]['answers'].map()
