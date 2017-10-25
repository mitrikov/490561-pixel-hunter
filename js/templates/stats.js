import Template from '../classes/template';
import Component from '../data/components';
import controllers from '../controllers/stats';
import gameData from '../data/game-data';

const template = new Template(() => {
  let result;
  let totalScore;
  let speedBonus = ``;
  let liveBonus = ``;
  let slowPenalty = ``;

  if (gameData.isGameFailed) {
    totalScore = result = `FAIL`;
  } else {
    totalScore = gameData.totalScore;
    result = `Победа!`;
  }

  if (gameData.speedBonusCount > 0) {
    speedBonus = `<tr>
        <td></td>
        <td class="result__extra">Бонус за скорость:</td>
        <td class="result__extra">${gameData.speedBonusCount}&nbsp;<span class="stats__result stats__result--fast"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${gameData.speedBonusCount * 50}</td>
      </tr>`;
  }

  if (gameData.lives > 0) {
    liveBonus = `<tr>
        <td></td>
        <td class="result__extra">Бонус за жизни:</td>
        <td class="result__extra">${gameData.lives}&nbsp;<span class="stats__result stats__result--alive"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${gameData.lives * 50}</td>
      </tr>`;
  }

  if (gameData.slowPenaltyCount > 0) {
    slowPenalty = `<tr>
        <td></td>
        <td class="result__extra">Штраф за медлительность:</td>
        <td class="result__extra">${gameData.slowPenaltyCount}&nbsp;<span class="stats__result stats__result--slow"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">-${gameData.slowPenaltyCount * 50}</td>
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
          ${Component.gameStats(gameData.answers)}
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
template.controllers = controllers;

export default template;
