import "./QuizSound.scss";
import { useEffect } from "react";
// import Quiz from "../../../../modules/quizSound/Quiz";
import { ButtonClose } from "../../../ButtonClose/ButtonClose";
import { setActiveSceneAction } from "../../../../store/reducers/scene.js";
import { useDispatch } from "react-redux";

const QuizSound = ({ param }) => {
  const dispatch = useDispatch();

  const handleNextScene = () => {
    setTimeout(() => {
      dispatch(setActiveSceneAction({ type: "brands", param: null }));
    }, 500);
  };

  const questCompleted = () => {
    setTimeout(() => {
      dispatch(setActiveSceneAction({ type: "questCompleted", param: null }));
    }, 500);
  };

  useEffect(() => {
    import("../../../../modules/quizSound/Quiz").then(({ default: Quiz }) => {
      const quiz = new Quiz({
        type: "audio",
        callbackFinal: questCompleted,
      });
      quiz.init();
    });
  }, []);

  return (
    <div className="quizSound">
      <div className="quizSound__block">
        <ButtonClose onClick={handleNextScene} />
        <div className="quizSound__content">
          <section className="quizSound__core" id="quiz-core">
            <div className="quizSound__header">
              <div className="quizSound__question" id="quiz-question"></div>
              <div className="quizSound__answers" id="quiz-answers"></div>
            </div>
            <div className="quizSound__final" id="quiz-final"></div>
            <div className="quizSound__footer">
              <span className="quizSound__progress-indicator"></span>
              <button
                className="quizSound__next-btn"
                id="quiz-next-btn"
                disabled
              >
                Далее
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export { QuizSound };
