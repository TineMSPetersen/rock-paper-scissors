function getComputerChoice() {
    // The const is an array defining the options
    const choice = ["Rock", "Paper", "Scissors"];

    // const random picks a random length from the above array
    const random = Math.floor(Math.random() * choice.length);

    // Returns the choice the computer made
    return choice[random];
}

function playRound(playerSelection, computerSelection) {
    let result;
    
    if (playerSelection.toLowerCase() === "rock") {
        switch (computerSelection) {
            case 'Rock':
                console.log("Computer uses Rock!");
                console.log("A draw!");
                return result = "draw";

                break;
            case 'Scissors':
                console.log("Computer uses Scissors!");
                console.log("You win!")
                return result = "win";

                break;
            case 'Paper':
                console.log("Computer uses Paper!");
                console.log("You lose!")
                return result = "lose";

                break;
            default:
                console.log("Something went wrong");
        }
    } else if (playerSelection === "paper") {
        switch (computerSelection) {
            case 'Rock':
                console.log("Computer uses Rock!");
                console.log("You win!");
                return result = "win";

                break;
            case 'Paper':
                console.log("Computer uses Paper!");
                console.log("A draw!");
                return result = "draw";

                break;
            case 'Scissors':
                console.log("Computer uses Scissors!");
                console.log("You lose!");
                return result = "lose";

            default:
                console.log("Something went wrong");
        }
    } else {
        switch (computerSelection) {
            case 'Rock':
                console.log("Computer uses Rock!");
                console.log("You lose!");
                return result = "lose";

                break;
            case 'Scissors':
                console.log("Computer uses Scissors!");
                console.log("A draw!");
                return result = "draw";

                break;
            case 'Paper':
                console.log("Computer uses Paper!");
                console.log("You win!");
                return result = "win";

                break;
            default:
                console.log("Something went wrong");
        }
    }

    return result;
}

/*let playerSelection = "scissors";
 let computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection)); */

function game() {
    let gameresult = 0;
    let score = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper or Scissors?")
        computerSelection = getComputerChoice();
        // console.log(playRound(playerSelection, computerSelection));
        gameresult = playRound(playerSelection, computerSelection);

        if (gameresult === "win") {
            score = score + 1;

        } else if (gameresult === "draw") {
            score = score;

        } else if (gameresult === "lose") {
            score = score - 1;
        }

    }

    if (score < 0) {
        console.log("Too bad, you lost! The computer won!");
    } else if (score === 0) {
        console.log("It appear you're evenly matched! Try again");
    } else if (score > 0) {
        console.log("You won! Congratulations!");
    }
}
