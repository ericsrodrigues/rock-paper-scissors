// 0 = Rock, 1 = Paper, 2 = Scissors
function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}
let playerSelection = () => {
  let playerPrompt = prompt("Type your selection: ").toLowerCase();
  if (playerPrompt !== "paper" && playerPrompt !== "rock" && playerPrompt !== "scissor"){
    return alert("Invalid option. Please select between Rock, Paper or Scissor and type again!");
    } else {
      return playerPrompt;
    }
}


