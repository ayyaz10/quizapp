const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#score");
const progressBarFull = document.querySelector("#progressBarFull");

let currentQuestion = {};
let acceptingAsnwers = true;
let score = 0;
let questionsCounter = 0;
let availableQuestions = [];

const questions = [
  {
    question: "Who is the father of HTML?",
    choice1: "Rasmus Lerdorf",
    choice2: "Tim Berners-Lee",
    choice3: "Brendan Eich",
    choice4: "Sergey Brin",
    answer: 2,
  },
  {
    question: "Which element is used for or styling HTML5 layout?",
    choice1: "CSS",
    choice2: "jQuery",
    choice3: "JavaScript",
    choice4: "PHP",
    answer: 1,
  },
  {
    question: "What is the correct syntax of doctype in HTML5",
    choice1: "</doctype html>",
    choice2: "<doctype html>",
    choice3: "<doctype html!>",
    choice4: "<!doctype html>",
    answer: 4,
  },
  {
    question: "HTML is a subset of",
    choice1: "SGMT",
    choice2: "SGML",
    choice3: "SGME",
    choice4: "XHTML",
    answer: 2,
  },
];

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 4;

function startGame() {
  questionsCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  getNewQuestion();
}
startGame();
function getNewQuestion() {
  if (availableQuestions.length === 0 || questionsCounter > MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);
    return window.location.assign("/end.html");
  }

  questionsCounter++;
  progressText.innerText = `Question ${questionsCounter} of ${MAX_QUESTIONS}`;
  progressBarFull.getElementsByClassName.width = `${
    (questionsCounter / MAX_QUESTIONS) * 100
  }%`;
  //   creating an index to select the question from the questions Array
  const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionsIndex];
  question.innerText = currentQuestion.question;

  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuestions.splice(questionsIndex, 1);

  acceptingAsnwers = true;
}

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAsnwers) return;

    acceptingAsnwers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];
    console.log(currentQuestion.answer);
    let classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
    if (classToApply === "correct") {
      incrementScore(SCORE_POINTS);
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});
// startGame();
