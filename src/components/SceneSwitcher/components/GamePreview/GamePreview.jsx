import "./GamePreview.scss";
import { clsx } from "clsx";
import { Button } from "../../../Button/Button";
import {
  setActiveQuestAction,
  setActiveSceneAction,
} from "../../../../store/reducers/scene";
import { useDispatch, useSelector } from "react-redux";
import { getActiveQuest } from "../../../../urils/getActiveQuest.js";
import { useEffect } from "react";

const GamePreview = ({ activeBrand }) => {
  const { brands, activeQuest } = useSelector((state) => state.scene);
  const dispatch = useDispatch();

  const handleNextScene = () => {
    setTimeout(() => {
      dispatch(
        setActiveSceneAction({
          type: activeQuest.nameQuest,
          activeBrand: activeBrand,
        })
      );
    }, 500);
  };

  useEffect(() => {
    if (activeBrand && brands) {
      const activeQuest = getActiveQuest(activeBrand, brands);

      dispatch(setActiveQuestAction(activeQuest));
    }
  }, [activeBrand, brands]);

  return (
    <div className={clsx("gamePreview", `gamePreview_${activeBrand}`)}>
      <p className="gamePreview__text">
        Добро пожаловать на уровень AVA. Нажми «Играть», чтобы начать игру.
      </p>
      <Button size="large" text="Играть!" onClick={handleNextScene} />
    </div>
  );
};

export { GamePreview };
