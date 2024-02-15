import "./QuestСomplete.scss";
import { Brand } from "../../../Brand/Brand.jsx";
import { Button } from "../../../Button/Button.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { api } from "../../../../urils/Api.js";
import { handleCompleteAndInstallNextQuestAction } from "../../../../store/reducers/scene.js";
import { Loader } from "../../../Loader/Loader.jsx";

const QuestComplete = () => {
  const [currentQuest, setCurrentQuest] = useState(null);
  const { brands, activeQuest, activeBrand } = useSelector(
    (state) => state.scene
  );

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

  return (
    <div className="questComplete">
      {currentQuest ? (
        <>
          <div className="questComplete__wrapper">
            <div className="questComplete__top">
              <Brand size="large" type={activeBrand} />
              <h3 className="questComplete__title">
                {currentQuest.endContent.title}
              </h3>
              <p className="questComplete__text">
                {currentQuest.endContent.text}
              </p>
            </div>
            <div className="questComplete__bottom">
              <Button
                size="large"
                onClick={nextQuest}
                text="К следующему уровню"
              />
            </div>
          </div>
          <img
            className="questComplete__image"
            src={currentQuest.image}
            alt=""
          />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export { QuestComplete };
