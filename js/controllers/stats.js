import GameData from '../data/game-data';
import screens from '../data/screens';

const controller = () => {
  const onBackButtonClick = () => {
    screens.greeting.show();
    GameData.resetCurrentState();
    screens.stats.element.querySelector(`.back`).removeEventListener(`click`, onBackButtonClick, false);
  };
  screens.stats.element.querySelector(`.back`).addEventListener(`click`, onBackButtonClick, false);
};
export default controller;
