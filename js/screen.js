import intro from './intro';
import greeting from './greeting';
import rules from './rules';
import game1 from './game1';
import game2 from './game2';
import game3 from './game3';
import stats from './stats';

const activeScreen = document.querySelector(`main.central`);

const Screen = {
  INTRO: intro,
  GREETING: greeting,
  RULES: rules,
  FIRST_GAME: game1,
  SECOND_GAME: game2,
  THIRD_GAME: game3,
  STATS: stats,
  show: (screen) => {
    activeScreen.innerHTML = ``;
    activeScreen.appendChild(screen);
  }
};

export default Screen;

