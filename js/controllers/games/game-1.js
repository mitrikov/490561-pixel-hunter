import Screen from '../../screen';

const controllers = (game1, nextGame) => {
  const form = game1.element.querySelector(`.game__content`);
  const radioBoxes = form.querySelectorAll(`input[type=radio]`);

  const checkRadioBoxes = () => {
    if ((radioBoxes[0].checked || radioBoxes[1].checked) && (radioBoxes[2].checked || radioBoxes[3].checked)) {
      nextGame.show();
    }
  };

  form.addEventListener(`change`, checkRadioBoxes, false);
  game1.element.querySelector(`.back`).addEventListener(`click`, () => Screen.greeting.show(), false);
};

export default controllers;
