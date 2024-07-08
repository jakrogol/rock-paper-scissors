const options = ['rock', 'paper', 'scissors'];

let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

function getHumanChoice() {
  let choice = prompt("Please make a selection. 0 = Rock, 1 = Paper, 2 = Scissors");
  return options[choice];
}

function getComputerChoice() {
  return options[Math.floor(Math.random() * 3)];
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice == 'rock' && computerChoice == 'paper') {
    console.log("You lose! Paper beats rock.");
    computerScore++;
  }
  else if (humanChoice == 'rock' && computerChoice == 'scissors') {
    console.log("You win! Rock beats scissors!");
    humanScore++;
  }
  else if (humanChoice == 'paper' && computerChoice == 'rock') {
    console.log("You win! Paper beats rock!");
    humanScore++;
  }
  else if (humanChoice == 'paper' && computerChoice == 'scissors') {
    console.log("You lose! Scissors beats paper.");
    computerScore++;
  }
  else if (humanChoice == 'scissors' && computerChoice == 'rock') {
    console.log("You lose! Rock beats scissors.");
    computerScore++;
  }
  else if (humanChoice == 'scissors' && computerChoice == 'paper') {
    console.log("You win! Scissors beats paper!");
    humanScore++;
  }
  else {
    console.log(`You threw ${humanChoice} and the computer ALSO threw ${computerChoice}. Tie!`);
  }
  console.log(`Current score - You: ${humanScore}, Them: ${computerScore}`);
}
