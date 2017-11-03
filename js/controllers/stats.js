import screens from '../data/screens';
import GameData from "../data/game-data";

const controller = () => {
  const onBackButtonClick = () => {
    screens.greeting.show();
    GameData.resetCurrentState();
  };
  screens.stats.element.querySelector(`.back`).addEventListener(`click`, onBackButtonClick, false);
};
export default controller;
