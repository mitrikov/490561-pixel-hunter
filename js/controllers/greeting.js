import Screen from '../load-modules';

const setControllers = (greeting) => {
  greeting.element.querySelector(`.greeting__continue`).addEventListener(`click`, () => Screen.rules.show(), false);
};

export default setControllers;
