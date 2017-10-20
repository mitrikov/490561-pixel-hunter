import Screen from '../../screen';

const controllers = (game2, nextTemplate) => {
  game2.element.querySelector(`.game__content`).addEventListener(`change`, () => nextTemplate ? nextTemplate.show() : Screen.stats.show(), false);
  game2.element.querySelector(`.back`).addEventListener(`click`, () => Screen.greeting.show(), false);
};

export default controllers;
