import Screen from '../load-modules';

const setControllers = (stats) => {
  stats.element.querySelector(`.back`).addEventListener(`click`, () => Screen.greeting.show(), false);
};
export default setControllers;
