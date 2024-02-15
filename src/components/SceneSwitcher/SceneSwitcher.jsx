import "./SceneSwitcher.scss";
import { useSelector } from "react-redux";
import { sceneComponents } from "../../urils/sceneComponents";

const SceneSwitcher = () => {
  const { activeScene, activeBrand } = useSelector((state) => state.scene);

  const ActiveScene = sceneComponents[activeScene] || (
    <div>Что-то пошло не так</div>
  );

  return (
    <div className="sceneSwitcher">
      <ActiveScene activeBrand={activeBrand} />
    </div>
  );
};

export { SceneSwitcher };
