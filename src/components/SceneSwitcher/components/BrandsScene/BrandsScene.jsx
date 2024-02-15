import "./BrandsScene.scss";
import {
  setActivePopupAction,
  setActiveSceneAction,
} from "../../../../store/reducers/scene";
import { useDispatch } from "react-redux";
import { ButtonBrand } from "./Components/ButtonBrand/ButtonBrand";
import { brandsData } from "../../../../urils/brandsData";
import { checkAuth } from "../../../../urils/checkAuth.js";

const BrandsScene = () => {
  const dispatch = useDispatch();

  const handleNextScene = (type) => {
    const brandStartDate = Date.parse(brandsData[type].startDate);
    const currentTime = new Date().getTime();

    if (!checkAuth()) {
      if (window.signInHelper) {
        window.signInHelper();
        return;
      } else {
        return;
      }
    }

    if (brandStartDate < currentTime) {
      setTimeout(() => {
        dispatch(
          setActiveSceneAction({ type: "gamePreview", activeBrand: type })
        );
      }, 500);
    } else {
      setTimeout(() => {
        dispatch(
          setActivePopupAction({
            type: "popup",
            popupParam: "announcement",
            activeBrand: type,
          })
        );
      }, 500);
    }
  };

  return (
    <div className="brandsScene">
      <div className="brandsScene__content">
        <div className="brandsScene__title">Выбери бренд</div>
        <div className="brandsScene__list">
          <ButtonBrand type="ava" handleNextScene={handleNextScene} isActive />
          <ButtonBrand type="neo" handleNextScene={handleNextScene} isActive />
          <ButtonBrand type="philips" handleNextScene={handleNextScene} />
          <ButtonBrand type="vivo" handleNextScene={handleNextScene} />
          <ButtonBrand type="hotpoint" handleNextScene={handleNextScene} />
          <ButtonBrand type="lg" handleNextScene={handleNextScene} />
        </div>
        <button className="brandsScene__leaderboard">Турнирная таблица</button>
      </div>
    </div>
  );
};

export { BrandsScene };
