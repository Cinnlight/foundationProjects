// Rock Paper Scissors

// --- Computer function --- //
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

// Play a Round function
// Compare player choice and computer choice
// Output to the console stating if the player won, tied, or loss

function playRound(playerChoice, computerChoice) {
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

const playerChoise = "Paper";
const computerChoice = computerPlay();
console.log(playRound(playerChoise, computerChoice));