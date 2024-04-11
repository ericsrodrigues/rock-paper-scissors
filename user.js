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
      "Invalid option. Please select between Rock, Paper or Scissor and type again!"
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
  } else if (player === "rock" && computer === 2) {
    alert("You win! Rock beats Scissor");
  } else if (player === "paper" && computer === 1) {
    alert("It's a tie! You two choose Paper");
  } else if (player === "paper" && computer === 0) {
    alert("You win! Paper beats Rock");
  } else if (player === "paper" && computer === 2) {
    alert("You lose! Scissor beats Paper");
  } else if (player === "scissor" && computer === 2) {
    alert("It's a tie! You two choose Scissor");
  } else if (player === "scissor" && computer === 0) {
    alert("You lose! Rock beats Scissor");
  } else {
    alert("You win! Scissor beats Paper");
  }
}
