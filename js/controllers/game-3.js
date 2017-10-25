import screens from '../data/screens';
import Answer from '../data/answer';
import gameData from '../data/game-data';

const game3Controllers = () => {
  const form = screens.game.element.querySelector(`.game__content`);
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
    const condition = gameData.currentQuestion.images[getImageIndex(e.target)].type === `paint`;
    gameData.answer = condition ? Answer.CORRECT : Answer.WRONG;
  };

  const handler = (e) => {
    checkAnswer(e);
    screens.game.show();
  };

  form.addEventListener(`click`, handler, false);
  screens.game.element.querySelector(`.back`).addEventListener(`click`, () => screens.greeting.show(), false);
};

export default game3Controllers;
