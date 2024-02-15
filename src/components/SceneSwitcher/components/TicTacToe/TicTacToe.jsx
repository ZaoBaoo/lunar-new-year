import { runTicTacToe } from "../../../../modules/ticTacToe/runTicTacToe.js";
import "./TicTacToe.scss";
import { useEffect } from "react";
import { WrapperQuest } from "../../../WrapperQuest/WrapperQuest.jsx";
import { setActiveSceneAction } from "../../../../store/reducers/scene.js";
import { useDispatch } from "react-redux";

const TicTacToe = ({ activeBrand }) => {
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

  useEffect(() => {
    runTicTacToe("ava", questCompleted);
  }, []);

  return (
    <WrapperQuest indexQuest={2}>
      <div className="ticTacToe">
        <div className="ticTacToe__description">
          <span>Твой ход первый</span>
        </div>
        <section className="gameboard">
          <div className="row row-01">
            <div className="square square-00" data-index="0" data-side=""></div>
            <div className="square square-01" data-index="1" data-side=""></div>
            <div className="square square-02" data-index="2" data-side=""></div>
          </div>

          <div className="row row-02">
            <div className="square square-03" data-index="3" data-side=""></div>
            <div className="square square-04" data-index="4" data-side=""></div>
            <div className="square square-05" data-index="5" data-side=""></div>
          </div>

          <div className="row row-03">
            <div className="square square-06" data-index="6" data-side=""></div>
            <div className="square square-07" data-index="7" data-side=""></div>
            <div className="square square-08" data-index="8" data-side=""></div>
          </div>
        </section>
      </div>
    </WrapperQuest>
  );
};

export { TicTacToe };
