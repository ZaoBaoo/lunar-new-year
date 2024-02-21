import "./BrandsScene.scss";
import {
  setActivePopupAction,
  setActiveSceneAction,
} from "../../../../store/reducers/scene";
import { useDispatch } from "react-redux";
import { ButtonBrand } from "./Components/ButtonBrand/ButtonBrand";
import { brandsData } from "../../../../urils/brandsData";
import { checkAuth } from "../../../../urils/checkAuth.js";
import { useEffect, useRef, useState } from "react";

const BrandsScene = () => {
  const dispatch = useDispatch();
  const refAnimateScene = useRef();

  const handleLeaderboardScene = () => {
    if (!checkAuth()) {
      if (window.signInHelper) {
        window.signInHelper();
        return;
      } else {
        return;
      }
    }

    setTimeout(() => {
      dispatch(
        setActiveSceneAction({ type: "leaderboard", activeBrand: null })
      );
    }, 500);
  };

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

  const showAnimate = () => {
    refAnimateScene.current?.classList.add("scene-animate");
  };

  useEffect(() => {}, []);

  return (
    <>
      <div className="brandsScene" ref={refAnimateScene} onLoad={showAnimate}>
        <div className="brandsScene__animation">
          <div className="brandsScene__animation__main-circle">
            <div className="brandsScene__animation__main-circle-in">
              <img
                src="https://www.technodom.kz/under/lunar-new-year/circle-pattern.png"
                className="brandsScene__animation__main-circle-in__circle-pattern"
                alt=""
              />
              <img
                src="https://www.technodom.kz/under/lunar-new-year/main-dragon.png"
                className="brandsScene__animation__main-circle-in__dragon"
                alt=""
              />
            </div>
          </div>
          <img
            src="https://www.technodom.kz/under/lunar-new-year/cloud-type1-right.png"
            className="brandsScene__animation__cloud cl-1"
            alt=""
          />
          <img
            src="https://www.technodom.kz/under/lunar-new-year/cloud-type1-left.png"
            className="brandsScene__animation__cloud cl-2"
            alt=""
          />

          <img
            src="https://www.technodom.kz/under/lunar-new-year/petals.png"
            className="brandsScene__animation__petal pt-1"
            alt=""
            style={{
              "--petal-scale": 1,
              "--petal-top": "-1%",
              "--petal-left": "2%",
            }}
          />
          <img
            src="https://www.technodom.kz/under/lunar-new-year/petals.png"
            className="brandsScene__animation__petal pt-2"
            alt=""
            style={{
              "--petal-scale": 1.4,
              "--petal-top": "-1%",
              "--petal-right": "25%",
            }}
          />
          <img
            src="https://www.technodom.kz/under/lunar-new-year/petals.png"
            className="brandsScene__animation__petal pt-3"
            alt=""
            style={{
              "--petal-scale": 1.9,
              "--petal-top": "50%",
              "--petal-right": "-15%",
              "--petal-animate": "scaleReverse",
            }}
          />
          <img
            src="https://www.technodom.kz/under/lunar-new-year/petals.png"
            className="brandsScene__animation__petal pt-4"
            alt=""
            style={{
              "--petal-scale": 2.1,
              "--petal-bottom": "25%",
              "--petal-left": "-10%",
            }}
          />
          <img
            src="https://www.technodom.kz/under/lunar-new-year/petals.png"
            className="brandsScene__animation__petal pt-5"
            alt=""
            style={{
              "--petal-scale": 1.3,
              "--petal-bottom": "17%",
              "--petal-right": "10%",
            }}
          />
          <img
            src="https://www.technodom.kz/under/lunar-new-year/petals.png"
            className="brandsScene__animation__petal pt-6"
            alt=""
            style={{
              "--petal-scale": 1.2,
              "--petal-bottom": "3%",
              "--petal-right": "10%",
              "--petal-animate": "scaleReverse",
            }}
          />
        </div>
        <div className="brandsScene__content">
          <div className="brandsScene__title">Выбери бренд</div>
          <div className="brandsScene__list">
            <ButtonBrand
              type="ava"
              handleNextScene={handleNextScene}
              isActive
            />
            <ButtonBrand
              type="neo"
              handleNextScene={handleNextScene}
              isActive
            />
            <ButtonBrand
              type="philips"
              handleNextScene={handleNextScene}
              isActive
            />
            <ButtonBrand
              type="vivo"
              handleNextScene={handleNextScene}
              isActive
            />
            <ButtonBrand type="lg" handleNextScene={handleNextScene} isActive />
            <ButtonBrand
              type="hotpoint"
              handleNextScene={handleNextScene}
              isActive
            />
          </div>
          <button
            className="brandsScene__leaderboard"
            onClick={handleLeaderboardScene}
          >
            Турнирная таблица
          </button>
        </div>
      </div>
    </>
  );
};

export { BrandsScene };
