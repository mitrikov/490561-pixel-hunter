import Screen from '../screen';

const controllers = (rules) => {
  const switchGoButton = (e) => {
    rules.element.querySelector(`.rules__button`).disabled = e.currentTarget.value === ``;
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    Screen.games[0].show();
  };

  rules.element.querySelector(`.rules__input`).addEventListener(`input`, switchGoButton, false);
  rules.element.querySelector(`.rules__form`).addEventListener(`submit`, onFormSubmit, false);
  rules.element.querySelector(`.back`).addEventListener(`click`, () => Screen.greeting.show(), false);
};

export default controllers;
