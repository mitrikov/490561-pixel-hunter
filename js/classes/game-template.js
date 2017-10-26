import Template from './template';
import screens from '../data/screens';
import gameData from '../data/game-data';
import Answer from '../data/answer';

/*
* GameTemplate - класс-синглтон, отвечает за показ игровых экранов
* - show() - переопределенный метод Template переключает текущий вопрос и перересовывает шаблон
* */

export default class GameTemplate extends Template {
  show() {
    if (gameData.currentQuestionId < Answer.MAX_COUNT - 1 && !gameData.isGameFailed) {
      gameData.currentQuestionId++;
      super.show();
    } else {
      screens.stats.show();
    }
  }
}
