import "../../../../modules/quizQuestionsGrid/index.scss";
import Quiz from "../../../../modules/quizQuestionsGrid/Quiz.js";
import { WrapperQuest } from "../../../WrapperQuest/WrapperQuest.jsx";
import { useEffect } from "react";
import { setActiveSceneAction } from "../../../../store/reducers/scene.js";
import { useDispatch, useSelector } from "react-redux";

const QuizQuestionsGrid = ({ activeBrand }) => {
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
    if (activeQuest) {
      const quiz = new Quiz({
        type: "text",
        callbackFinal: questCompleted,
        id: activeQuest?.event,
      });
      quiz.init();
    }
  }, []);

  return (
    <div className="quizQuestionsGrid">
      <WrapperQuest indexQuest={activeQuest?.id} isButtonDisabled={true}>
        <section className="quizQuestionsGrid__core" id="quiz-core">
          <div className="quizQuestionsGrid__header">
            <div
              className="quizQuestionsGrid__question"
              id="quiz-question"
            ></div>
            <div
              className="quizQuestionsGrid__answers quizQuestionsGrid__answers_grid"
              id="quiz-answers"
            ></div>
          </div>
          <div className="quizQuestionsGrid__final" id="quiz-final"></div>
          <div className="quizQuestionsGrid__footer">
            <span className="quizQuestionsGrid__progress-indicator"></span>
            <button
              className="quizQuestionsGrid__next-btn"
              id="quiz-next-btn"
              disabled
            >
              Далее
            </button>
          </div>
        </section>
      </WrapperQuest>
    </div>
  );
};

export { QuizQuestionsGrid };
