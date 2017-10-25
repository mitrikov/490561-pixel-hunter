import screens from '../data/screens';
import Answer from '../data/answer';
import gameData from '../data/game-data';
import showNextQuestion from './show-next-question';

const game1Controllers = (gameTemplate) => {
  const form = gameTemplate.element.querySelector(`.game__content`);
  const radioBoxes = form.querySelectorAll(`input[type=radio]`);

  const checkAnswer = () => {
    const condition = (radioBoxes[0].checked && gameTemplate.question.images[0].type === `photo` || radioBoxes[1].checked && gameTemplate.question.images[0].type === `paint`) && (radioBoxes[2].checked && gameTemplate.question.images[1].type === `photo` || radioBoxes[3].checked && gameTemplate.question.images[1].type === `paint`);
    gameData.answer = condition ? Answer.CORRECT : Answer.WRONG;
  };

  const handler = () => {
    if ((radioBoxes[0].checked || radioBoxes[1].checked) && (radioBoxes[2].checked || radioBoxes[3].checked)) {
      checkAnswer();
      showNextQuestion();
    }
  };

  form.addEventListener(`change`, handler, false);
  gameTemplate.element.querySelector(`.back`).addEventListener(`click`, () => screens.greeting.show(), false);
};

export default game1Controllers;
