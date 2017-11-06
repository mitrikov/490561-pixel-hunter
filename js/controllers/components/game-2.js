import GameData from '../../data/game-data';
import screens from '../../data/screens';
import confirmReturn from './confirm-return';

const game2Controller = () => {
  const form = screens.game.element.querySelector(`.game__option`);
  const radioBoxes = form.querySelectorAll(`input[type=radio]`);
  const backButton = screens.game.element.querySelector(`.back`);

  const isAnswerCorrect = () => {
    const imgType = GameData.currentQuestion.images[0].type;
    const isPhotoCorrectlyChecked = radioBoxes[0].checked && imgType === `photo`;
    const isPaintCorrectlyChecked = radioBoxes[1].checked && imgType === `paint`;
    return isPhotoCorrectlyChecked || isPaintCorrectlyChecked;
  };

  const onBackButtonClick = () => {
    if (confirmReturn()) {
      form.removeEventListener(`change`, onAnswer, false);
      backButton.removeEventListener(`click`, onBackButtonClick, false);
      GameData.resetCurrentState();
      screens.game.resetTimer();
      screens.greeting.show();
    }
  };

  const onAnswer = () => {
    form.removeEventListener(`change`, onAnswer, false);
    backButton.removeEventListener(`click`, onBackButtonClick, false);
    screens.game.answer(isAnswerCorrect());
  };

  form.addEventListener(`change`, onAnswer, false);
  backButton.addEventListener(`click`, onBackButtonClick, false);
};

export default game2Controller;
