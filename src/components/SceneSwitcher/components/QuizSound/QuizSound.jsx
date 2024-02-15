import "../../../../modules/quizSound/index.scss";
import Quiz from "../../../../modules/quizSound/Quiz.js";
import { useEffect } from "react";
import { setActiveSceneAction } from "../../../../store/reducers/scene.js";
import { useDispatch, useSelector } from "react-redux";
import { WrapperQuest } from "../../../WrapperQuest/WrapperQuest.jsx";

const QuizSound = ({ activeBrand }) => {
  const { activeQuest } = useSelector((state) => state.scene);
  const dispatch = useDispatch();

  const questCompleted = () => {
    setTimeout(() => {
      dispatch(
        setActiveSceneAction({
          type: "questComplete",
          activeBrand: activeBrand,
        })
      );
    }, 500);
  };

  useEffect(() => {
    const quiz = new Quiz({
      type: "audio",
      callbackFinal: questCompleted,
    });
    quiz.init();
  }, []);

  return (
    <WrapperQuest indexQuest={activeQuest?.id} isButtonDisabled={true}>
      <section className="quizSound__core" id="quiz-core">
        <div className="quizSound__header">
          <div className="quizSound__question" id="quiz-question"></div>
          <div className="quizSound__answers" id="quiz-answers"></div>
        </div>
        <div className="quizSound__final" id="quiz-final"></div>
        <div className="quizSound__footer">
          <span className="quizSound__progress-indicator"></span>
          <button className="quizSound__next-btn" id="quiz-next-btn" disabled>
            Далее
          </button>
        </div>
      </section>
    </WrapperQuest>
  );
};

export { QuizSound };
