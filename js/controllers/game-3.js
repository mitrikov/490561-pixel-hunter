import screens from '../data/screens';
import Answer from '../data/answer';
import GameData from '../data/game-data';

const game3Controller = () => {
  const form = screens.game.element.querySelector(`.game__content`);
  const pictures = form.querySelectorAll(`.game__option`);

  const checkAnswer = (e) => {
    const picIndex = [...pictures].indexOf(e.target);
    const isAnswerCorrect = GameData.currentQuestion.images[picIndex].type === `paint`;
    GameData.answer = isAnswerCorrect ? Answer.CORRECT : Answer.WRONG;
  };

  const onAnswer = (e) => {
    checkAnswer(e);
    screens.game.show();
  };

  form.addEventListener(`click`, onAnswer, false);
  screens.game.element.querySelector(`.back`).addEventListener(`click`, () => screens.greeting.show(), false);
};

export default game3Controller;
