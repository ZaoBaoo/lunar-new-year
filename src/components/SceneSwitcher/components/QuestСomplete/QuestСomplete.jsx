import "./QuestСomplete.scss";
import { Brand } from "../../../Brand/Brand.jsx";
import { Button } from "../../../Button/Button.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { api } from "../../../../urils/Api.js";
import {
  handleCompleteAndInstallNextQuestAction,
  setActiveQuestAction,
  setActiveSceneAction,
  setBrandsAction,
} from "../../../../store/reducers/scene.js";

const QuestComplete = () => {
  const { brands, activeQuest, activeBrand } = useSelector(
    (state) => state.scene
  );

  const dispatch = useDispatch();

  const nextQuest = () => {
    setTimeout(() => {
      dispatch(dispatch(handleCompleteAndInstallNextQuestAction()));
    }, 500);
  };

  // const handleCompleteAndInstallNextQuestAction = () => {
  //   const { event } = activeQuest;
  //
  //   const targetBrand = JSON.parse(JSON.stringify(brands))[activeBrand];
  //
  //   let indexNextQuest;
  //
  //   targetBrand.quests.forEach((quest, index) => {
  //     if (quest.event === event) {
  //       quest.complete = true;
  //       indexNextQuest = index + 1;
  //     }
  //   });
  //
  //   dispatch(setBrandsAction({ ...brands, [activeBrand]: targetBrand }));
  //   dispatch(setActiveQuestAction(targetBrand.quests[indexNextQuest]));
  //   dispatch(setActiveSceneAction({}));
  // };

  useEffect(() => {
    if (activeQuest) {
      console.log("ВЫПОЛНИЛ ПУШ");
      const { event } = activeQuest;
      api.pushEventCompletedGame(event);
    }
  }, [activeQuest]);

  return (
    <div className="questComplete">
      <div className="questComplete__wrapper">
        <div className="questComplete__top">
          <Brand size="large" type="ava" />
          <h3 className="questComplete__title">
            Ты всё ближе к цели! 1-ый уровень позади!
          </h3>
          <p className="questComplete__text">
            Ты участвуешь в розыгрыше 50 сертификатов номиналом 10 000 тенге
          </p>
        </div>
        <div className="questComplete__bottom">
          <Button size="large" onClick={nextQuest} text="К следующему уровню" />
        </div>
      </div>
      <img
        className="questComplete__image"
        src="https://www.technodom.kz/under/lunar-new-year/ava-prize-1.png"
        alt=""
      />
    </div>
  );
};

export { QuestComplete };
