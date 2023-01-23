//Make opening page like example opening page.
    //Make Start button.
    //Add text explaining the quiz. [finish this close to last]
    //Make a link for High Scorers at top left (can be added last). 
    //Show a timer on top right.

//Make a timer start when Start button is pressed.

//Make a question present on screen.
    //Make a array of objects with five questions, four possible answers, and the correct answer.
    //On answer selection, decide if answer is wrong, subtract time, or if correcnt move on and not subtract time.
    //Move on to next question. 
    //Start timer at 100 and take off 10 seconds for every wrong answer
//Build Game Over function for when time ends or all questions answered.
    //Set time left to Score. If no time left, score is 0. Make sure timer stops at 0.

//Make an input box to enter user's initials. 
    //Save score and initials to local storage.

//Render score to a High Score List.
    //List includes a Clear High Scores button and a Play Again button.    

const startingSection = document.querySelector(".starting-section");
const fiveQuizQuestions = document.querySelector(".five-quiz-questions");
const inputInitial = document.querySelector(".input-initials");
const highScoresPage = document.querySelector(".high-scores-page");
const pregunta = document.querySelector(".pregunta")
const answerA = document.querySelector(".answerA")
const answerB = document.querySelector(".answerB")
const answerC = document.querySelector(".answerC")
const answerD = document.querySelector(".answerD")
const correctOrWrong = document.querySelector(".correctOrWrong")
var i=0
var questionIndex = 0;
//define the five questions as strings within an array of objects
const questions = [
    {
        question: "This is the text of the first question.",
        choices: ["a. First Choice" , "b. Second Choice" , "c. Third Choice" , "d. Fourth Choice"] ,
        answer: "c. Third Choice"
    },
    {    

        question: "This is the text of the second question.",
        choices: ["a. First Choice" , "b. Second Choice" , "c. Third Choice" , "d. Fourth Choice"] ,
        answer: "d. Fourth Choice"
    },
    {    

        question: "This is the text of the third question.",
        choices: ["a. First Choice" , "b. Second Choice" , "c. Third Choice" , "d. Fourth Choice"] ,
        answer: "b. Second Choice"
    },
    {   
        question: "This is the text of the fourth question.",
        choices: ["a. First Choice" , "b. Second Choice" , "c. Third Choice" , "d. Fourth Choice"] ,
        answer: "c. Third Choice"
    },
    {    

        question: "This is the text of the fifth question.",
        choices: ["a. First Choice" , "b. Second Choice" , "c. Third Choice" , "d. Fourth Choice"] ,
        answer: "a. First Choice"
    }
];
//defined timer variables

// var totalTime = 100;
// function newQuiz() {
//     questionIndex = 0;
//     totalTime = 100;
//     timeLeft.textContent = totalTime;
//     initialInput.textContent = "";

//     startDiv.style.display = "none";
//     questionDiv.style.display = "block";
//     timer.style.display = "block";
//     timesUp.style.display = "none";

//     var startTimer = setInterval(function() {
//         totalTime--;
//         timeLeft.textContent = totalTime;
//         if(totalTime <= 0) {
//             clearInterval(startTimer);
//             if (questionIndex < questions.length - 1) {
//                 gameOver();
//             }
//         }
//     },1000);


let index = 0;
var answer = []
var score = 0;

var highScoresArray = [];


function init() {
    startingSection.style.display = "block";
    fiveQuizQuestions.style.display = "none";
    inputInitial.style.display = "none";
    highScoresPage.style.display = "none";
}

function startQuestion() {
    startingSection.style.display = "none";
    fiveQuizQuestions.style.display = "block";
    inputInitial.style.display = "none";
    highScoresPage.style.display = "none";

    pregunta.textContent = (questions[i].question)
    answerA.textContent = (questions[i].choices[0])
    answerB.textContent = (questions[i].choices[1])
    answerC.textContent = (questions[i].choices[2])
    answerD.textContent = (questions[i].choices[3])

}



function answerACompare() {
    if(questions[i].choices[0] === questions[i].answer) {
        i++  
        correctOrWrong.textContent = "Correct!";
        startQuestion()
    }
        else {
            totalTime -= 10;
            timeLeft.textContent = totalTime;
            correctOrWrong.textContent = "Wrong!";
            startQuestion()
    }
}

