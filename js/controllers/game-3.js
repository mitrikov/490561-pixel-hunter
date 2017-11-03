import screens from '../data/screens';
import GameData from '../data/game-data';

const game3Controller = () => {
  const form = screens.game.element.querySelector(`.game__content`);
  const pictures = form.querySelectorAll(`.game__option`);

  const isAnswerCorrect = (e) => {
    const picIndex = [...pictures].indexOf(e.target);
    return GameData.currentQuestion.images[picIndex].type === `paint`;
  };

  const onAnswer = (e) => {
    screens.game.answer(isAnswerCorrect(e));
  };

  const onBackButtonClick = () => {
    GameData.resetCurrentState();
    screens.game.resetTimer();
    screens.greeting.show();
  };

  form.addEventListener(`click`, onAnswer, false);
  screens.game.element.querySelector(`.back`).addEventListener(`click`, onBackButtonClick, false);
};

export default game3Controller;
