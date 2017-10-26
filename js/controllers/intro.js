import screens from '../data/screens';

const controller = () => {
  screens.intro.element.querySelector(`.intro__asterisk`).addEventListener(`click`, () => screens.greeting.show(), false);
};

export default controller;
