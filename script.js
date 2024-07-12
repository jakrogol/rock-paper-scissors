const options = ['rock', 'paper', 'scissors'];

// const rockBtn = document.querySelector("#rock");
// const paperBtn = document.querySelector("#paper");
// const scissorBtn = document.querySelector("#scissors");
const button = document.querySelectorAll("button");
const results = document.querySelector("#results");

let humanScore = 0;
let computerScore = 0;

button.addEventListener('click', playRound(button.id));

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  const resultMsg = document.createElement("p");

  if ((humanChoice == 'rock' && computerChoice == 'scissors')
    || (humanChoice == 'paper' && computerChoice == 'rock')
    || (humanChoice == 'scissors' && computerChoice == 'paper')) {
      resultMsg.textContent = `You win! ${humanChoice} beats ${computerChoice}!`;
      results.appendChild(resultMsg);
      humanScore++;
  }
  else if ((computerChoice == 'rock' && humanChoice == 'scissors')
    || (computerChoice == 'paper' && humanChoice == 'rock')
    || (computerChoice == 'scissors' && humanChoice == 'paper')) {
      resultMsg.textContent = `You lose. ${computerChoice} beats ${humanChoice}.`;
      results.appendChild(resultMsg);
      computerScore++;
  }
  else {
    results.appendChild(`You threw ${humanChoice} and the computer ALSO threw ${computerChoice}. Tie!`);
  }
  results.appendChild(`Current score - You: ${humanScore}, Them: ${computerScore}`);
}

// for (round = 0; round < 5; round++) {
//   let humanSelection = getHumanChoice();
//   let computerSelection = getComputerChoice();
//   playRound(humanSelection, computerSelection);
// }

// if (humanScore > computerScore) {
//   console.log("You win!");
// } else {
//   console.log("You lose!");
// }
// console.log(`Final score -- You: ${humanScore}, Them: ${computerScore}`);
// }

// function getHumanChoice() {
//   let choice = prompt("Please make a selection. 0 = Rock, 1 = Paper, 2 = Scissors");
//   return options[choice];
// }

function getComputerChoice() {
  return options[Math.floor(Math.random() * 3)];
}
