let playerPoints = 0;
let computerPoints = 0;
let i = 0;
// 0 = Rock, 1 = Paper, 2 = Scissors
function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}
let playerSelection = () => {
  let playerPrompt = prompt("Type your selection: ").toLowerCase();
  if (
    playerPrompt !== "paper" &&
    playerPrompt !== "rock" &&
    playerPrompt !== "scissor"
  ) {
    return alert(
      "Invalid option. Please select between Rock, Paper or Scissor and try again!"
    );
  } else {
    return playerPrompt;
  }
};

function playRound(player, computer) {
  if (player === "rock" && computer === 0) {
    alert("It's a tie! You two choose Rock");
  } else if (player === "rock" && computer === 1) {
    alert("You lose! Paper beats Rock");
    return computerPoints++;
  } else if (player === "rock" && computer === 2) {
    alert("You win! Rock beats Scissor");
    return playerPoints++;
  } else if (player === "paper" && computer === 1) {
    alert("It's a tie! You two choose Paper");
  } else if (player === "paper" && computer === 0) {
    alert("You win! Paper beats Rock");
    return playerPoints++;
  } else if (player === "paper" && computer === 2) {
    alert("You lose! Scissor beats Paper");
    return computerPoints++;
  } else if (player === "scissor" && computer === 2) {
    alert("It's a tie! You two choose Scissor");
  } else if (player === "scissor" && computer === 0) {
    alert("You lose! Rock beats Scissor");
    return computerPoints++;
  } else if (player === "scissor" && computer === 1) {
    alert("You win! Scissor beats Paper");
    return playerPoints++;
  } else {
    i--;
  }
}

function playGame() {
  for (i; i < 5; i++) {
    playRound(playerSelection(), getComputerChoice());
  }
  if (playerPoints > computerPoints) {
    alert("You win, congratulations!!!");
  } else if (playerPoints < computerPoints) {
    alert("You lose, better luck next time.");
  } else {
    alert("It's a tie!");
  }
  return (playerPoints = 0), (computerPoints = 0), (i = 0);
}
