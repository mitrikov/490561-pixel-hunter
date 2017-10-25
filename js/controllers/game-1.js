import screens from '../data/screens';
import Answer from '../data/answer';
import gameData from '../data/game-data';

const game1Controllers = () => {
  const form = screens.game.element.querySelector(`.game__content`);
  const radioBoxes = form.querySelectorAll(`input[type=radio]`);

  const checkAnswer = () => {
    const condition = (radioBoxes[0].checked && gameData.currentQuestion.images[0].type === `photo` || radioBoxes[1].checked && gameData.currentQuestion.images[0].type === `paint`) && (radioBoxes[2].checked && gameData.currentQuestion.images[1].type === `photo` || radioBoxes[3].checked && gameData.currentQuestion.images[1].type === `paint`);
    gameData.answer = condition ? Answer.CORRECT : Answer.WRONG;
  };

  const handler = () => {
    if ((radioBoxes[0].checked || radioBoxes[1].checked) && (radioBoxes[2].checked || radioBoxes[3].checked)) {
      checkAnswer();
      screens.game.show();
    }
  };

  form.addEventListener(`change`, handler, false);
  screens.game.element.querySelector(`.back`).addEventListener(`click`, () => screens.greeting.show(), false);
};

export default game1Controllers;
