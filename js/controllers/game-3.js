import screens from '../data/screens';
import GameData from '../data/game-data';

const game3Controller = () => {
  const form = screens.game.element.querySelector(`.game__content`);
  const pictures = form.querySelectorAll(`.game__option`);

  const isAnswerCorrect = (e) => {
    const picIndex = [...pictures].indexOf(e.target);
    return GameData.currentQuestion.isLookingForPainting ? GameData.currentQuestion.images[picIndex].type === `paint` : GameData.currentQuestion.images[picIndex].type === `photo`;
  };

  const onAnswer = (e) => {
    screens.game.answer(isAnswerCorrect(e));
  };

  const onBackButtonClick = () => {
    let isUserWantToReturn = confirm(`Ваши текущие результаты будут потеряны. Вы действительно хотите вернуться в начало?`);
    if (isUserWantToReturn) {
      GameData.resetCurrentState();
      screens.game.resetTimer();
      screens.greeting.show();
    }
  };

  form.addEventListener(`click`, onAnswer, false);
  screens.game.element.querySelector(`.back`).addEventListener(`click`, onBackButtonClick, false);
};

export default game3Controller;
