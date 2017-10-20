import Screen from '../screen';

const controllers = (greeting) => {
  greeting.element.querySelector(`.greeting__continue`).addEventListener(`click`, () => Screen.rules.show(), false);
};

export default controllers;
