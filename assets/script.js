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
const timer = document.querySelector(".timer")
var i=0
var questionIndex = 0;
var totalTime = 100;
var timerInterval;

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
]

function init() {
    startingSection.style.display = "block";
    fiveQuizQuestions.style.display = "none";
    inputInitial.style.display = "none";
    highScoresPage.style.display = "none";
    timer.textContent = totalTime;
}

function showQuestions() {
    startingSection.style.display = "none";
    fiveQuizQuestions.style.display = "block";
    inputInitial.style.display = "none";
    highScoresPage.style.display = "none";
    
    // edge case 
    if (i === questions.length) {
        return showInputInitial();
    }

    pregunta.textContent = (questions[i].question)
    answerA.textContent = (questions[i].choices[0])
    answerB.textContent = (questions[i].choices[1])
    answerC.textContent = (questions[i].choices[2])
    answerD.textContent = (questions[i].choices[3])

    handleInterval();
}

function handleInterval() {  
    timerInterval = setInterval(function() {
        totalTime--;
        timer.textContent = totalTime;

        if (totalTime < 0) {
            clearInterval(timerInterval);
            showInputInitial();
        }
    }, 1000)
}

function showInputInitial() {
    clearInterval(timerInterval);

    startingSection.style.display = "none";
    fiveQuizQuestions.style.display = "none";
    inputInitial.style.display = "block";
    highScoresPage.style.display = "none";
}

function answerACompare() {
    if(questions[i].choices[0] === questions[i].answer) {
        i++  
        correctOrWrong.textContent = "Correct!";
        showQuestions();
        
    }
    else {
        i++  
        totalTime -= 10
        correctOrWrong.textContent = "Wrong!";
        showQuestions();
    }

    setTimeout(function() {
        correctOrWrong.textContent = "";
    }, 1000)
}

function answerBCompare() {
    if(questions[i].choices[1] === questions[i].answer) {
        i++  
        correctOrWrong.textContent = "Correct!";
        showQuestions();
      
    }
    else {
        i++  
        totalTime -= 10
        correctOrWrong.textContent = "Wrong!";
        showQuestions();
    }
    
    setTimeout(function() {
        correctOrWrong.textContent = "";
    }, 1000)
}

function answerCCompare() {
    if(questions[i].choices[2] === questions[i].answer) {
      i++  
      correctOrWrong.textContent = "Correct!";
      showQuestions();
      
    }
    else {
        i++  
        totalTime -= 10
        correctOrWrong.textContent = "Wrong!";
        showQuestions();
    }

    setTimeout(function() {
        correctOrWrong.textContent = "";
    }, 1000)
}


function answerDCompare() {
    if(questions[i].choices[3] === questions[i].answer) {
        i++  
        correctOrWrong.textContent = "Correct!";
        showQuestions();
       
    }
    else {
        i++  
        totalTime -= 10
        correctOrWrong.textContent = "Wrong!";
        showQuestions();
    }

    setTimeout(function() {
        correctOrWrong.textContent = "";
    }, 1000)
}


init()

document.getElementById("start-quiz-button").addEventListener("click", showQuestions)
document.getElementById("select-one").addEventListener("click", answerACompare)
document.getElementById("select-two").addEventListener("click", answerBCompare)
document.getElementById("select-three").addEventListener("click", answerCCompare)
document.getElementById("select-four").addEventListener("click", answerDCompare)

