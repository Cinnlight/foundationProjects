// Rock Paper Scissors

// ----- Computer random choice function ----- //
// Randomly select between Rock, Paper, and Scissors


const choices = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    let randomChoice = Math.floor(Math.random() * choices.length);
        if (randomChoice === 0) {
            return 'Rock';
        } else if (randomChoice === 1) {
            return 'Paper';
        } else if (randomChoice === 2) {
            return 'Scissors';
        } else {
            console.log("Computer is unable to chose!");
        }
    }

// ----- Play a Round function ---- //
// Ensure player input is case insensitive
// Compare player choice and computer choice
// Output to the console stating if the player won, tied, or loss

function playRound(playerChoice, computerChoice) {
    playerChoice = (playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase());

    if (playerChoice === "Rock") {
        if (computerChoice === "Rock") {
            return ("Tie! You both picked Rock");
        } else if (computerChoice === "Paper") {
            return ("You lose! Paper beats Rock");
        } else if (computerChoice === "Scissors") {
            return ("You win! Rock beats Scissors");
        } else {
            return ("Something went wrong here...");
        }
    } else if (playerChoice === "Paper") {
        if (computerChoice === "Rock") {
            return ("You win! Paper beats Rock");
        } else if (computerChoice === "Paper") {
            return ("Tie! You both picked Paper");
        } else if (computerChoice === "Scissors") {
            return ("You lose! Scissors beats Paper");
        } else {
            return ("Something went wrong here...");
        }
    } else if (playerChoice === "Scissors") {
        if (computerChoice === "Rock") {
            return ("You lose! Rock beats Scissors");
        } else if (computerChoice === "Paper") {
            return ("You win! Scissors beats Paper");
        } else if (computerChoice === "Scissors") {
            return ("Tie! You both picked Scissors");
        } else {
            return ("Something went wrong here...");
        }
    } else {
        return (`${playerChoice} is not valid. Please chose Rock, Paper, or Scissors.`)
    }
}

// const playerChoice = "Rock";
const computerChoice = computerPlay();
// console.log(playRound(playerChoice, computerChoice));

// ----- Game Function ----- //
// Get user input for game
// Play game for 5 rounds
// Track winner and loser for each round
// Report winner and loser at the end of 5 rounds

// Note: Currently non-functional
// the (playRound).includes statement is not working,
// likely because the function is not a string.
// Either the function will need to be converted to a string,
// or the return value in playRound will need to be changed to be more useful

function game() {
    let roundWin = 0;
    let roundLoss = 0;
    let roundTie = 0;

    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt("Please chose Rock, Paper, or Scissors");
        let computerChoice = computerPlay();

        playRound(playerChoice, computerChoice);
            if ((playRound).includes("win") === true) {
                (roundWin++);
            } else if ((playRound).includes("lose") === true) {
                (roundLoss++);
            } else if ((playRound).includes("Tie") === true) {
                (roundTie++ && i--);
            }
        
        while (i === 4) {
            if (roundWin > roundLoss) {
                  if (confirm(`You won! The score was ${roundWin}:${roundLoss}\nWould you like to play again?`) === true) {
                        i = 0;
                    }
            } else if (roundWin < roundLoss) {
                  if (confirm(`You lost! The score was ${roundWin}:${roundLoss}\nWould you like to play again?`) === true) {
                        i = 0;
                    }
            } else {
                console.log("Something went wrong. Unable to determain winner or loser.")
            }
        }
    }
}

game();