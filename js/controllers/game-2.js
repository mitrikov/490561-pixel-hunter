import screens from '../data/screens';
import Answer from '../data/answer';
import gameData from '../data/game-data';

const game2Controller = () => {
  const form = screens.game.element.querySelector(`.game__option`);
  const radioBoxes = form.querySelectorAll(`input[type=radio]`);

  const checkAnswer = () => {
    const condition = radioBoxes[0].checked && gameData.currentQuestion.images[0].type === `photo` || radioBoxes[1].checked && gameData.currentQuestion.images[0].type === `paint`;
    gameData.answer = condition ? Answer.CORRECT : Answer.WRONG;
  };

  const handler = () => {
    checkAnswer();
    screens.game.show();
  };

  screens.game.element.querySelector(`.game__content`).addEventListener(`change`, handler, false);
  screens.game.element.querySelector(`.back`).addEventListener(`click`, () => screens.greeting.show(), false);
};

export default game2Controller;
