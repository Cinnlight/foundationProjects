// Rock Paper Scissors

// ----- 

// ----- Computer random choice function ----- //
// Randomly select between Rock, Paper, and Scissors


function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"];
    
    let randomChoice = Math.floor(Math.random() * choices.length);
        switch (randomChoice) {
            case 0: 
                return 'Rock';
            case 1: 
                return 'Paper';
            case 2: 
                return 'Scissors';
            default: 
                console.log("Computer is unable to chose!");
                break;
            
        }
    }

// ----- Play a Round function ---- //
// Ensure player input is case insensitive
// Compare player choice and computer choice
// Return round result
// Reflect wins/losses in UI

    function playRound(playerChoice, computerChoice) {

        if (playerChoice === null) { // Keep program working if user hits cancel
        console.log("You didn't pick something!");
        return ("invalidChoice"); }

        playerChoice = (playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase());

        if (playerChoice === computerChoice) {
            roundResult.textContent = `Tie! You both chose ${playerChoice}`
            return("tie");
        } else if (playerChoice === "Rock") {
            if (computerChoice === "Paper") {
                roundResult.textContent = "You lost! Paper beats Rock";
                computerScore.textContent = cScore++;
                return ("lose");
            } else if (computerChoice === "Scissors") {
                roundResult.textContent = "You win! Rock beats Scissors";
                playerScore.textContent = pScore++;
                return ("win");
            } else {
                return ("Something went wrong here...");
            }
        } else if (playerChoice === "Paper") {
            if (computerChoice === "Rock") {
                roundResult.textContent = "You win! Paper beats Rock";
                playerScore.textContent = pScore++;
                return ("win");
            } else if (computerChoice === "Scissors") {
                roundResult.textContent = "You lost! Scissors beats Paper";
                computerScore.textContent = cScore++;
                return ("lose");
            } else {
                console.log("Something went wrong here...")
                return ("Something went wrong here...");
            }
        } else if (playerChoice === "Scissors") {
            if (computerChoice === "Rock") {
                roundResult.textContent = "You lost! Rock beats Scissors";
                computerScore.textContent = cScore++;
                return ("lose");
            } else if (computerChoice === "Paper") {
                roundResult.textContent = "You win! Scissors beats Paper";
                playerScore.textContent = pScore++;
                return ("win");
            } else {
                roundResult.textContent = "Error: Couldn't determine winner of round.";
                return ("Error: Couldn't determine winner of round.");
            }
        } else if (playerChoice === "Reset") {
            roundResult.textContent = "Welcome! Press a button to begin playing.";
            return ("reset");
        } else {
            console.log(`${playerChoice} is not valid. Please chose Rock, Paper, or Scissors.`);
            return ("invalidChoice");
        }
    }

// ----- Document selectors ----- //

const buttons = document.querySelectorAll('.btn');
const results = document.querySelector('#roundResult');
let playerScore = document.querySelector('#playerScore');
let computerScore = document.querySelector('#computerScore');
let roundNumber = document.querySelector('#roundNumber');
let playAgainText = document.querySelector('#playAgainText');

// ----- Button on-click styling, run round on click ----- //
// Tally rounds won, lost, and played
// Update elements to reflect rounds won, lost, and played

let pScore = 1;
let cScore = 1;
let roundCount = 0;

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        event.target.classList.add('clicked');
        if (button.id === "reset") {                
            pScore = 1;
            cScore = 1;
            roundCount = -1;
            computerScore.textContent = "-";
            playerScore.textContent = "-";
            playAgainText.textContent = "";
        }

        let playerChoice = `${button.id}`;
        let computerChoice = computerPlay();

        if (roundCount < 4) {
            playRound(playerChoice,computerChoice);
            roundCount++;
        } else if (roundCount === 4) {
            playRound(playerChoice,computerChoice);
            roundCount = 5;

             if (pScore === cScore) {
                roundResult.textContent = "It was a draw!";
                playAgainText.textContent = "Press Reset to play again."
            } else if (pScore > cScore) {
                roundResult.textContent = `Congrats, you win with a score of ${pScore - 1}:${cScore - 1}`;
                playAgainText.textContent = "Press Reset to play again."
            } else if (pScore < cScore) {
                roundResult.textContent = `You lost with a score of ${pScore - 1}:${cScore - 1}`;
                playAgainText.textContent = "Press Reset to play again."
            } else {
                roundResult.textContent = `Couldn't determain game winner!`;
            }
        }

        roundNumber.textContent = `${roundCount}`;
    });
});

function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('clicked');
}

buttons.forEach(btn => btn.addEventListener('transitionend', removeTransition));





// ----- Obsolete 5-round game function, kept for reference ----- //
// Get user input for game
// Play game for 5 rounds
// Track ties, winner and loser for each round
// Report winner and loser at the end of 5 rounds

// function game() {
//     let roundWin = 0;
//     let roundLoss = 0;
//     let roundTie = 0;
//     console.log("Let's play 5 rounds of Rock, Paper Scissors!")

//     for (let i = 0; i < 5; i++) {
//         let playerChoice = prompt("Please chose Rock, Paper, or Scissors"); // Replace with button choice
//         let computerChoice = computerPlay();

//         let result = playRound(playerChoice, computerChoice);
//             switch (result) {
//                 case "win": 
//                     roundWin++;
//                     break;
//                 case "lose": 
//                     roundLoss++;
//                     break;
//                 case "tie": 
//                     roundTie++;
//                     break;
//                 case "invalidChoice": 
//                     i--;
//                     break;
//                 default: i = 5;
//                     console.log("Something went wrong - terminating game. Couldn't determine round winner within game function.");
//                     break;
//             }

//         while (i === 4) {
//             if (roundWin > roundLoss) {
//                 console.log(`You win! The score was ${roundWin}:${roundLoss} with ${roundTie} tied rounds. Refresh to play again!`);
//                 i++;
//             } else if (roundWin < roundLoss) {
//                 console.log(`You lost! The score was ${roundWin}:${roundLoss} with ${roundTie} tied rounds. Refresh to play again!`);
//                 i++;

//             } else if (roundWin === roundLoss) {
//                 console.log(`It was a tie! The score was ${roundWin}:${roundLoss} with ${roundTie} tied rounds. Refresh to play again!`);
//                 i++;
//             } else {
//                 console.log("Something went wrong. Unable to determine winner or loser at end of game.");
//             }
//         }
//     }
// }

// game();