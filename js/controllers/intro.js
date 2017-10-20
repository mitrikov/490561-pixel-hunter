import Screen from '../screen';

const controllers = (intro) => {
  intro.element.querySelector(`.intro__asterisk`).addEventListener(`click`, () => Screen.greeting.show(), false);
};
export default controllers;
