import Answer from "../../data/answer";

const AnswerItem = {
  [Answer.CORRECT]: `<li class="stats__result stats__result--correct"></li>`,
  [Answer.FAST]: `<li class="stats__result stats__result--fast"></li>`,
  [Answer.SLOW]: `<li class="stats__result stats__result--slow"></li>`,
  [Answer.WRONG]: `<li class="stats__result stats__result--wrong"></li>`,
  [Answer.UNKNOWN]: `<li class="stats__result stats__result--unknown"></li>`
};

const gameStats = (answersArray) => {
  const currentAnswers = answersArray.slice();
  const unknownAnswers = new Array(Answer.MAX_COUNT - currentAnswers.length).fill(Answer.UNKNOWN);
  const answerList = currentAnswers.concat(unknownAnswers).map((answer) => AnswerItem[answer]);

  return `<div class="stats">
      <ul class="stats">
        ${answerList.join(``)}
      </ul>
    </div>`;
};

export default gameStats;
