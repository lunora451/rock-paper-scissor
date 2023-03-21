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

// let humanChoice = () => {
//   // let weaponChoice = prompt(
//   //   "Choose between rock, paper and scissor for battle your ennemy !!, What is ur weapon :"
//   // );
//   if (weaponChoice) {
//     weaponChoice = weaponChoice.toLowerCase();
//   }
//   if (
//     weaponChoice === "rock" ||
//     weaponChoice === "paper" ||
//     weaponChoice === "scissor"
//   ) {
//     return weaponChoice;
//   } else {
//     // alert(
//     //   "Error : you need to enter a choice who is 'rock', 'paper' or 'scissor'"
//     // );
//   }
// };

let winnerName = (computerChoice, humanChoice) => {
  let winner = "";

  switch (computerChoice) {
    case "rock":
      if (humanChoice == "rock") winner = "even";
      if (humanChoice == "paper") winner = "human";
      if (humanChoice == "scissor") winner = "computer";
      break;
    case "paper":
      if (humanChoice == "rock") winner = "computer";
      if (humanChoice == "paper") winner = "even";
      if (humanChoice == "scissor") winner = "human";
      break;
    case "scissor":
      if (humanChoice == "rock") winner = "human";
      if (humanChoice == "paper") winner = "computer";
      if (humanChoice == "scissor") winner = "even";
      break;

    default:
      break;
  }

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
  return winner;
};

let roundMessageResult = (computer, human, winner) => {
  if (winner === "human") {
    return `you win! ${human} beat ${computer}`;
  } else if (winner === "computer") {
    return `you lose! ${computer} beat ${human}`;
  } else {
    return `no success on stomping each other lads`;
  }
};

let humanCountVictory = 0;
let computerCountVictory = 0;
let numberRound = 1;
let numberOfGame = 0;
const roundNeededForWin = 3;

function round(humanWeapon = null) {
  if (!humanWeapon) return;

  let iaWeapon = computerChoice();
  let winner = winnerName(iaWeapon, humanWeapon);
  let messageOfRound = roundMessageResult(iaWeapon, humanWeapon, winner);

  updateHistoric(messageOfRound);
  updateScore(humanCountVictory, computerCountVictory);

  numberRound++;
}

function updateScore(scoreH = 0, scoreC = 0) {
  // TODO maj le dom
  let textC = scoreComputer.textContent;
  let textH = scoreHuman.textContent;

  scoreHuman.textContent = textH.replace(
    textH.substring(textH.length - 1, textH.length),
    scoreH
  );
  scoreComputer.textContent = textC.replace(
    textC.substring(textC.length - 1, textC.length),
    scoreC
  );

  didItEnd();
}
function updateHistoric(messageOfRound) {
  // TODO maj dans le dom
  let pText = document.createElement("p");

  pText.textContent = `round ${numberRound} : ${messageOfRound}.`;
  historicBattle.appendChild(pText);
}

function didItEnd() {
  if (humanCountVictory == roundNeededForWin) {
    setPage3();
    setResult(true);
  }
  if (computerCountVictory == roundNeededForWin) {
    setPage3();
    setResult(false);
  }
}

function setResult(victory = null) {
  if (victory == null) return;
  let pResult = document.createElement("p");
  if (victory) {
    pResult.textContent =
      "Congrats!! You win you're better than a random function.";
    pResult.classList.add("victoryMessageStyle");
  } else {
    pResult.textContent =
      "Sadly you lose against computer :O computer goes brrrr bepbep!";

    pResult.classList.add("loseMessageStyle");
  }
  play.insertBefore(pResult, buttonLaunchGame);
  numberOfGame++;
}

/*
 *
 *
 *
 *
 *
 */

let buttonLaunchGame = document.querySelector(".start");

buttonLaunchGame.addEventListener("click", function (e) {
  if (numberOfGame) reset();
  //remise a zero de l'encart des scores
  setPage2();
});

function reset() {
  humanCountVictory = 0;
  computerCountVictory = 0;
  numberRound = 1;

  let historyBattle = document.querySelectorAll(
    ".historicBattle p:not(:first-child)"
  );

  historyBattle.forEach((line) => {
    historicBattle.removeChild(line);
  });
  play.removeChild(document.querySelector(".containerStart p"));

  updateScore();
}

// Start of Page

const scoreHuman = document.querySelector(".scoreHuman");
const scoreComputer = document.querySelector(".scoreComputer");
const historicBattle = document.querySelector(".historicBattle");

const score = document.querySelector(".positionScoreContainer");
const weapon = document.querySelector(".positionChoiceWeaponContainer");
const historic = document.querySelector(".positionHistoricBattle");
const play = document.querySelector(".containerStart");

const mainContent = document.querySelector(".main");

// const rockChoice = document.querySelector(".rockChoice");
// const paperChoice = document.querySelector(".paperChoice");
// const scissorChoice = document.querySelector(".scissorChoice");

const choiceWeapon = document.querySelectorAll(".choiceWeaponContainer > div");

function setPage1() {
  mainContent.removeChild(score);
  mainContent.removeChild(weapon);
  mainContent.removeChild(historic);
  mainContent.appendChild(play);
}

function setPage2() {
  mainContent.removeChild(play);
  mainContent.appendChild(score);
  mainContent.appendChild(weapon);
  mainContent.appendChild(historic);
}

function setPage3() {
  mainContent.insertBefore(play, score);
  mainContent.removeChild(weapon);
}

choiceWeapon.forEach((weapon) => {
  weapon.addEventListener("click", (e) => {
    round(weapon.attributes[1].nodeValue);
  });
});

setPage1();
