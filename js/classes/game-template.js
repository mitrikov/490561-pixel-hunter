import Component from '../data/components';
import Template from './template';
import games from '../data/games';
import gameData from '../data/game-data';

const tasks = [`Угадайте для каждого изображения фото или рисунок?`, `Угадай, фото или рисунок?`, `Найдите рисунок среди изображений`];

export default class GameTemplate extends Template {
  constructor(question) {
    const content = games[question.type].template(question);
    const template = `${Component.gameHeader(gameData.lives)}
      <div class="game">
      <p class="game__task">${tasks[question.type]}</p>
      ${content}
      ${Component.gameStats(gameData.answers)}
      </div>
    ${Component.footer}`;

    super(template);
    this._question = question;
    this._answer = false;
    this._controllers = games[question.type].controllers;
    this.id = `question-${question.id}`;
  }

  get question() {
    return this._question;
  }
}
