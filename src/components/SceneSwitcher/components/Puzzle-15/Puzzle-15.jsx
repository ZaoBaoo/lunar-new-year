import "../../../../modules/puzzle-15/puzzle-15.scss";
import "./Puzzle-15.scss";
import { puzzle15Run } from "../../../../modules/puzzle-15/index.js";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveSceneAction } from "../../../../store/reducers/scene.js";
import { WrapperQuest } from "../../../WrapperQuest/WrapperQuest.jsx";

const Puzzle15 = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const { activeBrand, activeQuest } = useSelector((state) => state.scene);
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

  const handlerButtonActive = () => {
    setIsButtonDisabled(false);
  };

  useEffect(() => {
    if (activeBrand) {
      puzzle15Run(handlerButtonActive, activeBrand);
    }
  }, [activeBrand]);

  return (
    <WrapperQuest
      indexQuest={activeQuest?.id}
      isButtonDisabled={isButtonDisabled}
      handleAction={questCompleted}
    >
      <div className="puzzle">
        <div className="puzzle__question" id="quiz-question">
          <h3 className="puzzle__title">Собери картинку</h3>
        </div>
        <div className="puzzle__board-container">
          <table className="puzzle__board">
            <tr>
              <td>
                <div
                  className="puzzle__tile"
                  unselectable="on"
                  data-number-puzzle={`1`}
                ></div>
              </td>
              <td>
                <div
                  className="puzzle__tile"
                  unselectable="on"
                  data-number-puzzle={`2`}
                ></div>
              </td>
              <td>
                <div
                  className="puzzle__tile"
                  unselectable="on"
                  data-number-puzzle={`3`}
                ></div>
              </td>
              <td>
                <div
                  className="puzzle__tile"
                  unselectable="on"
                  data-number-puzzle={`4`}
                ></div>
              </td>
            </tr>
            <tr>
              <td>
                <div
                  className="puzzle__tile"
                  unselectable="on"
                  data-number-puzzle={`5`}
                ></div>
              </td>
              <td>
                <div
                  className="puzzle__tile"
                  unselectable="on"
                  data-number-puzzle={`6`}
                ></div>
              </td>
              <td>
                <div
                  className="puzzle__tile"
                  unselectable="on"
                  data-number-puzzle={`7`}
                ></div>
              </td>
              <td>
                <div
                  className="puzzle__tile"
                  unselectable="on"
                  data-number-puzzle={`8`}
                ></div>
              </td>
            </tr>
            <tr>
              <td>
                <div
                  className="puzzle__tile"
                  unselectable="on"
                  data-number-puzzle={`9`}
                ></div>
              </td>
              <td>
                <div
                  className="puzzle__tile"
                  unselectable="on"
                  data-number-puzzle={`10`}
                ></div>
              </td>
              <td>
                <div
                  className="puzzle__tile"
                  unselectable="on"
                  data-number-puzzle={`11`}
                ></div>
              </td>
              <td>
                <div
                  className="puzzle__tile"
                  unselectable="on"
                  data-number-puzzle={`12`}
                ></div>
              </td>
            </tr>
            <tr>
              <td>
                <div
                  className="puzzle__tile"
                  unselectable="on"
                  data-number-puzzle={`13`}
                ></div>
              </td>
              <td>
                <div
                  className="puzzle__tile"
                  unselectable="on"
                  data-number-puzzle={`14`}
                ></div>
              </td>
              <td>
                <div
                  className="puzzle__tile"
                  unselectable="on"
                  data-number-puzzle={`15`}
                ></div>
              </td>
              <td>
                <div
                  className="puzzle__tile puzzle__tile_empty"
                  unselectable="on"
                ></div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </WrapperQuest>
  );
};

export { Puzzle15 };
