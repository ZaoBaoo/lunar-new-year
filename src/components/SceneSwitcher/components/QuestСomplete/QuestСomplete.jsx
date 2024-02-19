import "./QuestСomplete.scss";
import { Brand } from "../../../Brand/Brand.jsx";
import { Button } from "../../../Button/Button.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { api } from "../../../../urils/Api.js";
import { handleCompleteAndInstallNextQuestAction } from "../../../../store/reducers/scene.js";
import { Loader } from "../../../Loader/Loader.jsx";

const QuestComplete = () => {
  const [currentQuest, setCurrentQuest] = useState(null);
  const { brands, activeQuest, activeBrand } = useSelector(
    (state) => state.scene
  );
  const ref = useRef(null);

  const dispatch = useDispatch();

  const nextQuest = () => {
    handleCompleteAndInstallNextQuest();
  };

  const handleCompleteAndInstallNextQuest = () => {
    const copyObjectBrands = JSON.parse(JSON.stringify(brands));

    const indexNextQuest = brands[activeBrand].quests.findIndex(
      (brand) => brand.event === activeQuest.event
    );

    copyObjectBrands[activeBrand].quests[indexNextQuest].complete = true;
    const nextQuest = JSON.parse(
      JSON.stringify(copyObjectBrands[activeBrand].quests[indexNextQuest + 1])
    );
    const nextScene = nextQuest.nameQuest;

    dispatch(
      handleCompleteAndInstallNextQuestAction({
        copyObjectBrands,
        nextQuest,
        nextScene,
      })
    );
  };

  useEffect(() => {
    if (activeQuest) {
      console.log("ВЫПОЛНИЛ ПУШ");
      const { event } = activeQuest;
      api.pushEventCompletedGame(event);
    }
  }, [activeQuest]);

  useEffect(() => {
    if (activeQuest) {
      setCurrentQuest(activeQuest);
    }
  }, []);

  useEffect(() => {
    ref.current?.classList.add("scene-animate");
  }, []);

  return (
    <div className="questComplete" ref={ref}>
      {currentQuest ? (
        <>
          <div className="questComplete__animation">
            <img
              src="https://www.technodom.kz/under/lunar-new-year/petals.png"
              className="questComplete__petal pt-1"
              alt=""
              style={{
                "--petal-scale": 1,
                "--petal-top": "-1%",
                "--petal-left": "2%",
              }}
            />
            <img
              src="https://www.technodom.kz/under/lunar-new-year/petals.png"
              className="questComplete__petal pt-7"
              alt=""
              style={{
                "--petal-scale": 1.3,
                "--petal-top": "10%",
                "--petal-left": "5%",
                "--petal-animate": "scaleReverse",
              }}
            />
            <img
              src="https://www.technodom.kz/under/lunar-new-year/petals.png"
              className="questComplete__petal pt-2"
              alt=""
              style={{
                "--petal-scale": 1.4,
                "--petal-top": "-1%",
                "--petal-right": "25%",
              }}
            />
            <img
              src="https://www.technodom.kz/under/lunar-new-year/petals.png"
              className="questComplete__petal pt-3"
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
              className="questComplete__petal pt-3"
              alt=""
              style={{
                "--petal-scale": 1.5,
                "--petal-top": "25%",
                "--petal-right": "15%",
              }}
            />
            <img
              src="https://www.technodom.kz/under/lunar-new-year/petals.png"
              className="questComplete__petal pt-4"
              alt=""
              style={{
                "--petal-scale": 2.1,
                "--petal-bottom": "25%",
                "--petal-left": "-10%",
              }}
            />
            <img
              src="https://www.technodom.kz/under/lunar-new-year/petals.png"
              className="questComplete__petal pt-5"
              alt=""
              style={{
                "--petal-scale": 1.3,
                "--petal-bottom": "17%",
                "--petal-right": "10%",
              }}
            />
            <img
              src="https://www.technodom.kz/under/lunar-new-year/petals.png"
              className="questComplete__petal pt-6"
              alt=""
              style={{
                "--petal-scale": 1.2,
                "--petal-bottom": "13%",
                "--petal-left": "25%",
                "--petal-animate": "scaleReverse",
              }}
            />
          </div>
          <div className="questComplete__wrapper">
            <img
              src="https://www.technodom.kz/under/lunar-new-year/cloud-type1-right.png"
              className="questComplete__cloud cl-1"
              alt=""
            />
            <img
              src="https://www.technodom.kz/under/lunar-new-year/cloud-type1-left.png"
              className="questComplete__cloud cl-2"
              alt=""
            />

            <div className="questComplete__top">
              <Brand size="large" type={activeBrand} />
              <h3 className="questComplete__title">
                {currentQuest.endContent.title}
              </h3>
              <p className="questComplete__text">
                {currentQuest.endContent.text}
              </p>
            </div>
            <div className="questComplete__middle">
              <div className="questComplete__middle-in">
                <img
                  src="https://www.technodom.kz/under/lunar-new-year/circle-pattern.png"
                  className="questComplete__middle-in__circle-pattern"
                  alt=""
                />
                <img
                  src="https://www.technodom.kz/under/lunar-new-year/circle-shadow.png"
                  className="questComplete__middle-in__circle-pattern-shadow"
                  alt=""
                />
                <img
                  src="https://www.technodom.kz/under/lunar-new-year/circle-pattern-bg.png"
                  className="questComplete__middle-in__circle-pattern-bg"
                  alt=""
                />
                <div className="questComplete__middle-in__prize">
                  <img
                    className="questComplete__middle-in__prize__image"
                    src={currentQuest.image}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="questComplete__bottom">
              <Button
                size="large"
                onClick={nextQuest}
                text="К следующему уровню"
              />
            </div>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export { QuestComplete };
