import screens from '../data/screens';
import Answer from '../data/answer';
import gameData from '../data/game-data';

const game2Controller = () => {
  const form = screens.game.element.querySelector(`.game__option`);
  const radioBoxes = form.querySelectorAll(`input[type=radio]`);

  const checkAnswer = () => {
    const imgType = gameData.currentQuestion.images[0].type;
    const isPhotoCorrectlyChecked = radioBoxes[0].checked && imgType === `photo`;
    const isPaintCorrectlyChecked = radioBoxes[1].checked && imgType === `paint`;
    const isAnswerCorrect = isPhotoCorrectlyChecked || isPaintCorrectlyChecked;
    gameData.answer = isAnswerCorrect ? Answer.CORRECT : Answer.WRONG;
  };

  const onAnswer = () => {
    checkAnswer();
    screens.game.show();
  };

  screens.game.element.querySelector(`.game__content`).addEventListener(`change`, onAnswer, false);
  screens.game.element.querySelector(`.back`).addEventListener(`click`, () => screens.greeting.show(), false);
};

export default game2Controller;
