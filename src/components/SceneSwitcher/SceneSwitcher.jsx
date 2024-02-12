import "./SceneSwitcher.scss";
import { useSelector } from "react-redux";
import { sceneComponents } from "../../urils/sceneComponents";

const SceneSwitcher = () => {
  const { activeScene, param } = useSelector((state) => state.scene);

  console.log(activeScene);

  const ActiveScene = sceneComponents[activeScene];

  return (
    <div className="sceneSwitcher">
      <ActiveScene param={param} />
    </div>
  );
};

export { SceneSwitcher };
