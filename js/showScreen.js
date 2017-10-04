import intro from './intro';
import greeting from './greeting';
import rules from './rules';
import game1 from './game1';
import game2 from './game2';
import game3 from './game3';
import stats from './stats';

export const SCREEN_INTRO = intro;
export const SCREEN_GREETING = greeting;
export const SCREEN_RULES = rules;
export const SCREEN_FIRST_GAME = game1;
export const SCREEN_SECOND_GAME = game2;
export const SCREEN_THIRD_GAME = game3;
export const SCREEN_STATS = stats;

const activeScreen = document.querySelector(`main.central`);

const showScreen = (screen) => {
  activeScreen.innerHTML = ``;
  activeScreen.appendChild(screen);
};

export default showScreen;
