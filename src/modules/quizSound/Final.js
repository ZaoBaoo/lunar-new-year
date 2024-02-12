const QUIZ_TICK_ICON =
  "https://www.technodom.kz/under/birthday-23/assets/tick.svg";
const QUIZ_CROSS_ICON =
  "https://www.technodom.kz/under/birthday-23/assets/cross.svg";

export default class Final {
  constructor(questions) {
    this.questions = questions;
  }

  render() {
    return `
      <div class="quizSound__final-wrapper">
        <h3 class="quizSound__repeat-title">Упс, ты где-то ответил неверно</h3>
        <p class="quizSound__repeat-subtitle">Не отчаивайся и попробуй ещё раз!</p>
        <img class="quizSound__image-bars" src="https://www.technodom.kz/under/lunar-new-year/lunar-status-ops.png" alt="" width="170" height="170">
        <div class="quizSound__status-questions">
          ${this.questions
            .map(
              (question, index) => `
              <div class="quizSound__status-question ${question.hasAnsweredCorrectly ? "quizSound__status-question_correct" : "quizSound__status-question_uncorrect"}">
              <img width="20" height="20" src="${
                question.hasAnsweredCorrectly ? QUIZ_TICK_ICON : QUIZ_CROSS_ICON
              }" alt="">
              <span>${index + 1} вопрос</span>
              </div>
              `,
            )
            .join("")}
        </div>
      </div>
      <button class="quizSound__restart-btn">Пройти уровень заново</button>
    `;
  }
}
