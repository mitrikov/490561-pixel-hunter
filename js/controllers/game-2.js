import screens from '../data/screens';
import Answer from '../data/answer';
import GameData from '../data/game-data';

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
    GameData.answer = isAnswerCorrect() ? Answer[GameData.currentAnswerState] : Answer.WRONG;
    screens.game.show();
  };

  const onBackButtonClick = () => { // Вынесу в отдельный модуль
    GameData.resetCurrentState();
    screens.greeting.show();
  };

  screens.game.element.querySelector(`.game__content`).addEventListener(`change`, onAnswer, false);
  screens.game.element.querySelector(`.back`).addEventListener(`click`, onBackButtonClick, false);
};

export default game2Controller;
