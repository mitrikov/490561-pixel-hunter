import Template from '../classes/template';
import Component from '../data/components';
import controller from '../controllers/stats';
import GameData from '../data/game-data';

const template = new Template(() => {
  let result;
  let totalScore;
  let speedBonus = ``;
  let liveBonus = ``;
  let slowPenalty = ``;

  if (GameData.isGameFailed) {
    totalScore = result = `FAIL`;
  } else {
    totalScore = GameData.totalScore;
    result = `Победа!`;
  }

  if (GameData.speedBonusCount > 0) {
    speedBonus = `<tr>
        <td></td>
        <td class="result__extra">Бонус за скорость:</td>
        <td class="result__extra">${GameData.speedBonusCount}&nbsp;<span class="stats__result stats__result--fast"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${GameData.speedBonusCount * 50}</td>
      </tr>`;
  }

  if (GameData.lives > 0) {
    liveBonus = `<tr>
        <td></td>
        <td class="result__extra">Бонус за жизни:</td>
        <td class="result__extra">${GameData.lives}&nbsp;<span class="stats__result stats__result--alive"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${GameData.lives * 50}</td>
      </tr>`;
  }

  if (GameData.slowPenaltyCount > 0) {
    slowPenalty = `<tr>
        <td></td>
        <td class="result__extra">Штраф за медлительность:</td>
        <td class="result__extra">${GameData.slowPenaltyCount}&nbsp;<span class="stats__result stats__result--slow"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">-${GameData.slowPenaltyCount * 50}</td>
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
