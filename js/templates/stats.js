import Template from '../classes/template';
import Component from '../data/components';
import controller from '../controllers/stats';
import GameData from '../data/game-data';
import Answer from '../data/answer';

const PREVIOUS_GAMES_COUNT = 3;

const getStatsRow = (number, answers) => {
  const wrongAnswersCount = answers.filter((element) => element === Answer.WRONG).length;

  let totalScore;
  let speedBonus = ``;
  let speedBonusCount = 0;
  let liveBonus = 0;
  let liveBonusCount = Answer.MAX_LIVES - wrongAnswersCount;
  let slowPenalty = ``;
  let slowPenaltyCount = 0;


  if (wrongAnswersCount >= Answer.MAX_LIVES + 1) {
    totalScore = `FAIL`;
  } else {
    totalScore = GameData.countTotalScore(answers);

    for (let i of answers) {
      if (i === Answer.FAST) {
        speedBonusCount++;
      }

      if (i === Answer.SLOW) {
        slowPenaltyCount++;
      }
    }
  }

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

  return `<tr>
  <td class="result__number">${number}.</td>
    <td colspan="2">
      ${Component.gameStats(answers)}
    </td>
    <td class="result__points">×&nbsp;100</td>
    <td class="result__total">${totalScore}</td>
  </tr>
  <tr>
  ${speedBonus}
  ${liveBonus}
  ${slowPenalty}
  </tr>`;
};

const template = new Template(() => {
  let result;
  let totalScore;
  let previousGames = [];

  const currentGame = getStatsRow(1, GameData.answers);

  GameData.uploadStats();

  if (GameData.previousStats) {
    for (let i = 0; i < PREVIOUS_GAMES_COUNT; i++) {
      const stats = GameData.previousStats.pop();
      if (stats) {
        previousGames.push(getStatsRow(i + 2, stats.answers));
      } else {
        break;
      }
    }
  }

  if (GameData.isGameFailed) {
    totalScore = result = `FAIL`;
  } else {
    totalScore = GameData.countTotalScore();
    result = `Победа!`;
  }

  return `<header class="header">
    ${Component.backButton}
  </header>
  <div class="result">
    <h1>${result}</h1>
    <table class="result__table">
     ${currentGame}
      <tr>
        <td colspan="5" class="result__total  result__total--final">${totalScore}</td>
      </tr>
      ${previousGames}
    </table>
  </div>
  ${Component.footer}`;
});

template.id = `stats`;
template.controllers = controller;

export default template;
