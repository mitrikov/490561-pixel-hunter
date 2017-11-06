import GameData from '../data/game-data';
import screens from '../data/screens';

const controller = () => {
  const backButton = screens.stats.element.querySelector(`.back`);

  const onBackButtonClick = () => {
    screens.greeting.show();
    GameData.resetCurrentState();
    GameData.previousStats = false;
    backButton.removeEventListener(`click`, onBackButtonClick, false);
  };

  backButton.addEventListener(`click`, onBackButtonClick, false);
};
export default controller;
