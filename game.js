const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll("۔choices-text"));
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#score");
const progressBarFull = document.querySelector("#progressBarFull");

let currentQuestion = {};
let acceptingAsnwers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
