import screens from '../data/screens';

const controllers = () => {
  screens.intro.element.querySelector(`.intro__asterisk`).addEventListener(`click`, () => screens.greeting.show(), false);
};

export default controllers;
