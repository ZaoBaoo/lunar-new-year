export const memoryGame = (callbackShowFinal) => {
  const cards = document.querySelectorAll(".memory-card");

  let hasFlippedCard = false;
  let lockBoard = false;
  let firstCard, secondCard;

  function victory() {
    callbackShowFinal();
  }

  function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add("flip");

    if (!hasFlippedCard) {
      hasFlippedCard = true;
      firstCard = this;
      return;
    }

    secondCard = this;
    checkForMatch();
  }

  function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

    isMatch ? disableCards() : unflipCards();

    const allCards = document.querySelectorAll(".memory-card");
    const completeCards = document.querySelectorAll("[data-complete]");

    console.log(isMatch);

    if (allCards.length === completeCards.length) {
      victory();
    }
  }

  function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
    firstCard.classList.add("memory-card_complete");
    secondCard.classList.add("memory-card_complete");
    firstCard.setAttribute("data-complete", "");
    secondCard.setAttribute("data-complete", "");
    resetBoard();
  }

  function unflipCards() {
    lockBoard = true;

    console.log("5");

    setTimeout(() => {
      firstCard.classList.remove("flip");
      secondCard.classList.remove("flip");

      resetBoard();
    }, 800);
  }

  function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
    console.log("6");
  }

  (function shuffle() {
    cards.forEach((card) => {
      let randomPos = Math.floor(Math.random() * 12);
      card.style.order = randomPos;
    });
  })();

  cards.forEach((card) => card.addEventListener("click", flipCard));
};
