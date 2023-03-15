/*
player one take rock paper scissor (use prompt and authorise string only)
computer need function to random for rock paper scissor

need compare choice for determine winner 
loop while one player don't win 5 times
declare winner

ask for another game

reset -> variable, 

*/

let computerChoice = () => {
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissor";
      break;
    default:
      "BepBepError";
      break;
  }
};

let humanChoice = () => {
  let weaponChoice = prompt(
    "Choose between rock, paper and scissor for battle your ennemy !!, What is ur weapon :"
  );
  if (weaponChoice) {
    weaponChoice = weaponChoice.toLowerCase();
  }
  if (
    weaponChoice === "rock" ||
    weaponChoice === "paper" ||
    weaponChoice === "scissor"
  ) {
    return weaponChoice;
  } else {
    alert(
      "Error : you need to enter a choice who is 'rock', 'paper' or 'scissor'"
    );
  }
};

let winnerName = (computerChoice, humanChoice) => {
  switch (computerChoice) {
    case "rock":
      if (humanChoice == "rock") return "even";
      if (humanChoice == "paper") return "human";
      if (humanChoice == "scissor") return "computer";
      break;
    case "paper":
      if (humanChoice == "rock") return "computer";
      if (humanChoice == "paper") return "even";
      if (humanChoice == "scissor") return "human";
      break;
    case "scissor":
      if (humanChoice == "rock") return "human";
      if (humanChoice == "paper") return "computer";
      if (humanChoice == "scissor") return "even";
      break;

    default:
      break;
  }
};

let roundMessageResult = (computer, human, winner) => {
  if (winner === "human") {
    return `you win! ${human} beat ${computer}`;
  } else if (winner === "computer") {
    return `you lose! ${computer} beat ${human}`;
  } else {
    return `no success on stomping each other lad`;
  }
};

let humanCountVictory = 0;
let computerCountVictory = 0;
let numberRound = 0;
const roundNeededForWin = 5;

function game() {
  while (
    humanCountVictory < roundNeededForWin &&
    computerCountVictory < roundNeededForWin
  ) {
    let iaWeapon = computerChoice();
    let humWeapon = humanChoice();
    let winner = winnerName(iaWeapon, humWeapon);
    let messageOfRound = roundMessageResult(iaWeapon, humWeapon, winner);

    switch (winner) {
      case "human":
        humanCountVictory++;
        break;
      case "computer":
        computerCountVictory++;
        break;
      case "even":
        break;

      default:
        break;
    }
    console.log(
      `round ${numberRound} : ${messageOfRound};  score : you:${humanCountVictory} computer:${computerCountVictory}`
    );
    numberRound++;
  }
  if (humanCountVictory == roundNeededForWin) alert("human is victorious");
  if (computerCountVictory == roundNeededForWin)
    alert("computer is victorious");
}

// let buttonLaunchGame = document.getElementById("start");

// buttonLaunchGame.addEventListener("click", () => {
//   console.log(hey);
//   game();
// });
