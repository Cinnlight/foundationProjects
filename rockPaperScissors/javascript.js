// Rock Paper Scissors

// ----- Computer random choice function ----- //
// Randomly select between Rock, Paper, and Scissors


function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"];
    
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
            console.log("Tie! You both chose Rock.");
            return ("tie");
        } else if (computerChoice === "Paper") {
            console.log("You lose! Paper beats Rock");
            return ("lose");
        } else if (computerChoice === "Scissors") {
            console.log("You win! Rock beats Scissors")
            return ("win");
        } else {
            return ("Something went wrong here...");
        }
    } else if (playerChoice === "Paper") {
        if (computerChoice === "Rock") {
            console.log ("You win! Paper beats Rock");
            return ("win");
        } else if (computerChoice === "Paper") {
            console.log("Tie! You both chose Paper");
            return ("tie");
        } else if (computerChoice === "Scissors") {
            console.log("You lost! Scissors beats Paper");
            return ("lose");
        } else {
            return ("Something went wrong here...");
        }
    } else if (playerChoice === "Scissors") {
        if (computerChoice === "Rock") {
            console.log("You lose! Rock beats Scissors");
            return ("lose");
        } else if (computerChoice === "Paper") {
            console.log("You win! Scissors beats Paper");
            return ("win");
        } else if (computerChoice === "Scissors") {
            console.log("Tie! You both chose Scissors");
            return ("tie");
        } else {
            console.log("Error: Couldn't determain winner of round.");
            return ("Error: Couldn't determain winner of round.");
        }
    } else if (playerChoice === null) {
        console.log("You didn't pick something!");
        return ("tie");
    } else {
        console.log(`${playerChoice} is not valid. Please chose Rock, Paper, or Scissors.`);
        return ("tie");
    }
}

// ----- Game Function ----- //
// Get user input for game
// Play game for 5 rounds
// Track ties, winner and loser for each round
// Report winner and loser at the end of 5 rounds

function game() {
    let roundWin = 0;
    let roundLoss = 0;
    let roundTie = 0;

    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt("Please chose Rock, Paper, or Scissors");
        let computerChoice = computerPlay();

        let result = playRound(playerChoice, computerChoice);
            if (result === "win") {
                (roundWin++);
            } else if (result === "lose") {
                (roundLoss++);
            } else if (result === "tie") {
                (roundTie++);
            } else {
                console.log("Error: Couldn't determine round winner within game function.");
            }
        
        while (i === 4) {
            if (roundWin > roundLoss) {
                console.log(`You win! The score was ${roundWin}:${roundLoss} with ${roundTie} tied rounds. Refresh to play again!`);
                i++;
            } else if (roundWin < roundLoss) {
                console.log(`You lost! The score was ${roundWin}:${roundLoss} with ${roundTie} tied rounds. Refresh to play again!`);
                i++;

            } else if (roundWin === roundLoss) {
                console.log(`It was a tie! The score was ${roundWin}:${roundLoss} with ${roundTie} tied rounds. Refresh to play again!`);
                i++;
            } else {
                console.log("Something went wrong. Unable to determain winner or loser at end of game.");
            }
        }
    }
}

game();