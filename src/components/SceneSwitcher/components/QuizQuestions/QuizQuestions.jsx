import { WrapperQuest } from "../../../WrapperQuest/WrapperQuest.jsx";
import { useDispatch } from "react-redux";
import { setActiveSceneAction } from "../../../../store/reducers/scene.js";
import { useEffect } from "react";

const QuizQuestions = ({ activeBrand }) => {
  const dispatch = useDispatch();

  const questCompleted = () => {
    setTimeout(() => {
      dispatch(
        setActiveSceneAction({ type: "questComplete", activeBrand: null })
      );
    }, 500);
  };

  useEffect(() => {
    import("../../../../modules/quizQuestions/Quiz.js").then(
      ({ default: Quiz }) => {
        const quiz = new Quiz({
          type: "image",
          callbackFinal: questCompleted,
        });
        quiz.init();
      }
    );
  }, []);
  return (
    <div className="quizQuestions">
      <WrapperQuest indexQuest={3} isButtonDisabled={true}>
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
