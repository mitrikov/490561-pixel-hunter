import screens from '../data/screens';
import Answer from '../data/answer';
import GameData from '../data/game-data';

const game2Controller = () => {
  const form = screens.game.element.querySelector(`.game__option`);
  const radioBoxes = form.querySelectorAll(`input[type=radio]`);

  const pushAnswer = (isAnswerCorrect) => { // Вынесу в отдельный модуль
    if (isAnswerCorrect) {
      switch (GameData.currentAnswerState) {
        case `fast` :
          GameData.answer = Answer.FAST;
          break;
        case `slow` :
          GameData.answer = Answer.SLOW;
          break;
        case `normal` :
          GameData.answer = Answer.CORRECT;
          break;
      }
    } else {
      GameData.answer = Answer.WRONG;
    }
  };

  const isAnswerCorrect = () => {
    const imgType = GameData.currentQuestion.images[0].type;
    const isPhotoCorrectlyChecked = radioBoxes[0].checked && imgType === `photo`;
    const isPaintCorrectlyChecked = radioBoxes[1].checked && imgType === `paint`;
    return isPhotoCorrectlyChecked || isPaintCorrectlyChecked;
  };

  const onAnswer = () => {
    pushAnswer(isAnswerCorrect());
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
