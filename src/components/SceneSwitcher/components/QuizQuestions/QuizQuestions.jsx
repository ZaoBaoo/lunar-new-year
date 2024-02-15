import "../../../../modules/quizQuestions/index.scss";
import Quiz from "../../../../modules/quizQuestions/Quiz.js";
import { WrapperQuest } from "../../../WrapperQuest/WrapperQuest.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setActiveSceneAction } from "../../../../store/reducers/scene.js";
import { useEffect } from "react";

const QuizQuestions = ({ activeBrand }) => {
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
        type: "image",
        callbackFinal: questCompleted,
        id: activeQuest?.event,
      });
      quiz.init();
    }
  }, []);
  return (
    <div className="quizQuestions">
      <WrapperQuest indexQuest={activeQuest?.id} isButtonDisabled={true}>
        <section className="quizQuestions__core" id="quiz-core">
          <div className="quizQuestions__header">
            <div className="quizQuestions__question" id="quiz-question"></div>
            <div className="quizQuestions__answers" id="quiz-answers"></div>
          </div>
          <div className="quizQuestions__final" id="quiz-final"></div>
          <div className="quizQuestions__footer">
            <span className="quizQuestions__progress-indicator"></span>
            <button
              className="quizQuestions__next-btn"
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

export { QuizQuestions };
