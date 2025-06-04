import "./RockPaperScissors.scss";
import "../../../../modules/rockPaperScissors/index.scss";
import { rockPaperScissors } from "../../../../modules/rockPaperScissors/rockPaperScissors.js";
import { WrapperQuest } from "../../../WrapperQuest/WrapperQuest.jsx";
import { useEffect, useState } from "react";
import { setActiveSceneAction } from "../../../../store/reducers/scene.js";
import { useDispatch, useSelector } from "react-redux";

const RockPaperScissors = ({ activeBrand }) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const { activeQuest } = useSelector((state) => state.scene);

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
    setIsButtonDisabled(false);
  };

  useEffect(() => {
    rockPaperScissors(handelButtonActive);
  }, []);

  return (
    <div className="rockPaperScissors">
      <WrapperQuest
        isButtonDisabled={isButtonDisabled}
        handleAction={questCompleted}
        indexQuest={activeQuest?.id}
        bg={activeBrand}
      >
        <section className="knb">
          <div className="knb__question">
            <h3 className="knb__title">
              Победи дракона в игре «Камень, ножницы, бумага» 3 раза.
            </h3>
          </div>

          <div className="score">
            <h2>
              <img
                src="https://www.technodom.kz/under/knb-moonyear/user-avatar.png"
                alt=""
                className="avatar"
              />
              Ты
              <br />
              <span className="you">0</span>
            </h2>
            <h2>
              <img
                src="https://www.technodom.kz/under/knb-moonyear/dragon-avatar.png"
                alt=""
                className="avatar"
              />
              Дракон
              <br />
              <span className="computer">0</span>
            </h2>
          </div>

          <div className="match">
            <div className="hands">
              <img
                className="player-hand"
                src="https://www.technodom.kz/under/knb-moonyear/rock-user.svg"
                alt=""
              />
              <h2 className="result"></h2>
              <img
                className="computer-hand"
                src="https://www.technodom.kz/under/knb-moonyear/rock-dragon.svg"
                alt=""
              />
            </div>

            <h2 className="winner">Твой выбор:</h2>
            <div className="options">
              <button className="rock">
                <img
                  src="https://www.technodom.kz/under/knb-moonyear/rock-option.svg"
                  alt="rock"
                />
                <br />
                <label>rock</label>
              </button>
              <button className="paper">
                <img
                  src="https://www.technodom.kz/under/knb-moonyear/paper-option.svg"
                  alt="paper"
                />
                <br />
                <label>paper</label>
              </button>
              <button className="scissor">
                <img
                  src="https://www.technodom.kz/under/knb-moonyear/scissors-option.svg"
                  alt="scissor"
                />
                <br />
                <label>scissor</label>
              </button>
            </div>
          </div>
        </section>
      </WrapperQuest>
    </div>
  );
};

export { RockPaperScissors };
