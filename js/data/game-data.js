import Answer from './answer';
import Question from '../classes/question';

/*
* GameData*/

const GameData = {
  userName: ``,
  currentQuestionId: -1,
  lives: Answer.MAX_LIVES,
  questions: new Array(Answer.MAX_COUNT),
  answers: [],
  previousStats: false,

  countTotalScore(answers = this.answers) {
    let totalScore;
    if (answers.length < Answer.MAX_COUNT || this.isGameFailed) {
      totalScore = -1;
    } else {
      totalScore = answers.reduce((sum, current) => sum + current);
      totalScore += this.lives * 50;
    }
    return totalScore;
  },

  set answer(value) {
    if (value === Answer.WRONG) {
      this.lives--;
    }
    this.answers[this.currentQuestionId] = value;
  },

  get currentQuestion() {
    return this.questions[this.currentQuestionId];
  },

  get isGameFailed() {
    return this.lives < 0;
  },

  initQuestions() {
    for (let i = 0; i < Answer.MAX_COUNT; i++) {
      this.questions[i] = new Question(i);
    }
  },

  resetCurrentState() {
    this.currentQuestionId = -1;
    this.lives = Answer.MAX_LIVES;
    this.answers.fill(Answer.UNKNOWN);
  },

  downloadStats() {
    fetch(`https://es.dump.academy/pixel-hunter/stats/${this.userName}`)
        .then((result) => {
          if (result.headers.get(`Content-Type`) && result.headers.get(`Content-Type`).indexOf(`application/json`) >= 0) {
            return result.json();
          } else {
            return Promise.resolve(false);
          }
        }).then((res) => {
          this.previousStats = res ? res : false;
          console.log(this.previousStats);
        });
  },

  uploadStats() {
    fetch(`https://es.dump.academy/pixel-hunter/stats/${this.userName}`, {
      method: `POST`,
      body: JSON.stringify({
        answers: this.answers,
      }),
      headers: {
        'Content-Type': `application/json`
      }
    });
  }
};

export default GameData;
