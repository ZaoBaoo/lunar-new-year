export default class Answer {
  constructor(answer) {
    this.answer = answer;
  }

  render(index) {
    return `
            <label class="quizSound__answer">
                <img class="${this.answer.icon ? " quizSound__icon" : "quizSound__icon_off"}" src="${this.answer.icon || ""}" alt="">
                    <div class="quizSound__wrapper">
                        <input name="${index}" type="radio" value="${this.answer.value}"/>
                        <div class="quizSound__box"></div>
                        <span class="quizSound__text">${this.answer.value}</span>
                    </div>
            </label>
        `;
  }
}
