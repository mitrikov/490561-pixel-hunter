import Answer from './answer';
import Question from '../classes/question';

/*
* GameData*/

export default {
  userName: ``,
  currentQuestionId: -1,
  lives: Answer.MAX_LIVES,
  questions: new Array(Answer.MAX_COUNT),
  answers: [],

  // Для следующих значений думаю выделить отдельный объект result = {
  speedBonusCount: 0, // Пока обычные значения потом будут функции подсчета
  slowPenaltyCount: 0, // Пока обычные значения потом будут функции подсчета
  get totalScore() {
    if (this.answers.length < Answer.MAX_COUNT || this.isGameFailed) {
      this._totalScore = -1;
    } else {
      this._totalScore = this.answers.reduce((sum, current) => sum + current);
      this._totalScore += this.lives * 50;
    }
    return this._totalScore;
  },
  // }

  set answer(value) {
    if (value === Answer.WRONG) {
      this.lives--;
    }
    this.answers.push(value);
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
  }
};
