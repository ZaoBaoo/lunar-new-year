import "./GamePreview.scss";
import { clsx } from "clsx";
import { Button } from "../../../Button/Button";
import { setActiveSceneAction } from "../../../../store/reducers/scene";
import { useDispatch } from "react-redux";

const GamePreview = ({ param }) => {
  const dispatch = useDispatch();

  const handleNextScene = () => {
    setTimeout(() => {
      dispatch(setActiveSceneAction({ type: "quizSound", param: param }));
    }, 500);
  };

  return (
    <div className={clsx("gamePreview", `gamePreview_${param}`)}>
      <p className="gamePreview__text">
        Добро пожаловать на уровень AVA. Нажми «Играть», чтобы начать игру.
      </p>
      <Button size="large" text="Играть!" onClick={handleNextScene} />
    </div>
  );
};

export { GamePreview };