function answerBCompare() {
    if (questions[i].choices[1] === questions[i].answer) {
        i++  
        correctOrWrong.textContent = "Correct!";
        startQuestion()
    }
        else {
            totalTime -= 10;
            timeLeft.textContent = totalTime;
            correctOrWrong.textContent = "Wrong!";
            startQuestion()
    }
        
}

function answerCCompare() {
    if(questions[i].choices[2] === questions[i].answer) {
      i++  
      correctOrWrong.textContent = "Correct!";
      startQuestion()
    }
        else {
            totalTime -= 10;
            timeLeft.textContent = totalTime;
            correctOrWrong.textContent = "Wrong!";
            startQuestion()
        }
}


function answerDCompare() {
    if(questions[i].choices[3] === questions[i].answer) {
        i++  
        correctOrWrong.textContent = "Correct!";
        startQuestion()
    }
        else {
            totalTime -= 10;
            timeLeft.textContent = totalTime;
            correctOrWrong.textContent = "Wrong!";
            startQuestion()


        }
    
}

if (questionIndex < questions.length) {
    startQuestion();
} else {
    gameOver();
}

questionIndex++;

// // function gameOver() {
// //     summary.style.display = "block";
// //     questionDiv.style.display = "none";
// //     startDiv.style.display = "none";
// //     timer.style.display = "none";
// //     timesUp.style.display = "block";

// finalScore.textContent = correctAns;
// }


// function Initials() {
//     startingSection.style.display = "none";
//     fiveQuizQuestions.style.display = "none";
//     inputInitial.style.display = "block";
//     highScoresPage.style.display = "none";
// }

// function highScores() {
//     startingSection.style.display = "none";
//     fiveQuizQuestions.style.display = "none";
//     inputInitial.style.display = "none";
//     highScoresPage.style.display = "block";

// }
// console.log(questions[0].answer)

// function storeHighScores(event) {
//     event.preventDefault();

//     if (initialInput.value === "") {
//         alert("Please enter your initials!");
//         return;
//     } 

//     startDiv.style.display = "none";
//     timer.style.display = "none";
//     timesUp.style.display = "none";
//     summary.style.display = "none";
//     highScoreSection.style.display = "block";

// var savedHighScores = localStorage.getItem("high scores");
//     var scoresArray;

//     if (savedHighScores === null) {
//         scoresArray = [];
//     } else {
//         scoresArray = JSON.parse(savedHighScores)
//     }

//     var userScore = {
//         initials: initialInput.value,
//         score: finalScore.textContent
//     };

//     console.log(userScore);
//     scoresArray.push(userScore);

// var scoresArrayString = JSON.stringify(scoresArray);
//     window.localStorage.setItem("high scores", scoresArrayString);
    
//     showHighScores();

// function showHighScores() {

//     startDiv.style.display = "none";
//     timer.style.display = "none";
//     questionDiv.style.display = "none";
//     timesUp.style.display = "none";
//     summary.style.display = "none";
//     highScoreSection.style.display = "block";

//     var savedHighScores = localStorage.getItem("high scores");

// if (savedHighScores === null) {
//     return;
// }
// console.log(savedHighScores);

// var storedHighScores = JSON.parse(savedHighScores);

// for (; i < storedHighScores.length; i++) {
//     var eachNewHighScore = document.createElement("p");
//     eachNewHighScore.innerHTML = storedHighScores[i].initials + ": " + storedHighScores[i].score;
//     listOfHighScores.appendChild(eachNewHighScore);
// }



init()

document.getElementById("start-quiz-button").addEventListener("click", startQuestion)
document.getElementById("select-one").addEventListener("click", answerACompare)
document.getElementById("select-two").addEventListener("click", answerBCompare)
document.getElementById("select-three").addEventListener("click", answerCCompare)
document.getElementById("select-four").addEventListener("click", answerDCompare)

document.getElementById("submit-initial-button").addEventListener("click", function(event){ 
    storeHighScores(event);
});
document.getElementById("play-again-btn").addEventListener("click",function()
    window.localStorage.removeItem("high scores");
    listOfHighScores.innerHTML = "High Scores Cleared!";