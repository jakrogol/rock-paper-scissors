const options = ['rock', 'paper', 'scissors'];

const buttons = document.querySelectorAll('button');
const results = document.querySelector('#results');

let humanScore = 0;
let computerScore = 0;

buttons.forEach(button => {
  button.addEventListener('click', () => playRound(button.id));
});

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  const resultMsg = document.createElement("p");
  const currentScore = document.createElement("p");

  if ((humanChoice == 'rock' && computerChoice == 'scissors')
    || (humanChoice == 'paper' && computerChoice == 'rock')
    || (humanChoice == 'scissors' && computerChoice == 'paper')) {
      resultMsg.textContent = `You win! ${capitalize(humanChoice)} beats ${computerChoice}!`;
      results.appendChild(resultMsg);
      humanScore++;
  }
  else if ((computerChoice == 'rock' && humanChoice == 'scissors')
    || (computerChoice == 'paper' && humanChoice == 'rock')
    || (computerChoice == 'scissors' && humanChoice == 'paper')) {
      resultMsg.textContent = `You lose. ${capitalize(computerChoice)} beats ${humanChoice}.`;
      results.appendChild(resultMsg);
      computerScore++;
  }
  else {
    resultMsg.textContent = `You threw ${humanChoice} and the computer ALSO threw ${computerChoice}. Tie!`
    results.appendChild(resultMsg);
  }

  if (humanScore == 5 || computerScore == 5) {
    const finalMsg = document.createElement("p");
    if (humanScore > computerScore) {
      finalMsg.textContent = `You win! Final score = ${humanScore} to ${computerScore}`;
      results.appendChild(finalMsg);
    }
    else {
      finalMsg.textContent = `You lose... Final score = ${humanScore} to ${computerScore}`;
      results.appendChild(finalMsg);
    }
  }
  else {
    currentScore.textContent = `Current score - You: ${humanScore}, Them: ${computerScore}`;
    results.appendChild(currentScore);
  }
}

function getComputerChoice() {
  return options[Math.floor(Math.random() * 3)];
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
