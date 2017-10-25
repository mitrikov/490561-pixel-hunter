import Answer from "../../data/answer";

const AnswerItem = {
  CORRECT: `<li class="stats__result stats__result--correct"></li>`,
  FAST: `<li class="stats__result stats__result--fast"></li>`,
  SLOW: `<li class="stats__result stats__result--slow"></li>`,
  WRONG: `<li class="stats__result stats__result--wrong"></li>`,
  UNKNOWN: `<li class="stats__result stats__result--unknown"></li>`
};

const gameStats = (answersArray) => {
  let answerList = ``;
  for (let i = 0; i < Answer.MAX_COUNT; i++) {
    switch (answersArray[i]) {
      case Answer.CORRECT : answerList += AnswerItem.CORRECT; break;
      case Answer.FAST : answerList += AnswerItem.FAST; break;
      case Answer.SLOW : answerList += AnswerItem.SLOW; break;
      case Answer.WRONG : answerList += AnswerItem.WRONG; break;
      default : answerList += AnswerItem.UNKNOWN; break;
    }
  }

  return `<div class="stats">
      <ul class="stats">
        ${answerList}
      </ul>
    </div>`;
};

export default gameStats;
