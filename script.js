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
                return 0;
                break;
            case 'Scissors':
                console.log("Computer uses Scissors!")
                console.log("You win!")
                return 1;
                break;
            case 'Paper':
                console.log("Computer uses Paper!")
                console.log("You lose!")

                return -1;
                break;
            default:
                console.log("Something went wrong");
        }
    } else if (playerSelection === "paper") {
        switch (computerSelection) {
            case 'Rock':
                console.log("Computer uses Rock!")
                console.log("You win!")

                return 1;
                break;
            case 'Paper':
                console.log("Computer uses Paper!")
                console.log("A draw!");

                return 0;
                break;
            case 'Scissors':
                console.log("Computer uses Scissors!")
                console.log("You lose!");

                return -1;
            default:
                console.log("Something went wrong");
        }
    } else {
        switch (computerSelection) {
            case 'Rock':
                console.log("Computer uses Rock!")
                console.log("You lose!");

                return -1;
                break;
            case 'Scissors':
                console.log("Computer uses Scissors!")
                console.log("A draw!");

                return 0;
                break;
            case 'Paper':
                console.log("Computer uses Paper!")
                console.log("You win!");

                return 1;
                break;
            default:
                console.log("Something went wrong");
        }
    }
}

/*let playerSelection = "scissors";
 let computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection)); */

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper or Scissors?")
        computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }


}