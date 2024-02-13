import { quizData } from "./quiz-data";
import "./index.scss";

// Classes
import Answer from "./Answer.js";
import Question from "./Question.js";
import Final from "./Final.js";
import { handleAudioInteraction } from "./handleAudioInteraction";

export default class Quiz {
  constructor({ type, callbackFinal }) {
    this.type = type;
    this.selectedAnswer = "";
    this.currentQuestion = 0; // текущий вопрос из массива
    this.userScore = 0; // очки пользователя
    this.data = quizData; // вся информация
    this.quizCore = document.querySelector("#quiz-core");
    this.progressIndicator = document.querySelector(
      ".quizQuestions__progress-indicator"
    );
    this.questionContainer = document.querySelector("#quiz-question");
    this.answersContainer = document.querySelector("#quiz-answers");
    this.nextButton = document.querySelector("#quiz-next-btn");
    this.quizFinalContainer = document.querySelector("#quiz-final");
    this.callbackFinal = callbackFinal;
  }

  init() {
    this.renderQuestion();
    this.setEventListeners();
  }

  updateProgressIndicator() {
    this.progressIndicator.innerHTML = `${this.currentQuestion + 1} из ${
      this.data.length
    }`;
  }

  renderQuestion() {
    const question = this.data[this.currentQuestion];
    this.questionContainer.innerHTML = `${new Question(
      question,
      this.type
    ).render()}`;
    this.renderAnswers(this.currentQuestion);
    if (this.type === "audio") {
      handleAudioInteraction();
    }
    this.updateProgressIndicator();
  }

  renderAnswers(index) {
    this.answersContainer.innerHTML = `${this.data[index].answers
      .map((answer) => new Answer(answer).render(index))
      .join("")}`;
  }

  checkAnswer() {
    const { correctAnswer } = this.data[this.currentQuestion];
    const isCorrect =
      this.selectedAnswer.toLowerCase() === correctAnswer.toLowerCase();
    this.data[this.currentQuestion].hasAnsweredCorrectly = isCorrect;
    if (!isCorrect) {
      this.userScore = this.userScore === 0 ? 0 : this.userScore - 1;
    } else {
      this.userScore += 1;
    }
  }

  initFinal() {
    if (this.userScore < this.data.length) {
      this.showRepeat();
      document
        .querySelector(".quizQuestions__restart-btn")
        .addEventListener("click", () => this.restart());
    } else {
      this.callbackFinal();
    }
  }

  showRepeat() {
    // Добавить скрытие
    document
      .querySelector(".quizQuestions__header")
      .classList.add("quizQuestions__header_hidden");
    document
      .querySelector(".quizQuestions__footer")
      .classList.add("quizQuestions__footer_hidden");
    document
      .querySelector(".quizQuestions__core")
      .classList.add("quizQuestions__core_center");
    document
      .querySelector(".quizQuestions__final")
      .classList.add("quizQuestions__final_show");
    // document.querySelector('.quiz').classList.add('quiz_center');

    this.quizFinalContainer.innerHTML = new Final(this.data).render();
  }

  reset() {
    this.currentQuestion = 0;
    this.userScore = 0;
  }

  restart() {
    this.reset();
    this.quizFinalContainer.innerHTML = "";
    document
      .querySelector(".quizQuestions__header")
      .classList.remove("quizQuestions__header_hidden");
    document
      .querySelector(".quizQuestions__footer")
      .classList.remove("quizQuestions__footer_hidden");
    document
      .querySelector(".quizQuestions__core")
      .classList.remove("quizQuestions__core_center");
    document
      .querySelector(".quizQuestions__final")
      .classList.remove("quizQuestions__final_show");
    // document.querySelector('.quiz').classList.remove('quiz_center');

    this.renderQuestion();
  }

  setEventListeners() {
    this.answersContainer.addEventListener("change", ({ target }) => {
      if (target.tagName === "INPUT") {
        this.selectedAnswer = target.value;
        this.nextButton.disabled = false;
      }
    });

    this.nextButton.addEventListener("click", () => {
      this.checkAnswer();
      this.currentQuestion += 1;
      if (this.currentQuestion < this.data.length) {
        this.renderQuestion();
        this.nextButton.disabled = true;
      } else {
        this.initFinal();
      }
    });
  }
}
