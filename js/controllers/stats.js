import Screen from '../screen';

const controllers = (stats) => {
  stats.element.querySelector(`.back`).addEventListener(`click`, () => Screen.greeting.show(), false);
};
export default controllers;
