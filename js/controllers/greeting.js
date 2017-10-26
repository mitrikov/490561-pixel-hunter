import screens from '../data/screens';

const controller = () => {
  screens.greeting.element.querySelector(`.greeting__continue`).addEventListener(`click`, () => screens.rules.show(), false);
};

export default controller;
