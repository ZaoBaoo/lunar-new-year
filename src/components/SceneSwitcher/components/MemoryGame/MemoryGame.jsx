import "../../../../modules/memoryGame/memory-game.scss";
import "./MemoryGame.scss";
import { memoryGame } from "../../../../modules/memoryGame/memoryGame.js";
import { WrapperQuest } from "../../../WrapperQuest/WrapperQuest.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setActiveSceneAction } from "../../../../store/reducers/scene.js";

const MemoryGame = ({ activeBrand }) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const { brands, activeQuest } = useSelector((state) => state.scene);
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
        indexQuest={activeQuest.id}
        isButtonDisabled={!isButtonDisabled}
        handleAction={questCompleted}
      >
        <div className="memory-game">
          <div className="memory-game__top-content">
            <div className="memory-game__description">
              Найди одинаковую технику {activeBrand?.toUpperCase()}
            </div>

            <div className="memory-game__wrapper">
              <div className="memory-card" data-framework="aurelia">
                <img
                  className="front-face"
                  src={`https://www.technodom.kz/under/lunar-new-year/memory-${activeBrand}-1.png`}
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
                  src={`https://www.technodom.kz/under/lunar-new-year/memory-${activeBrand}-1.png`}
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
                  src={`https://www.technodom.kz/under/lunar-new-year/memory-${activeBrand}-2.png`}
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
                  src={`https://www.technodom.kz/under/lunar-new-year/memory-${activeBrand}-2.png`}
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
                  src={`https://www.technodom.kz/under/lunar-new-year/memory-${activeBrand}-3.png`}
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
                  src={`https://www.technodom.kz/under/lunar-new-year/memory-${activeBrand}-3.png`}
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
                  src={`https://www.technodom.kz/under/lunar-new-year/memory-${activeBrand}-4.png`}
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
                  src={`https://www.technodom.kz/under/lunar-new-year/memory-${activeBrand}-4.png`}
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
                  src={`https://www.technodom.kz/under/lunar-new-year/memory-${activeBrand}-5.png`}
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
                  src={`https://www.technodom.kz/under/lunar-new-year/memory-${activeBrand}-5.png`}
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
                  src={`https://www.technodom.kz/under/lunar-new-year/memory-${activeBrand}-6.png`}
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
                  src={`https://www.technodom.kz/under/lunar-new-year/memory-${activeBrand}-6.png`}
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
                  src={`https://www.technodom.kz/under/lunar-new-year/memory-${activeBrand}-7.png`}
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
                  src={`https://www.technodom.kz/under/lunar-new-year/memory-${activeBrand}-7.png`}
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
                  src={`https://www.technodom.kz/under/lunar-new-year/memory-${activeBrand}-8.png`}
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
                  src={`https://www.technodom.kz/under/lunar-new-year/memory-${activeBrand}-8.png`}
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
