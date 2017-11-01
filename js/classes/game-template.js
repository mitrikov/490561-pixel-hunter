import Template from './template';
import screens from '../data/screens';
import gameData from '../data/game-data';
import Answer from '../data/answer';
import Timer from '../classes/timer';

/*
* GameTemplate - класс-синглтон, отвечает за показ игровых экранов
* - show() - переопределенный метод Template переключает текущий вопрос и перересовывает шаблон
* */

export default class GameTemplate extends Template {
  show() {
    if (gameData.currentQuestionId < Answer.MAX_COUNT - 1 && !gameData.isGameFailed) {
      gameData.currentQuestionId++;
      this.resetTimer();
      super.show();
      this.setTimer();
    } else {
      screens.stats.show();
      this.resetTimer();
    }
  }

  setTimer() {
    this._timer = new Timer();
    this._timerElement = this.element.querySelector(`.game__timer`);
    this._timerElement.innerHTML = this._timer.value;
    this._updateTimer = setInterval(() => {
      this._timer.tick();
      gameData.currentAnswerState = this._timer.state;
      this._timerElement.innerHTML = this._timer.value;
      if (this._timer.isEnded()) {
        gameData.answer = Answer.WRONG;
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
      clearInterval(this._updateTimer);
      this._timerElement.classList.remove(`game__timer--blink`);
    }
  }
}
