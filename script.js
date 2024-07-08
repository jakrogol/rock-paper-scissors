const options = ['rock', 'paper', 'scissors'];

playGame();

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if ((humanChoice == 'rock' && computerChoice == 'scissors')
      || (humanChoice == 'paper' && computerChoice == 'rock')
      || (humanChoice == 'scissors' && computerChoice == 'paper')) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
        humanScore++;
    }
    else if ((computerChoice == 'rock' && humanChoice == 'scissors')
      || (computerChoice == 'paper' && humanChoice == 'rock')
      || (computerChoice == 'scissors' && humanChoice == 'paper')) {
        console.log(`You lose. ${computerChoice} beats ${humanChoice}.`);
        computerScore++;
    }
    else {
      console.log(`You threw ${humanChoice} and the computer ALSO threw ${computerChoice}. Tie!`);
    }
    console.log(`Current score - You: ${humanScore}, Them: ${computerScore}`);
  }

  for (round = 0; round < 5; round++) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  if (humanScore > computerScore) {
    console.log("You win!");
  } else {
    console.log("You lose!");
  }
  console.log(`Final score -- You: ${humanScore}, Them: ${computerScore}`);
}

function getHumanChoice() {
  let choice = prompt("Please make a selection. 0 = Rock, 1 = Paper, 2 = Scissors");
  return options[choice];
}

function getComputerChoice() {
  return options[Math.floor(Math.random() * 3)];
}
