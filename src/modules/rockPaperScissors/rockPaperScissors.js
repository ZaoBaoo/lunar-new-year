export const rockPaperScissors = (handelButtonActive) => {
  const options = ["rock", "paper", "scissor"];
  const score = {
    you: 0,
    computer: 0,
  };
  const WIN_GREEN = "#ffffff";
  const LOSE_RED = "#ffffff";
  const DRAW_BLUE = "#ffffff";

  const rockUser = "https://www.technodom.kz/under/knb-moonyear/rock-user.svg";
  const paperUser =
    "https://www.technodom.kz/under/knb-moonyear/paper-user.svg";
  const scissorUser =
    "https://www.technodom.kz/under/knb-moonyear/scissors-user.svg";

  const rockDragon =
    "https://www.technodom.kz/under/knb-moonyear/rock-dragon.svg";
  const paperDragon =
    "https://www.technodom.kz/under/knb-moonyear/paper-dragon.svg";
  const scissorDragon =
    "https://www.technodom.kz/under/knb-moonyear/scissors-dragon.svg";

  const playerHand = document.querySelector(".hands .player-hand");
  const computerHand = document.querySelector(".hands .computer-hand");
  const resultEl = document.querySelector(".hands .result");
  const youScore = document.querySelector(".score .you");
  const computerScore = document.querySelector(".score .computer");

  function getRandomInt() {
    return Math.floor(Math.random() * 3);
  }

  const toggleButtonDisabled = (buttons) => {
    buttons.forEach((btn) => {
      btn.disabled = !btn.disabled;
    });
  };

  const checkWinner = () => {
    if (score.computer >= 3) {
      score.you = 0;
      youScore.textContent = "0";
      score.computer = 0;
      computerScore.textContent = "0";
    }

    if (score.you >= 3) {
      handelButtonActive();
      toggleButtonDisabled();
    }
  };

  const btns = document.querySelectorAll(".options button");
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      resultEl.style.display = "none";
      toggleButtonDisabled(btns);
      document.querySelector(".hands .player-hand").src = rockUser;
      document.querySelector(".hands .computer-hand").src = rockDragon;
      playerHand.classList.add("shakePlayer");
      computerHand.classList.add("shakeComputer");
      const playerA = btn.querySelector("label").innerText;
      const playerB = options[getRandomInt()];
      setTimeout(() => compare(playerA, playerB), 2500);
    });
  });

  function compare(player, computer) {
    const won = "Ты победил!";
    const lose = "Ты проиграл";

    if (player == computer) {
      console.log(`${player} is equal to ${computer}`);
      update(player, computer);
      resultEl.style.color = DRAW_BLUE;
      resultEl.innerText = "Ничья";
    } else if (player == "rock" && computer == "scissor") {
      console.log(`${player} defeats ${computer}`);
      update(player, computer);
      score.you++;
      resultEl.style.color = WIN_GREEN;
      resultEl.innerText = won;
      youScore.innerText = score.you;
    } else if (player == "rock" && computer == "paper") {
      console.log(`${player} loses to ${computer}`);
      update(player, computer);
      score.computer++;
      resultEl.style.color = LOSE_RED;
      resultEl.innerText = lose;
      computerScore.innerText = score.computer;
    } else if (player == "paper" && computer == "scissor") {
      console.log(`${player} loses to ${computer}`);
      update(player, computer);
      score.computer++;
      resultEl.style.color = LOSE_RED;
      resultEl.innerText = lose;
      computerScore.innerText = score.computer;
    } else if (player == "paper" && computer == "rock") {
      console.log(`${player} defeats ${computer}`);
      update(player, computer);
      score.you++;
      resultEl.style.color = WIN_GREEN;
      resultEl.innerText = won;
      youScore.innerText = score.you;
    } else if (player == "scissor" && computer == "rock") {
      console.log(`${player} loses to ${computer}`);
      update(player, computer);
      score.computer++;
      resultEl.style.color = LOSE_RED;
      resultEl.innerText = lose;
      computerScore.innerText = score.computer;
    } else if (player == "scissor" && computer == "paper") {
      console.log(`${player} defeats ${computer}`);
      update(player, computer);
      score.you++;
      resultEl.style.color = WIN_GREEN;
      resultEl.innerText = won;
      youScore.innerText = score.you;
    }

    checkWinner();
    resultEl.style.display = "block";
    toggleButtonDisabled(btns);
    // playerHand.classList.remove('shake')
    // computerHand.classList.remove('shake')
  }
  function update(player, computer) {
    // playerHand
    if (player == "rock") {
      playerHand.src = rockUser;
    } else if (player == "paper") {
      playerHand.src = paperUser;
    } else if (player == "scissor") {
      playerHand.src = scissorUser;
    }

    // computerHand
    if (computer == "rock") {
      computerHand.src = rockDragon;
    } else if (computer == "paper") {
      computerHand.src = paperDragon;
    } else if (computer == "scissor") {
      computerHand.src = scissorDragon;
    }
    playerHand.classList.remove("shakePlayer");
    computerHand.classList.remove("shakeComputer");
  }
};
