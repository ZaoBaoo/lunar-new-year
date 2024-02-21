export const playAGame = (gameWin, gameLoss) => {
  const groundSrc = "https://www.technodom.kz/under/lunar-new-year/ground.png";
  const foodSrc = "https://www.technodom.kz/under/lunar-new-year/mixer.svg";
  const dragonRight =
    "https://www.technodom.kz/under/lunar-new-year/head-right.svg";
  const dragonLeft =
    "https://www.technodom.kz/under/lunar-new-year/head-left.svg";
  const dragonTop =
    "https://www.technodom.kz/under/lunar-new-year/head-top.svg";
  const dragonBottom =
    "https://www.technodom.kz/under/lunar-new-year/head-bottom.svg";
  const dragonTail =
    "https://www.technodom.kz/under/lunar-new-year/dragon-tail.svg";
  const dragonBody =
    "https://www.technodom.kz/under/lunar-new-year/dragon-body.svg";

  const controllerLeft = document.querySelector("#left");
  const controllerRight = document.querySelector("#right");
  const controllerTop = document.querySelector("#top");
  const controllerBottom = document.querySelector("#bottom");

  const canvas = document.getElementById("game");
  const ctx = canvas.getContext("2d");

  const BOX_WIDTH = 30;
  let score = 0;

  const ground = new Image();
  const food = new Image();
  const dragonHeadImage = new Image();
  const dragonTailImage = new Image();
  const dragonBodyImage = new Image();

  ground.src = groundSrc;
  food.src = foodSrc;
  dragonHeadImage.src = dragonRight;
  dragonBodyImage.src = dragonBody;
  dragonTailImage.src = dragonTail;

  let foodElement = {
    x: Math.floor(Math.random() * 17 + 1) * BOX_WIDTH,
    y: Math.floor(Math.random() * 17 + 3) * BOX_WIDTH,
  };

  let snake = [
    {
      x: 12 * BOX_WIDTH,
      y: 7 * BOX_WIDTH,
    },
    {
      x: 11 * BOX_WIDTH,
      y: 7 * BOX_WIDTH,
    },
    {
      x: 10 * BOX_WIDTH,
      y: 7 * BOX_WIDTH,
    },
    {
      x: 9 * BOX_WIDTH,
      y: 7 * BOX_WIDTH,
    },
  ];

  let dir;

  controllerLeft.addEventListener("click", () => {
    dir = "left";
    dragonHeadImage.src = dragonLeft;
  });

  controllerRight.addEventListener("click", () => {
    dir = "right";
    dragonHeadImage.src = dragonRight;
  });

  controllerTop.addEventListener("click", () => {
    dir = "up";
    dragonHeadImage.src = dragonTop;
  });

  controllerBottom.addEventListener("click", () => {
    dir = "down";
    dragonHeadImage.src = dragonBottom;
  });

  function eatTail(head, arr) {
    for (let i = 0; i < arr.length; i++) {
      if (head.x == arr[i].x && head.y == arr[i].y) {
        gameLoss();
        clearInterval(game);
      }
    }
  }

  function drawGame() {
    if (score >= 10) {
      gameWin();
      clearInterval(game);
    }

    const scorePosition =
      score >= 10
        ? {
            x: 270,
            y: BOX_WIDTH * 1.35,
          }
        : {
            x: 277,
            y: BOX_WIDTH * 1.35,
          };
    ctx.drawImage(ground, 0, 0);

    ctx.drawImage(food, foodElement.x, foodElement.y, BOX_WIDTH, BOX_WIDTH);

    for (let i = 0; i < snake.length; i += 1) {
      if (i === 0) {
        ctx.drawImage(
          dragonHeadImage,
          snake[0].x - (BOX_WIDTH * 1.5) / 6,
          snake[0].y - (BOX_WIDTH * 1.5) / 6,
          BOX_WIDTH * 1.5,
          BOX_WIDTH * 1.5
        );
      } else {
        ctx.drawImage(
          dragonBodyImage,
          snake[i].x,
          snake[i].y,
          BOX_WIDTH,
          BOX_WIDTH
        );
      }
    }

    ctx.fillStyle = "white";
    (ctx.font = "24px Museo"),
      ctx.fillText(score, scorePosition.x, scorePosition.y);

    if (dir) {
      let snakeX = snake[0].x;
      let snakeY = snake[0].y;

      if (snakeX == foodElement.x && snakeY == foodElement.y) {
        score++;
        foodElement = {
          x: Math.floor(Math.random() * 17 + 1) * BOX_WIDTH,
          y: Math.floor(Math.random() * 17 + 3) * BOX_WIDTH,
        };
      } else {
        snake.pop();
      }

      if (
        snakeX < BOX_WIDTH ||
        snakeX > BOX_WIDTH * 17 ||
        snakeY < 3 * BOX_WIDTH ||
        snakeY > BOX_WIDTH * 19
      ) {
        gameLoss();
        clearInterval(game);
      }

      if (dir == "left") snakeX -= BOX_WIDTH;
      if (dir == "right") snakeX += BOX_WIDTH;
      if (dir == "up") snakeY -= BOX_WIDTH;
      if (dir == "down") snakeY += BOX_WIDTH;

      let newHead = {
        x: snakeX,
        y: snakeY,
      };

      eatTail(newHead, snake);

      snake.unshift(newHead);
    }
  }

  let game = setInterval(drawGame, 200);
};
