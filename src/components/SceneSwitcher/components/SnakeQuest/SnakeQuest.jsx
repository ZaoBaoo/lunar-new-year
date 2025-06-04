import "./SnakeQuest.scss";
import { WrapperQuest } from "../../../WrapperQuest/WrapperQuest.jsx";
import { useEffect, useRef, useState } from "react";
import { playAGame } from "../../../../modules/snakeGame/snakeGame.js";
import { setActiveSceneAction } from "../../../../store/reducers/scene.js";
import { useDispatch, useSelector } from "react-redux";

const SnakeQuest = ({ activeBrand }) => {
  const { activeQuest } = useSelector((state) => state.scene);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const refCanvas = useRef(null);

  const dispatch = useDispatch();

  const questCompleted = () => {
    setTimeout(() => {
      dispatch(
        setActiveSceneAction({
          type: "questComplete",
          activeBrand: activeBrand,
        })
      );
    }, 500);
  };

  const gameWin = () => {
    setIsButtonDisabled(false);
  };

  const gameLoss = () => {
    setTimeout(() => {
      runGameSnake();
    }, 1500);
  };

  const runGameSnake = () => {
    playAGame(gameWin, gameLoss);
  };

  useEffect(() => {
    if (playAGame && refCanvas) {
      runGameSnake();
    }
  }, []);

  return (
    <div className="snakeQuest">
      <WrapperQuest
        indexQuest={activeQuest?.id}
        isButtonDisabled={isButtonDisabled}
        handleAction={questCompleted}
        bg={activeBrand}
      >
        <div className="snakeQuest__content">
          <div className="snakeQuest__canvas-wrapper">
            <canvas width="570" height="628" id="game" ref={refCanvas}></canvas>
            <p
              className={`snakeQuest__win-text ${
                isButtonDisabled ? "" : "snakeQuest__win-text_show"
              }`}
            >
              Победа!
            </p>
          </div>
          <div className="controllers">
            <div className="horizontal">
              <img
                src="https://www.technodom.kz/under/lunar-new-year/controll-left.svg"
                alt=""
                id="left"
              />
              <img
                src="https://www.technodom.kz/under/lunar-new-year/controll-right.svg"
                alt=""
                id="right"
              />
            </div>
            <div className="vertical">
              <img
                src="https://www.technodom.kz/under/lunar-new-year/controll-top.svg"
                alt=""
                id="top"
              />
              <img
                src="https://www.technodom.kz/under/lunar-new-year/controll-bottom.svg"
                alt=""
                id="bottom"
              />
            </div>
          </div>
        </div>
      </WrapperQuest>
    </div>
  );
};

export { SnakeQuest };
