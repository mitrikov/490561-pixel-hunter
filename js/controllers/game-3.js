import screens from '../data/screens';
import Answer from '../data/answer';
import GameData from '../data/game-data';

const game3Controller = () => {
  const form = screens.game.element.querySelector(`.game__content`);
  const pictures = form.querySelectorAll(`.game__option`);

  const isAnswerCorrect = (e) => {
    const picIndex = [...pictures].indexOf(e.target);
    return GameData.currentQuestion.images[picIndex].type === `paint`;
  };

  const onAnswer = (e) => {
    GameData.answer = isAnswerCorrect(e) ? Answer[GameData.currentAnswerState] : Answer.WRONG;
    screens.game.show();
  };

  const onBackButtonClick = () => { // Вынесу в отдельный модуль
    GameData.resetCurrentState();
    screens.greeting.show();
  };

  form.addEventListener(`click`, onAnswer, false);
  screens.game.element.querySelector(`.back`).addEventListener(`click`, onBackButtonClick, false);
};

export default game3Controller;
