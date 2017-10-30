import screens from '../data/screens';
import Answer from '../data/answer';
import gameData from '../data/game-data';

const game1Controller = () => {
  const form = screens.game.element.querySelector(`.game__content`);
  const radioBoxes = form.querySelectorAll(`input[type=radio]`);

  const checkAnswer = () => {
    const imgTypes = [gameData.currentQuestion.images[0].type, gameData.currentQuestion.images[1].type];
    const isFirstImageCorrectlyChecked = radioBoxes[0].checked && imgTypes[0] === `photo` || radioBoxes[1].checked && imgTypes[0] === `paint`;
    const isSecondImageCorrectlyChecked = radioBoxes[2].checked && imgTypes[1] === `photo` || radioBoxes[3].checked && imgTypes[1] === `paint`;
    const isAnswerCorrect = isFirstImageCorrectlyChecked && isSecondImageCorrectlyChecked;
    gameData.answer = isAnswerCorrect ? Answer.CORRECT : Answer.WRONG;
  };

  const onAnswer = () => {
    if ((radioBoxes[0].checked || radioBoxes[1].checked) && (radioBoxes[2].checked || radioBoxes[3].checked)) {
      checkAnswer();
      screens.game.show();
    }
  };

  form.addEventListener(`change`, onAnswer, false);
  screens.game.element.querySelector(`.back`).addEventListener(`click`, () => screens.greeting.show(), false);
};

export default game1Controller;
