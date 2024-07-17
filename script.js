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

  humanMove.textContent = moves.find(m => m.id === humanChoice).emoji;
  computerMove.textContent = computerChoice.emoji;

  if ((humanChoice == 'rock' && computerChoice.id == 'scissors')
    || (humanChoice == 'paper' && computerChoice.id == 'rock')
    || (humanChoice == 'scissors' && computerChoice.id == 'paper')) {
      humanPoints++;
      scoreboardHeading.textContent =  "You get a point!";
      scoreboardMsg.textContent = `${capitalize(humanChoice)} beats ${computerChoice.id}!`;
      humanScore.textContent = humanPoints;
  }
  else if ((computerChoice.id == 'rock' && humanChoice == 'scissors')
    || (computerChoice.id == 'paper' && humanChoice == 'rock')
    || (computerChoice.id == 'scissors' && humanChoice == 'paper')) {
      computerPoints++;
      scoreboardHeading.textContent = "Computer gets a point..."
      scoreboardMsg.textContent = `${capitalize(computerChoice.id)} beats ${humanChoice}`;
      computerScore.textContent = computerPoints;
  }
  else {
    scoreboardHeading.textContent = "It's a tie"
    scoreboardMsg.textContent = `You threw both threw ${humanChoice}`
  }

  if (humanPoints == 5 || computerPoints == 5) {
    buttons.forEach((button) => {
      button.disabled = true;
    });

    if (humanPoints > computerPoints) {
      scoreboardHeading.textContent = "You Win!";
    }
    else {
      scoreboardHeading.textContent = "You Lose :(";
    }
    scoreboardMsg.textContent = "Refresh to play again!";
  }
}

function getComputerChoice() {
  return moves[Math.floor(Math.random() * 3)];
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
