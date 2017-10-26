import components from '../data/components';
import GameData from '../data/game-data';
import GameTemplate from "../classes/game-template";

import game1Template from '../templates/game-1';
import game2Template from '../templates/game-2';
import game3Template from '../templates/game-3';
import game1Controller from '../controllers/game-1';
import game2Controller from '../controllers/game-2';
import game3Controller from '../controllers/game-3';

const Game = {
  templates: [game1Template, game2Template, game3Template],
  controllers: [game1Controller, game2Controller, game3Controller]
};

const tasks = [`Угадайте для каждого изображения фото или рисунок?`, `Угадай, фото или рисунок?`, `Найдите рисунок среди изображений`];

const template = new GameTemplate(() => {
  return `${components.gameHeader(GameData.lives)}
      <div class="game">
      <p class="game__task">${tasks[GameData.currentQuestion.type]}</p>
      ${Game.templates[GameData.currentQuestion.type].call()}
      ${components.gameStats(GameData.answers)}
      </div>
    ${components.footer}`;
});

template.id = `game`;
template.controllers = () => {
  return Game.controllers[GameData.currentQuestion.type].call();
};

export default template;
