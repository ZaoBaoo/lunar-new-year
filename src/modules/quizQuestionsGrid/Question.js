export default class Question {
  constructor(question, type) {
    this.question = question;
    this.type = type;
  }

  render() {
    let content = `<h3 class="quizQuestionsGrid__title">${this.question.question}</h3>`;
    if (this.type === "audio") {
      content += this.renderAudio();
    } else if (this.type === "image") {
      content += this.renderImage();
    }

    return content;
  }

  renderAudio() {
    return `
            <div>
                <audio class="quizQuestionsGrid__audio" id="audio" src="${this.question.audio}"></audio>
                <button class="quizQuestionsGrid__play-btn">
                    <img class="quizQuestionsGrid__audio-wave" src="https://www.technodom.kz/under/birthday-23/assets/audio-inactive.svg"  alt="">
                </button>
            </div>`;
  }

  renderImage() {
    return `<img class="quizQuestionsGrid__image-question" src="${this.question.img}" alt="Картинка к вопросу" height="150"/>`;
  }
}
