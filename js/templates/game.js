import Component from '../data/components';
import gameData from '../data/game-data';
import GameTemplate from "../classes/game-template";

import game1Template from '../templates/game-1';
import game2Template from '../templates/game-2';
import game3Template from '../templates/game-3';
import game1Controllers from '../controllers/game-1';
import game2Controllers from '../controllers/game-2';
import game3Controllers from '../controllers/game-3';

const game = {
  templates: [game1Template, game2Template, game3Template],
  controllers: [game1Controllers, game2Controllers, game3Controllers]
};

const tasks = [`Угадайте для каждого изображения фото или рисунок?`, `Угадай, фото или рисунок?`, `Найдите рисунок среди изображений`];

const template = new GameTemplate(() => {
  return `${Component.gameHeader(gameData.lives)}
      <div class="game">
      <p class="game__task">${tasks[gameData.currentQuestion.type]}</p>
      ${game.templates[gameData.currentQuestion.type].call()}
      ${Component.gameStats(gameData.answers)}
      </div>
    ${Component.footer}`;
});

template.id = `game`;
template.controllers = () => {
  return game.controllers[gameData.currentQuestion.type].call();
};

export default template;
