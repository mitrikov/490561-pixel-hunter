import screens from '../data/screens';

const controller = () => {
  screens.stats.element.querySelector(`.back`).addEventListener(`click`, () => screens.greeting.show(), false);
};
export default controller;
