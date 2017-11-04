import GameData from '../../data/game-data';
import screens from '../../data/screens';
import onBackButtonClick from './back-button';

const game2Controller = () => {
  const form = screens.game.element.querySelector(`.game__option`);
  const radioBoxes = form.querySelectorAll(`input[type=radio]`);

  const isAnswerCorrect = () => {
    const imgType = GameData.currentQuestion.images[0].type;
    const isPhotoCorrectlyChecked = radioBoxes[0].checked && imgType === `photo`;
    const isPaintCorrectlyChecked = radioBoxes[1].checked && imgType === `paint`;
    return isPhotoCorrectlyChecked || isPaintCorrectlyChecked;
  };

  const onAnswer = () => {
    screens.game.element.querySelector(`.game__content`).removeEventListener(`change`, onAnswer, false);
    screens.game.element.querySelector(`.back`).removeEventListener(`click`, onBackButtonClick, false);
    screens.game.answer(isAnswerCorrect());
  };

  screens.game.element.querySelector(`.game__content`).addEventListener(`change`, onAnswer, false);
  screens.game.element.querySelector(`.back`).addEventListener(`click`, onBackButtonClick, false);
};

export default game2Controller;
