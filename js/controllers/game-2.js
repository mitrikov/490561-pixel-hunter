import screens from '../data/screens';
import Answer from '../data/answer';
import gameData from '../data/game-data';
import showNextQuestion from './show-next-question';

const game2Controllers = (gameTemplate) => {
  const form = gameTemplate.element.querySelector(`.game__option`);
  const radioBoxes = form.querySelectorAll(`input[type=radio]`);

  const checkAnswer = () => {
    const condition = radioBoxes[0].checked && gameTemplate.question.images[0].type === `photo` || radioBoxes[1].checked && gameTemplate.question.images[0].type === `paint`;
    gameData.answer = condition ? Answer.CORRECT : Answer.WRONG;
  };

  const handler = () => {
    checkAnswer();
    showNextQuestion();
  };

  gameTemplate.element.querySelector(`.game__content`).addEventListener(`change`, handler, false);
  gameTemplate.element.querySelector(`.back`).addEventListener(`click`, () => screens.greeting.show(), false);
};

export default game2Controllers;
