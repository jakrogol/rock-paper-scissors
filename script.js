const options = ['rock', 'paper', 'scissors'];

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  return options[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
  let choice = prompt("Please make a selection. 0 = Rock, 1 = Paper, 2 = Scissors");
  return options[choice];
}
