const playerName = document.querySelector("#playername");
const saveScoreBtn = document.querySelector("#saveScoreBtn");
const finalScore = document.querySelector("#finalScore");
const mostRecentScore =
  JSON.parse(localStorage.getItem("mostRecentScore")) || "";

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

playerName.addEventListener("keyup", () => {
  //   when input populates with text, ! turns playerName.value to false which is assigned to saveScoreBtn.disabled
  saveScoreBtn.disabled = !playerName.value;
});

function saveHighScore(e) {
  console.log(e);
  e.preventDefault();

  const score = {
    score: mostRecentScore,
    name: playerName.value,
  };

  highScores.push(score);

  highScores.sort((a, b) => {
    return b.score - a.score;
  });

  highScores.splice(5);
  localStorage.setItem("highScores", JSON.stringify(highScores));

  window.location.assign("/");
}
