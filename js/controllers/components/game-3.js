import GameData from '../../data/game-data';
import screens from '../../data/screens';
import onBackButtonClick from './back-button';

const game3Controller = () => {
  const form = screens.game.element.querySelector(`.game__content`);
  const pictures = form.querySelectorAll(`.game__option`);

  const isAnswerCorrect = (e) => {
    const picIndex = [...pictures].indexOf(e.target);
    return GameData.currentQuestion.isLookingForPainting ? GameData.currentQuestion.images[picIndex].type === `paint` : GameData.currentQuestion.images[picIndex].type === `photo`;
  };

  const onAnswer = (e) => {
    form.removeEventListener(`click`, onAnswer, false);
    screens.game.element.querySelector(`.back`).removeEventListener(`click`, onBackButtonClick, false);
    screens.game.answer(isAnswerCorrect(e));
  };

  form.addEventListener(`click`, onAnswer, false);
  screens.game.element.querySelector(`.back`).addEventListener(`click`, onBackButtonClick, false);
};

export default game3Controller;
