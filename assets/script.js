//Make opening page like example opening page.
//Make Start button.
//Add text explaining the quiz. [finish this close to last]
//Make a link for High Scorers at top left (can be added last).
//Show a timer on top right.

//Make a timer start when Start button is pressed.

//Make a question present on screen.
//Make a array of objects with five questions, four possible answers, and the correct answer.
//On answer selection, decide if answer is wrong, subtract time, or if correct move on and not subtract time.
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
const pregunta = document.querySelector(".pregunta");
const answerA = document.querySelector(".answerA");
const answerB = document.querySelector(".answerB");
const answerC = document.querySelector(".answerC");
const answerD = document.querySelector(".answerD");
const correctOrWrong = document.querySelector(".correctOrWrong");
const timer = document.querySelector(".timer");
var finalScore = document.querySelector(".final-score");
var i = 0;
var questionIndex = 0;
var totalTime = 100;
var timerInterval;
var user1 = document.querySelector(".user1");

//defined the five questions as strings within an array of objects
const questions = [
  {
    question: "Which of these is not a primitive data type?",
    choices: ["a. Integer", "b. String", "c. Array", "d. Boolean"],
    answer: "c. Array",
  },
  {
    question: "Which of these characters is used to indicate a Class in CSS?",
    choices: ["a. #", "b. *", "c. @", "d. ."],
    answer: "d. .",
  },
  {
    question:
      "Which of the following characters is used to indicate an ID in CSS?",
    choices: ["a. .", "b. #", "c. &", "d. !"],
    answer: "b. #",
  },
  {
    question: "A variable is always which of the following:",
    choices: ["a. Method", "b. String", "c. Property", "d. Array"],
    answer: "c. Property",
  },
  {
    question: "A function is always which of the following:",
    choices: ["a. Method", "b. String", "c. Array", "d. Object"],
    answer: "a. Method",
  },
];
//added function to display starting section
function init() {
  startingSection.style.display = "block";
  fiveQuizQuestions.style.display = "none";
  inputInitial.style.display = "none";
  highScoresPage.style.display = "none";
  totalTime = 0;
  timer.textContent = "Time Left: " + totalTime;
  i = 0;
  totalTime = 100;
}
//added function to show questions
function showQuestions() {
  startingSection.style.display = "none";
  fiveQuizQuestions.style.display = "block";
  inputInitial.style.display = "none";
  highScoresPage.style.display = "none";

  // edge case
  if (i === questions.length) {
    return showInputInitial();
  }
  //iterate through questions and choices
  pregunta.textContent = questions[i].question;
  answerA.textContent = questions[i].choices[0];
  answerB.textContent = questions[i].choices[1];
  answerC.textContent = questions[i].choices[2];
  answerD.textContent = questions[i].choices[3];
}
//created function to start timer
function handleInterval() {
  timerInterval = setInterval(function () {
    totalTime--;
    timer.textContent = "Time Left:" + totalTime;

    if (totalTime < 0) {
      clearInterval(timerInterval);
      showInputInitial();
    }
  }, 1000);
  showQuestions();
}
//created function to show input initials screen
function showInputInitial() {
  clearInterval(timerInterval);

  startingSection.style.display = "none";
  fiveQuizQuestions.style.display = "none";
  inputInitial.style.display = "block";
  highScoresPage.style.display = "none";
  //keep timer from going negative
  if (totalTime < 0) {
    totalTime = 0;
  }
  //make the final score the total time
  finalScore.textContent = totalTime;
}
//created function to display high scores screen
function showHighScores() {
  startingSection.style.display = "none";
  fiveQuizQuestions.style.display = "none";
  inputInitial.style.display = "none";
  highScoresPage.style.display = "block";

  var initials = document.getElementById("initials").value;
  //store data in local storage
  window.localStorage.setItem("initials", initials);
  window.localStorage.setItem("totalTime", totalTime);
  //retrieve items from local storage
  var saveInitials = localStorage.getItem("initials");
  var saveScore = localStorage.getItem("totalTime");

  user1.textContent = saveInitials + " ----- " + totalTime;
}

//added functions to compare the four answer choices with the correct answer

function answerACompare() {
  if (questions[i].choices[0] === questions[i].answer) {
    i++;
    correctOrWrong.textContent = "Correct!";
    showQuestions();
  } else {
    i++;
    totalTime -= 10;
    correctOrWrong.textContent = "Wrong!";
    showQuestions();
  }

  setTimeout(function () {
    correctOrWrong.textContent = "";
  }, 1000);
}

function answerBCompare() {
  if (questions[i].choices[1] === questions[i].answer) {
    i++;
    correctOrWrong.textContent = "Correct!";
    showQuestions();
  } else {
    i++;
    totalTime -= 10;
    correctOrWrong.textContent = "Wrong!";
    showQuestions();
  }

  setTimeout(function () {
    correctOrWrong.textContent = "";
  }, 1000);
}

function answerCCompare() {
  if (questions[i].choices[2] === questions[i].answer) {
    i++;
    correctOrWrong.textContent = "Correct!";
    showQuestions();
  } else {
    i++;
    totalTime -= 10;
    correctOrWrong.textContent = "Wrong!";
    showQuestions();
  }

  setTimeout(function () {
    correctOrWrong.textContent = "";
  }, 1000);
}

function answerDCompare() {
  if (questions[i].choices[3] === questions[i].answer) {
    i++;
    correctOrWrong.textContent = "Correct!";
    showQuestions();
  } else {
    i++;
    totalTime -= 10;
    correctOrWrong.textContent = "Wrong!";
    showQuestions();
  }

  setTimeout(function () {
    correctOrWrong.textContent = "";
  }, 1000);
}

//added event listeners to trigger functions when buttons clicked
document
  .getElementById("start-quiz-button")
  .addEventListener("click", handleInterval);
document.getElementById("select-one").addEventListener("click", answerACompare);
document.getElementById("select-two").addEventListener("click", answerBCompare);
document
  .getElementById("select-three")
  .addEventListener("click", answerCCompare);
document
  .getElementById("select-four")
  .addEventListener("click", answerDCompare);
document
  .querySelector(".submit-initial-btn")
  .addEventListener("click", showHighScores);
document.querySelector(".play-again-btn").addEventListener("click", init);

init();
