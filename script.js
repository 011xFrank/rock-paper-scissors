const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const choice_index = Math.floor(Math.random() * choices.length);
  return choices[choice_index];
}

function playRound(player_selection, computer_selection) {
  if (
    (player_selection == "rock" && computer_selection == "scissors") ||
    (player_selection == "paper" && computer_selection == "rock") ||
    (player_selection == "scissors" && computer_selection == "paper")
  ) {
    console.log(`You win! ${player_selection} Beats ${computer_selection}`);
    return 1;
  } 
  else if (
    (computer_selection == "rock" && player_selection == "scissors") ||
    (computer_selection == "paper" && player_selection == "rock") ||
    (computer_selection == "scissors" && player_selection == "paper")
  ) {
    console.log(`You lose! ${computer_selection} Beats ${player_selection}`);
    return 2;
  } 
  else {
    console.log(`Draw`);
    return 0;
  }
}

function game() {
  let player_scores = 0;
  let computer_scores = 0;
  for (let count = 1; count < 6; count++) {
    let computer_selection = getComputerChoice();
    let player_selection = prompt("Enter Choice : Rock , Paper , Scissors").toLowerCase();
    let winner = playRound(player_selection, computer_selection);
    if (winner == 1) {
      player_scores++;
      continue;
    } else if (winner == 2) {
      computer_scores++;
      continue;
    } else {
      continue;
    }
  }

  console.log(player_scores);
  console.log(computer_scores);
}

game();
