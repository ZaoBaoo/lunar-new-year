import "./BrandsScene.scss";
import { setActiveSceneAction } from "../../../../store/reducers/scene";
import { useDispatch } from "react-redux";
import { ButtonBrand } from "./Components/ButtonBrand/ButtonBrand";
import { brandsData } from "../../../../urils/brandsData";

const BrandsScene = ({ params }) => {
  const dispatch = useDispatch();

  const handleNextScene = (type) => {
    const brandStartDate = Date.parse(brandsData[type].startDate);
    const currentTime = new Date().getTime();

    if (brandStartDate < currentTime) {
      setTimeout(() => {
        dispatch(setActiveSceneAction({ type: "gamePreview", param: type }));
      }, 500);
    } else {
      setTimeout(() => {
        dispatch(setActiveSceneAction({ type: "popup", param: type }));
      }, 500);
    }
  };

  return (
    <div className="brandsScene">
      <div className="brandsScene__content">
        <div className="brandsScene__title">Выбери бренд</div>
        <div className="brandsScene__list">
          <ButtonBrand type="ava" handleNextScene={handleNextScene} isActive />
          <ButtonBrand type="neo" handleNextScene={handleNextScene} />
          <ButtonBrand type="vivo" handleNextScene={handleNextScene} />
          <ButtonBrand type="lg" handleNextScene={handleNextScene} />
          <ButtonBrand type="hotpoint" handleNextScene={handleNextScene} />
          <ButtonBrand type="philips" handleNextScene={handleNextScene} />
        </div>
        <button className="brandsScene__leaderboard">Турнирная таблица</button>
      </div>
    </div>
  );
};

export { BrandsScene };
