const moves = [
  {id: 'rock', emoji: '✊'},
  {id: 'paper', emoji: '✋'},
  {id: 'scissors', emoji: '✌️'},
];

const buttons = document.querySelectorAll('button');
const results = document.querySelector('#results');

const scoreboardHeading = document.getElementById("scoreboard-heading");
const scoreboardMsg = document.getElementById("scoreboard-message");
const humanMove = document.getElementById("human-move");
const humanScore = document.getElementById("human-score");
const computerMove = document.getElementById("computer-move");
const computerScore = document.getElementById("computer-score");

let humanPoints = 0;
let computerPoints = 0;

buttons.forEach(button => {
  button.addEventListener('click', () => playRound(button.id));
});

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  const resultMsg = document.createElement("p");
  const currentScore = document.createElement("p");

  humanMove.textContent = moves.find(m => m.id === humanChoice).emoji;
  computerMove.textContent = computerChoice.emoji;

  if ((humanChoice == 'rock' && computerChoice.id == 'scissors')
    || (humanChoice == 'paper' && computerChoice.id == 'rock')
    || (humanChoice == 'scissors' && computerChoice.id == 'paper')) {
      resultMsg.textContent = `${capitalize(humanChoice)} beats ${computerChoice.id}! You get a point!`;
      results.appendChild(resultMsg);
      humanPoints++;
  }
  else if ((computerChoice.id == 'rock' && humanChoice == 'scissors')
    || (computerChoice.id == 'paper' && humanChoice == 'rock')
    || (computerChoice.id == 'scissors' && humanChoice == 'paper')) {
      resultMsg.textContent = `${capitalize(computerChoice.id)} beats ${humanChoice}. Computer gets a point.`;
      results.appendChild(resultMsg);
      computerPoints++;
  }
  else {
    resultMsg.textContent = `You threw ${humanChoice} and the computer ALSO threw ${computerChoice.id}. Tie!`
    results.appendChild(resultMsg);
  }

  if (humanPoints == 5 || computerPoints == 5) {
    const finalMsg = document.createElement("div");
    buttons.forEach((button) => {
      button.disabled = true;
    });

    if (humanScore > computerScore) {
      finalMsg.textContent = `You win! Final score = ${humanPoints} to ${computerPoints}`;
      results.appendChild(finalMsg);
    }
    else {
      finalMsg.textContent = `You lose... Final score = ${humanPoints} to ${computerPoints}`;
      results.appendChild(finalMsg);
    }
  }
  else {
    currentScore.textContent = `Current score - You: ${humanPoints}, Them: ${computerPoints}`;
    results.appendChild(currentScore);
  }
}

function getComputerChoice() {
  return moves[Math.floor(Math.random() * 3)];
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
