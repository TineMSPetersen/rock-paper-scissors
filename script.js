function getComputerChoice() {
    // The const is an array defining the options
    const choice = ["Rock", "Paper", "Scissors"];

    // const random picks a random length from the above array
    const random = Math.floor(Math.random() * choice.length);

    // Returns the choice the computer made
    return choice[random];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock") {
        switch (computerSelection) {
            case 'Rock':
                console.log("Computer uses Rock!")
                console.log("A draw!");
                break;
            case 'Paper':
                console.log("Computer uses Paper!")
                console.log("You lose!")
                break;
            case 'Scissors':
                console.log("Computer uses Scissors!")
                console.log("You win!")
                break;
            default:
                console.log("Something went wrong");
        }
    } else if (playerSelection === "paper") {
        switch (computerSelection) {
            case 'Rock':
                console.log("Computer uses Rock!")
                console.log("You win!")
                break;
            case 'Paper':
                console.log("Computer uses Paper!")
                console.log("A draw!");
                break;
            case 'Scissors':
                console.log("Computer uses Scissors!")
                console.log("You lose!");
            default:
                console.log("Something went wrong");
        }
    } else {
        switch (computerSelection) {
            case 'Rock':
                console.log("Computer uses Rock!")
                console.log("You lose!");
                break;
            case 'Paper':
                console.log("Computer uses Paper!")
                console.log("You win!");
                break;
            case 'Scissors':
                console.log("Computer uses Scissors!")
                console.log("A draw!");
                break;
            default:
                console.log("Something went wrong");
        }
    }
}

let playerSelection = "scissors";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));