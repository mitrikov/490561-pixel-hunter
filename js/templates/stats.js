import Template from '../classes/template';
import Component from '../data/components';
import controller from '../controllers/stats';
import GameData from '../data/game-data';
import Answer from '../data/answer';

const template = new Template(() => {
  let result;
  let totalScore;
  let speedBonus = ``;
  let speedBonusCount = 0;
  let liveBonus = 0;
  let liveBonusCount = GameData.lives;
  let slowPenalty = ``;
  let slowPenaltyCount = 0;

  if (GameData.isGameFailed) {
    totalScore = result = `FAIL`;
  } else {
    totalScore = GameData.totalScore;
    result = `Победа!`;
  }

  for (let i of GameData.answers) {
    if (i === Answer.FAST) {
      speedBonusCount++;
    }

    if (i === Answer.SLOW) {
      slowPenaltyCount++;
    }
  }

  fetch(`https://es.dump.academy/pixel-hunter/stats/:vokirtim`, {
    method: `POST`,
    body: JSON.stringify({
      userName: GameData.userName,
      answers: GameData.answers,
      lives: GameData.lives
    }),
    headers: {
      'Content-Type': `application/json`
    }
  });

  if (speedBonusCount > 0) {
    speedBonus = `<tr>
        <td></td>
        <td class="result__extra">Бонус за скорость:</td>
        <td class="result__extra">${speedBonusCount}&nbsp;<span class="stats__result stats__result--fast"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${speedBonusCount * 50}</td>
      </tr>`;
  }

  if (liveBonusCount > 0) {
    liveBonus = `<tr>
        <td></td>
        <td class="result__extra">Бонус за жизни:</td>
        <td class="result__extra">${liveBonusCount}&nbsp;<span class="stats__result stats__result--alive"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${liveBonusCount * 50}</td>
      </tr>`;
  }

  if (slowPenaltyCount > 0) {
    slowPenalty = `<tr>
        <td></td>
        <td class="result__extra">Штраф за медлительность:</td>
        <td class="result__extra">${slowPenaltyCount}&nbsp;<span class="stats__result stats__result--slow"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">-${slowPenaltyCount * 50}</td>
      </tr>`;
  }

  return `<header class="header">
    ${Component.backButton}
  </header>
  <div class="result">
    <h1>${result}</h1>
    <table class="result__table">
      <tr>
        <td class="result__number">1.</td>
        <td colspan="2">
          ${Component.gameStats(GameData.answers)}
        </td>
        <td class="result__points">×&nbsp;100</td>
        <td class="result__total">${totalScore}</td>
      </tr>
      ${speedBonus}
      ${liveBonus}
      ${slowPenalty}
      <tr>
        <td colspan="5" class="result__total  result__total--final">${totalScore}</td>
      </tr>
    </table>
  </div>
  ${Component.footer}`;
});

template.id = `stats`;
template.controllers = controller;

export default template;
