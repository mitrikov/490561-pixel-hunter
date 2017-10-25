import Template from '../classes/template';
import Component from '../data/components';
import gameData from '../data/game-data';
import gameTemplates from '../data/games';

const tasks = [`Угадайте для каждого изображения фото или рисунок?`, `Угадай, фото или рисунок?`, `Найдите рисунок среди изображений`];

const template = new Template(() => {
  const content = gameTemplates[gameData.currentQuestion.type].template(gameData.currentQuestion);
  return `${Component.gameHeader(gameData.lives)}
      <div class="game">
      <p class="game__task">${tasks[gameData.currentQuestion.type]}</p>
      ${content}
      ${Component.gameStats(gameData.answers)}
      </div>
    ${Component.footer}`;
});

template.id = `game`;

export default template;
