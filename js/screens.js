import intro from './intro';
import greeting from './greeting';
import rules from './rules';
import game1 from './game1';
import game2 from './game2';
import game3 from './game3';
import stats from './stats';

const screens = {
  'intro': intro,
  'greeting': greeting,
  'rules': rules,
  'game1': game1,
  'game2': game2,
  'game3': game3,
  'stats': stats,
};

const showScreen = (screenName) => {
  activeScreen.innerHTML = ``;
  activeScreen.appendChild(screens[screenName]);
};


const activeScreen = document.querySelector(`main`);

export default showScreen;

