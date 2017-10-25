import modules from './load-modules';
import gameData from './data/game-data';
import game from './data/games';
import GameTemplate from './classes/game-template';

import screens from "./data/screens";

let gameTemplates = new Array(10);

gameData.initQuestions();

gameTemplates[0] = new GameTemplate(gameData.questions[0]);
gameTemplates[0].controllers = game[gameData.questions[0].type].controllers;

modules.intro.show();

console.log(gameData);
console.log(screens);

