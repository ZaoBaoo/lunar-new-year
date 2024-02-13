import "./WrapperQuest.scss";
import { ButtonClose } from "../ButtonClose/ButtonClose.jsx";
import { setActiveSceneAction } from "../../store/reducers/scene.js";
import { useDispatch } from "react-redux";
import { Button } from "../Button/Button.jsx";

const WrapperQuest = ({ children, indexQuest, isButtonDisabled }) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    setTimeout(() => {
      dispatch(setActiveSceneAction({ type: "brands", activeBrand: null }));
    }, 500);
  };

  return (
    <div className="wrapperQuest">
      <div className="wrapperQuest__block">
        <h2 className="wrapperQuest__title">{indexQuest} уровень</h2>
        <ButtonClose onClick={handleClose} />
        <div className="wrapperQuest__content">
          {children}
          <Button
            disabled={isButtonDisabled}
            size="small"
            text="Далее"
            className="wrapperQuest__button-next"
          />
        </div>
      </div>
    </div>
  );
};

export { WrapperQuest };
