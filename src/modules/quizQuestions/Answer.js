export default class Answer {
  constructor(answer) {
    this.answer = answer;
  }

  render(index) {
    return `
            <label class="quizQuestions__answer">
                <img class="${
                  this.answer.icon
                    ? " quizQuestions__icon"
                    : "quizQuestions__icon_off"
                }" src="${this.answer.icon || ""}" alt="">
                    <div class="quizQuestions__wrapper">
                        <input name="${index}" type="radio" value="${
      this.answer.value
    }"/>
                        <div class="quizQuestions__box"></div>
                        <span class="quizQuestions__text">${
                          this.answer.value
                        }</span>
                    </div>
            </label>
        `;
  }
}
