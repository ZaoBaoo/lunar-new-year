import "./GamePreview.scss";
import { clsx } from "clsx";
import { Button } from "../../../Button/Button";
import {
  setActivePopupAction,
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

      // Если квеста нет активного у бренда, вызвать попап авторизации!
      if (!activeQuest) {
        dispatch(
          setActivePopupAction({
            type: "popup",
            popupParam: "brandComplete",
            activeBrand: activeBrand,
          })
        );
        return;
      }

      dispatch(setActiveQuestAction(activeQuest));
    }
  }, [activeBrand, brands]);

  return (
    <div className={clsx("gamePreview", `gamePreview_${activeBrand}`)}>
      <div
        className="gamePreview__brand-bg"
        style={{
          backgroundImage: `url(${brands[activeBrand]["imageBg"]})`,
        }}
      ></div>
      <div className="gamePreview__wrapper">
        <img
          src="https://www.technodom.kz/under/lunar-new-year/cloud-type2-right.png"
          className="gamePreview__cloud cl-1"
          alt=""
        />
        <img
          src="https://www.technodom.kz/under/lunar-new-year/cloud-type2-left.png"
          className="gamePreview__cloud cl-2"
          alt=""
        />

        <img
          src="https://www.technodom.kz/under/lunar-new-year/umbrella.png"
          className="gamePreview__umbrella umbr-1"
          alt=""
        />
        <img
          src="https://www.technodom.kz/under/lunar-new-year/umbrella.png"
          className="gamePreview__umbrella umbr-2"
          alt=""
        />

        <div className="gamePreview__content">
          <div className="gamePreview__content-in">
            <img
              src="https://www.technodom.kz/under/lunar-new-year/circle-pattern.png"
              className="gamePreview__content-in__circle-pattern"
              alt=""
            />
            <img
              src="https://www.technodom.kz/under/lunar-new-year/circle-shadow.png"
              className="gamePreview__content-in__circle-pattern-shadow"
              alt=""
            />
            <img
              src="https://www.technodom.kz/under/lunar-new-year/circle-pattern-bg.png"
              className="gamePreview__content-in__circle-pattern-bg"
              alt=""
            />
            <div className="gamePreview__content-in__brand">
              <img
                className="gamePreview__content-in__brand__image"
                src={brands[activeBrand]["image"]}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <p className="gamePreview__text">
        Добро пожаловать на уровень {activeBrand?.toUpperCase()}. Нажми
        «Играть», чтобы начать игру.
      </p>
      <Button size="large" text="Играть!" onClick={handleNextScene} />
    </div>
  );
};

export { GamePreview };
