import screens from '../data/screens';

const controllers = () => {
  screens.greeting.element.querySelector(`.greeting__continue`).addEventListener(`click`, () => screens.rules.show(), false);
};

export default controllers;
