// 0 = Rock, 1 = Paper, 2 = Scissors
function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}
let playerSelection = () => {
  let playerPrompt = prompt("Digite uma opção: ").toLowerCase();
  if (playerPrompt === "rock") {
    return (playerPrompt = 0);
  } else if (playerPrompt === "paper") {
    return (playerPrompt = 1);
  } else if (playerPrompt === "scissor") {
    return (playerPrompt = 2);
  } else {
    return alert(
      "Invalid option. Please select between Rock, Paper or Scissor and type again!"
    );
  }
};
