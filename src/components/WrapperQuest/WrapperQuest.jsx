import "./WrapperQuest.scss";
import { ButtonClose } from "../ButtonClose/ButtonClose.jsx";
import { setActiveSceneAction } from "../../store/reducers/scene.js";
import { useDispatch } from "react-redux";
import { Button } from "../Button/Button.jsx";
import { clsx } from "clsx";
import { ProgressBar } from "./components/ProgressBar.jsx";

const WrapperQuest = ({
  children,
  indexQuest,
  buttonText = "Далее",
  isButtonDisabled,
  handleAction = Function.prototype,
  bg = "",
  className,
}) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    setTimeout(() => {
      dispatch(setActiveSceneAction({ type: "brands", activeBrand: null }));
    }, 500);
  };

  return (
    <div className={clsx("wrapperQuest", className)}>
      <div className={`wrapperQuest__block wrapperQuest__block_${bg}`}>
        <ProgressBar indexQuest={indexQuest} />
        <h2 className="wrapperQuest__title">{indexQuest} уровень</h2>
        <ButtonClose onClick={handleClose} />
        <div className="wrapperQuest__content">
          {children}
          <Button
            onClick={handleAction}
            disabled={isButtonDisabled}
            size="small"
            text={buttonText}
            className="wrapperQuest__button-next"
          />
        </div>
      </div>
    </div>
  );
};

export { WrapperQuest };
