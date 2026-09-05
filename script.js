let playerScore = 0;
let cpuScore = 0;

const playScoreEl = document.getElementById("#player-score");
const cpuScoreEl = document.getElementById("#AI-score");
const resetbtn = document.getElementById("#reset");
const result = document.getElementById("#result");

const moveButton = document.querySelectorAll(".move");

for(let i = 0; i < moveButton.length; i++){
    moveButton[i].addEventListener("click", function () {
        const playerMove = this.getAttribute("data-move");
        playRound(playerMove);
    });
}

function playRound(playerMove) {
    console.log(playerMove);
}