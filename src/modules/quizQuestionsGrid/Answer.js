export default class Answer {
  constructor(answer) {
    this.answer = answer;
  }

  render(index) {
    return `
            <label class="quizQuestionsGrid__answer">
                <img class="${
                  this.answer.icon
                    ? " quizQuestionsGrid__icon"
                    : "quizQuestionsGrid__icon_off"
                }" src="${this.answer.icon || ""}" alt="">
                    <div class="quizQuestionsGrid__wrapper">
                        <input name="${index}" type="radio" value="${
      this.answer.value
    }"/>
                        <div class="quizQuestionsGrid__box"></div>
                        <span class="quizQuestionsGrid__text">${
                          this.answer.value
                        }</span>
                    </div>
            </label>
        `;
  }
}
