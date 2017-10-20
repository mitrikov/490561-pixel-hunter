import Template from '../template';
import Component from './components/component';
// import Screen from '../screen';
import Answer from '../answer';
import gameData from '../game-data';
import images from '../images';
import gameTypes from './games/games';
import controllers from '../controllers/games/games';

const tasks = [`Угадайте для каждого изображения фото или рисунок?`, `Угадай, фото или рисунок?`, `Найдите рисунок среди изображений`];

gameData.lives = 3;
gameData.questions[0] = {
  type: `game-1`,
  images: [images.paintings[0], images.photos[1]],
  rightAnswers: [`paint`, `photo`]
};

gameData.questions[1] = {
  type: `game-3`,
  images: [images.paintings[2], images.photos[1], images.photos[0]],
  rightAnswers: [`paint`, `photo`, `photo`]
};

gameData.questions[2] = {
  type: `game-2`,
  images: [images.paintings[1]],
  rightAnswers: [`paint`]
};

gameData.answers = [Answer.CORRECT, Answer.WRONG];


const gameContent = gameTypes.game1(gameData.questions[0]);
const gameContent2 = gameTypes.game3(gameData.questions[1]);
const gameContent3 = gameTypes.game2(gameData.questions[2]);

let games = new Array(Answer.MAX_COUNT);

games[0] = new Template(`
  ${Component.gameHeader(gameData.lives)}
  <div class="game">
    <p class="game__task">${tasks[0]}</p>
    ${gameContent}
    ${Component.gameStats(gameData.answers)}
  </div>
  ${Component.footer}`);

games[1] = new Template(`
  ${Component.gameHeader(gameData.lives)}
  <div class="game">
    <p class="game__task">${tasks[2]}</p>
    ${gameContent2}
    ${Component.gameStats(gameData.answers)}
  </div>
  ${Component.footer}`);

games[2] = new Template(`
  ${Component.gameHeader(gameData.lives)}
  <div class="game">
    <p class="game__task">${tasks[2]}</p>
    ${gameContent3}
    ${Component.gameStats(gameData.answers)}
  </div>
  ${Component.footer}`);

games[0].setControllers(() => controllers.game1(games[0], games[1]));
games[1].setControllers(() => controllers.game3(games[1], games[2]));
games[2].setControllers(() => controllers.game2(games[2]));

export default games;


