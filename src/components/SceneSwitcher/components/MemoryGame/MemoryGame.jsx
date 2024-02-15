import "../../../../modules/memoryGame/memory-game.scss";
import "./MemoryGame.scss";
import { memoryGame } from "../../../../modules/memoryGame/memoryGame.js";
import { WrapperQuest } from "../../../WrapperQuest/WrapperQuest.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setActiveSceneAction } from "../../../../store/reducers/scene.js";

const MemoryGame = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const { brands, activeQuest, activeBrand } = useSelector(
    (state) => state.scene
  );
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

  const handelButtonActive = () => {
    setIsButtonDisabled(true);
  };

  useEffect(() => {
    memoryGame(handelButtonActive, "ava");
  }, []);

  return (
    <div className="memoryGame">
      <WrapperQuest
        indexQuest={4}
        isButtonDisabled={!isButtonDisabled}
        handleAction={questCompleted}
      >
        <div className="memory-game">
          <div className="memory-game__top-content">
            <div className="memory-game__description">
              Найди одинаковую технику AVA
            </div>

            <div className="memory-game__wrapper">
              <div className="memory-card" data-framework="aurelia">
                <img
                  className="front-face"
                  src="https://www.technodom.kz/under/lunar-new-year/memory-1.png"
                  alt="Aurelia"
                />
                <img
                  className="back-face"
                  src="https://www.technodom.kz/under/lunar-new-year/memory-card-back-face.png"
                  alt="technodom"
                />
              </div>
              <div className="memory-card" data-framework="aurelia">
                <img
                  className="front-face"
                  src="https://www.technodom.kz/under/lunar-new-year/memory-1.png"
                  alt="Aurelia"
                />
                <img
                  className="back-face"
                  src="https://www.technodom.kz/under/lunar-new-year/memory-card-back-face.png"
                  alt="technodom"
                />
              </div>

              <div className="memory-card" data-framework="vue">
                <img
                  className="front-face"
                  src="https://www.technodom.kz/under/lunar-new-year/memory-2.png"
                  alt="Vue"
                />
                <img
                  className="back-face"
                  src="https://www.technodom.kz/under/lunar-new-year/memory-card-back-face.png"
                  alt="technodom"
                />
              </div>
              <div className="memory-card" data-framework="vue">
                <img
                  className="front-face"
                  src="https://www.technodom.kz/under/lunar-new-year/memory-2.png"
                  alt="Vue"
                />
                <img
                  className="back-face"
                  src="https://www.technodom.kz/under/lunar-new-year/memory-card-back-face.png"
                  alt="technodom"
                />
              </div>

              <div className="memory-card" data-framework="angular">
                <img
                  className="front-face"
                  src="https://www.technodom.kz/under/lunar-new-year/memory-3.png"
                  alt="Angular"
                />
                <img
                  className="back-face"
                  src="https://www.technodom.kz/under/lunar-new-year/memory-card-back-face.png"
                  alt="technodom"
                />
              </div>
              <div className="memory-card" data-framework="angular">
                <img
                  className="front-face"
                  src="https://www.technodom.kz/under/lunar-new-year/memory-3.png"
                  alt="Angular"
                />
                <img
                  className="back-face"
                  src="https://www.technodom.kz/under/lunar-new-year/memory-card-back-face.png"
                  alt="technodom"
                />
              </div>

              <div className="memory-card" data-framework="ember">
                <img
                  className="front-face"
                  src="https://www.technodom.kz/under/lunar-new-year/memory-4.png"
                  alt="Ember"
                />
                <img
                  className="back-face"
                  src="https://www.technodom.kz/under/lunar-new-year/memory-card-back-face.png"
                  alt="technodom"
                />
              </div>
              <div className="memory-card" data-framework="ember">
                <img
                  className="front-face"
                  src="https://www.technodom.kz/under/lunar-new-year/memory-4.png"
                  alt="Ember"
                />
                <img
                  className="back-face"
                  src="https://www.technodom.kz/under/lunar-new-year/memory-card-back-face.png"
                  alt="technodom"
                />
              </div>

              <div className="memory-card" data-framework="backbone">
                <img
                  className="front-face"
                  src="https://www.technodom.kz/under/lunar-new-year/memory-5.png"
                  alt="Backbone"
                />
                <img
                  className="back-face"
                  src="https://www.technodom.kz/under/lunar-new-year/memory-card-back-face.png"
                  alt="technodom"
                />
              </div>
              <div className="memory-card" data-framework="backbone">
                <img
                  className="front-face"
                  src="https://www.technodom.kz/under/lunar-new-year/memory-5.png"
                  alt="Backbone"
                />
                <img
                  className="back-face"
                  src="https://www.technodom.kz/under/lunar-new-year/memory-card-back-face.png"
                  alt="technodom"
                />
              </div>

              <div className="memory-card" data-framework="react">
                <img
                  className="front-face"
                  src="https://www.technodom.kz/under/lunar-new-year/memory-6.png"
                  alt="React"
                />
                <img
                  className="back-face"
                  src="https://www.technodom.kz/under/lunar-new-year/memory-card-back-face.png"
                  alt="technodom"
                />
              </div>
              <div className="memory-card" data-framework="react">
                <img
                  className="front-face"
                  src="https://www.technodom.kz/under/lunar-new-year/memory-6.png"
                  alt="React"
                />
                <img
                  className="back-face"
                  src="https://www.technodom.kz/under/lunar-new-year/memory-card-back-face.png"
                  alt="technodom"
                />
              </div>

              <div className="memory-card" data-framework="test-1">
                <img
                  className="front-face"
                  src="https://www.technodom.kz/under/lunar-new-year/memory-7.png"
                  alt="test-1"
                />
                <img
                  className="back-face"
                  src="https://www.technodom.kz/under/lunar-new-year/memory-card-back-face.png"
                  alt="technodom"
                />
              </div>
              <div className="memory-card" data-framework="test-1">
                <img
                  className="front-face"
                  src="https://www.technodom.kz/under/lunar-new-year/memory-7.png"
                  alt="test-1"
                />
                <img
                  className="back-face"
                  src="https://www.technodom.kz/under/lunar-new-year/memory-card-back-face.png"
                  alt="technodom"
                />
              </div>

              <div className="memory-card" data-framework="test-2">
                <img
                  className="front-face"
                  src="https://www.technodom.kz/under/lunar-new-year/memory-8.png"
                  alt="test-2"
                />
                <img
                  className="back-face"
                  src="https://www.technodom.kz/under/lunar-new-year/memory-card-back-face.png"
                  alt="technodom"
                />
              </div>
              <div className="memory-card" data-framework="test-2">
                <img
                  className="front-face"
                  src="https://www.technodom.kz/under/lunar-new-year/memory-8.png"
                  alt="test-2"
                />
                <img
                  className="back-face"
                  src="https://www.technodom.kz/under/lunar-new-year/memory-card-back-face.png"
                  alt="technodom"
                />
              </div>
            </div>
          </div>
        </div>
      </WrapperQuest>
    </div>
  );
};

export { MemoryGame };
