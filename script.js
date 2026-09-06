let playerScore = 0;
let cpuScore = 0;

const playScoreEl = document.getElementById("player-score");
const cpuScoreEl = document.getElementById("AI-score");
const resetbtn = document.getElementById("reset");
const result = document.getElementById("result");

const moveButton = document.querySelectorAll(".move");

for(let i = 0; i < moveButton.length; i++){
    moveButton[i].addEventListener("click", function () {
        const playerMove = this.getAttribute("data-move");
        playRound(playerMove);
    });
}

function CPUMove () {
    const Move = Math.floor(Math.random() * 3);
    switch(Move){
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissor";
    }; 
}


function playRound(playerMove) {
    const cpuMove = CPUMove();
    let outcome;
    if(cpuMove === playerMove){
        result.innerHTML = "<p>Draw</p>";
    }
    else if((playerMove === "Rock" && cpuMove === "Scissor") ||
    (playerMove === "Paper" && cpuMove === "Rock") ||
    (playerMove === "Scissor" && cpuMove === "Paper")){
        outcome = "win";
    }
    else {
        outcome = "lose";
    }

    if(outcome === "win"){
        playerScore = playerScore + 1;
        result.innerHTML = "<p>You win</p>";
    }
    else if(outcome === "lose"){
        cpuScore = cpuScore + 1;
        result.innerHTML = "<p>You lose</p>";
    }

    playScoreEl.textContent = playerScore;
    cpuScoreEl.textContent = cpuScore;
    

    
    console.log("player move: " + playerMove + "\nCPU move: " + cpuMove);
    
}


resetbtn.addEventListener("click", function() {
    playerScore = 0;
    cpuScore = 0;

    playScoreEl.textContent = playerScore;
    cpuScoreEl.textContent = cpuScore;

    result.innerHTML = "<p>Choose your move to start</p>";
});
