//click start button timer starts and presented with questions
var startBtn = document.getElementById("startquiz")
//answer question am presented with another question
var questions = [
    { question: "Commonly used data types DO NOT include:", 
    choices : ["a. strings", "b. booleans", "c. alerts", "d. numbers"]
    answer: "c"
    },
    { question: "Arrays in JavaScript can be used to store ________.", 
    choices : ["a. numbers and strings", "b. other arrays", "c. booleans", "d. all of the above"]
    answer: "d"
    },
    { question: "The condition in an if / else statement is enclosed with ________.", 
    choices:  ["a. quotes", "b. curly brackets", "c. parenthesis", "d. square brackets"]
    answer: "b"
    },
    { question: "String values must be enclosed within ______ when being assigned to variables.", 
    choices : ["a. commas", "b. curly brackets", "c. quotes", "d. parenthesis"]
    answer: "c"
    },
    { question: "A very useful tool used during development and debugging for printing content to the debugger is:", 
    choices : ["a. JavaScript", "b. terminal/bash", "c. for loops", "d. console.log"]
    answer: "d"}
]

//answer question incorrectly time is subtracted from clock

//all questions answered or timer 0 game is over

//game over save initials and score

var timeLeft = document.getElementById ("timer");
var totalTime = 60;
var questionNumber = 0;
var quesitonCount = 1;

function countdown () {
    var timerInterval = setInterval(function() {
        totalTime --;
        timeLeft.textContent = totalTime;

    if (totalTime <= 0) {
        clearInterval(timerInterval);
        timeLeft.textContent = "Time is up!"
    } else if (quesitonCount >= questions.length +1) {
        clearInterval(timerInterval);
    }
    }, 1000)
}

function startQuiz () {
    countdown ();
}

startBtn.addEventListener("click", startQuiz)