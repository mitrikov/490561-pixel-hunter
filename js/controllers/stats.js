import screens from '../data/screens';

const controllers = () => {
  screens.stats.element.querySelector(`.back`).addEventListener(`click`, () => screens.greeting.show(), false);
};
export default controllers;
