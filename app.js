let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randIdx = Math.floor(Math.random() * 2);
  return options[randIdx];
};

const drawGame = () => {
  // console.log("game is draw");
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor="#081b31";
};

const showWin = (userWin,userChoice,compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText=userScore;
    // console.log("You win");
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="green";
    
    
  } else {
    compScore++;
    compScorePara.innerText=compScore;
    // console.log("You lose");
    msg.innerText = `You lost, ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor="red";
    
  }
};

const playGame = (userChoice) => {
  // console.log("userChoice", userChoice);
  const compChoice = genCompChoice();
  // console.log("compChoice", compChoice);
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissor,paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock,scissor
      userWin = compChoice === "rock" ? true : false;
    } else {
      //rock,paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWin(userWin,userChoice,compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
