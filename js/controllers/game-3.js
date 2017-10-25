import screens from '../data/screens';
import Answer from '../data/answer';
import gameData from '../data/game-data';
import showNextQuestion from './show-next-question';

const game3Controllers = (gameTemplate) => {
  const form = gameTemplate.element.querySelector(`.game__content`);
  const pictures = form.querySelectorAll(`.game__option`);

  const getImageIndex = (node) => {
    let i;
    for (i = 0; i < pictures.length; i++) {
      if (pictures[i].isSameNode(node)) {
        break;
      }
    }
    return i;
  };

  const checkAnswer = (e) => {
    const condition = gameTemplate.question.images[getImageIndex(e.target)].type === `paint`;
    gameData.answer = condition ? Answer.CORRECT : Answer.WRONG;
  };

  const handler = (e) => {
    checkAnswer(e);
    showNextQuestion();
  };

  gameTemplate.element.querySelector(`.game__content`).addEventListener(`click`, handler, false);
  gameTemplate.element.querySelector(`.back`).addEventListener(`click`, () => screens.greeting.show(), false);
};

export default game3Controllers;
