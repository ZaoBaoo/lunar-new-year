import "./StartScene.scss";
import { useDispatch } from "react-redux";
import { setActiveSceneAction } from "../../../../store/reducers/scene";
import { Button } from "../../../Button/Button";

const StartScene = () => {
  const dispatch = useDispatch();

  const handleNextScene = () => {
    setTimeout(() => {
      dispatch(setActiveSceneAction({ type: "brands", activeBrand: null }));
    }, 500);
  };

  return (
    <div className="startScene">
      <Button size="large" text="К игре" onClick={handleNextScene} />
    </div>
  );
};

export { StartScene };
