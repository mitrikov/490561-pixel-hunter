import Screen from '../../screen';

const controllers = (game3, nextTemplate) => {
  game3.element.querySelector(`.game__content`).addEventListener(`click`, () => nextTemplate.show(), false);
  game3.element.querySelector(`.back`).addEventListener(`click`, () => Screen.greeting.show(), false);
};

export default controllers;
