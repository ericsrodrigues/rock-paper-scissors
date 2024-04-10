// 0 = Rock, 1 = Paper, 2 = Scissors
function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}
let playerSelection = () => {
  prompt("Digite uma opção: ").toLowerCase();
  if (playerSelection === "rock") {
    playerSelection = 0;
  } else if (playerSelection === "paper") {
    playerSelection = 1;
  } else if (playerSelection === "scissor") {
    playerSelection = 2;
  } else {
    alert(
      "Invalid option. Please select between Rock, Paper or Scissor and type again!"
    );
  }
};