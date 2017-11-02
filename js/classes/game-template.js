import Template from './template';
import screens from '../data/screens';
import GameData from '../data/game-data';
import Answer from '../data/answer';
import Timer from '../classes/timer';

const Time = {
  FAST: 20,
  SLOW: 10
};

/*
* GameTemplate - класс-синглтон, отвечает за показ игровых экранов
* - show() - переопределенный метод Template переключает текущий вопрос и перересовывает шаблон
* */

export default class GameTemplate extends Template {
  show() {
    if (GameData.currentQuestionId < Answer.MAX_COUNT - 1 && !GameData.isGameFailed) {
      GameData.currentQuestionId++;
      this.resetTimer();
      super.show();
      this.setTimer();
    } else {
      screens.stats.show();
      this.resetTimer();
    }
  }

  answer(isAnswerCorrect) {
    if (isAnswerCorrect) {
      if (this._timer.value >= Time.FAST) {
        GameData.answer = Answer.FAST;
      } else if (this._timer.value >= Time.SLOW) {
        GameData.answer = Answer.CORRECT;
      } else {
        GameData.answer = Answer.SLOW;
      }
    } else {
      GameData.answer = Answer.WRONG;
    }
    this.show();
  }

  setTimer() {
    this._timer = new Timer();
    this._timerElement = this.element.querySelector(`.game__timer`);
    this._timerElement.innerHTML = this._timer.value;
    this._timingFunction = setInterval(() => {
      this._timer.tick();
      this._timerElement.innerHTML = this._timer.value;
      if (this._timer.isEnded()) {
        GameData.answer = Answer.WRONG;
        this.show();
      }

      if (this._timer.value <= 5) {
        this._timerElement.classList.add(`game__timer--blink`);
      }
    }, 1000);
  }

  resetTimer() {
    if (this._timer) {
      this._timer.reset();
      clearInterval(this._timingFunction);
      this._timerElement.classList.remove(`game__timer--blink`);
    }
  }
}
