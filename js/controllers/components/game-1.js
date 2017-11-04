import GameData from '../../data/game-data';
import screens from '../../data/screens';
import confirmReturn from './confirm-return';

const game1Controller = () => {
  const form = screens.game.element.querySelector(`.game__content`);
  const radioBoxes = form.querySelectorAll(`input[type=radio]`);

  const isAnswerCorrect = () => {
    const imgTypes = [GameData.currentQuestion.images[0].type, GameData.currentQuestion.images[1].type];
    const isFirstImageCorrectlyChecked = radioBoxes[0].checked && imgTypes[0] === `photo` || radioBoxes[1].checked && imgTypes[0] === `paint`;
    const isSecondImageCorrectlyChecked = radioBoxes[2].checked && imgTypes[1] === `photo` || radioBoxes[3].checked && imgTypes[1] === `paint`;
    return isFirstImageCorrectlyChecked && isSecondImageCorrectlyChecked;
  };

  const onAnswer = () => {
    if ((radioBoxes[0].checked || radioBoxes[1].checked) && (radioBoxes[2].checked || radioBoxes[3].checked)) {
      form.removeEventListener(`change`, onAnswer, false);
      screens.game.element.querySelector(`.back`).removeEventListener(`click`, onBackButtonClick, false);
      screens.game.answer(isAnswerCorrect());
    }
  };

  const onBackButtonClick = () => {
    if (confirmReturn()) {
      form.removeEventListener(`change`, onAnswer, false);
      screens.game.element.querySelector(`.back`).removeEventListener(`click`, onBackButtonClick, false);
      GameData.resetCurrentState();
      screens.game.resetTimer();
      screens.greeting.show();
    }
  };

  form.addEventListener(`change`, onAnswer, false);
  screens.game.element.querySelector(`.back`).addEventListener(`click`, onBackButtonClick, false);
};

export default game1Controller;
