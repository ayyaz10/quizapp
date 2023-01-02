const startButton = document.querySelector("#start-button");
const nextButton = document.querySelector("#next-button");

const questionContainer = document.querySelector("#question-container");
const question = document.querySelector("#question");
const answerButtons = document.querySelector("#answer-buttons");

let shuffledQuestions, currectQuestionIndex;
let quizScore = 0;

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

const questions = [
  {
    question: "Who is the father of HTML?",
    answers: [
      { text: "Rasmus Lerdorf", correct: false },
      { text: "Tim Berners-Lee", correct: true },
      { text: "Brendan Eich", correct: false },
      { text: "Sergey Brin", correct: false },
    ],
  },
  {
    question: "What is the correct syntax of doctype in HTML5",
    answers: [
      { text: "</doctype html>", correct: false },
      { text: "<doctype html>", correct: false },
      { text: "<doctype html!>", correct: false },
      { text: "<!doctype html>", correct: true },
    ],
  },
  {
    question: "Which element is used for or styling HTML5 layout?",
    answers: [
      { text: "CSS", correct: true },
      { text: "jQuery", correct: false },
      { text: "JavaScript", correct: false },
      { text: "PHP", correct: false },
    ],
  },
  {
    question: "HTML is a subset of",
    answers: [
      { text: "SGMT", correct: false },
      { text: "SGML", correct: true },
      { text: "SGME", correct: false },
      { text: "XHTML", correct: false },
    ],
  },
];
