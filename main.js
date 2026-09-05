function getComputerChoice() {
    var Choice = Math.floor(Math.random() * 3);
    switch (Choice) {
        case 0:
            return 1; //Rock
            break;
        case 1:
            return 2; //Paper
            break;
        case 2:
            return 3; //Scissors
            break;
    }
}

function getHumanChoice() {
    let Choice = prompt("pick a move\n 1) Rock\n 2) Paper\n 3) Scissors", "1");
    switch(Choice){
        case "1":
            return 1;
            break;
        case "2":
            return 2;
            break;
        case "3":
            return 3;
            break;
    }
}

const ComputerChoice = getComputerChoice();
const HumanChoice = getHumanChoice();

if(ComputerChoice === HumanChoice){
    console.log("Same move, draw");
}

else if(ComputerChoice > HumanChoice){
    console.log("You lose");
}

else if(HumanChoice > ComputerChoice){
    console.log("You win");
}

else if(HumanChoice == 1 && ComputerChoice == 3){
    console.log("You win");
}

else if(ComputerChoice == 1 && HumanChoice == 3){
    console.log("You lose");
}

