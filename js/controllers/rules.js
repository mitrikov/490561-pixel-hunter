import GameData from '../data/game-data';
import screens from '../data/screens';

const controller = () => {
  const form = screens.rules.element.querySelector(`.rules__form`);
  const input = screens.rules.element.querySelector(`.rules__input`);
  const backButton = screens.rules.element.querySelector(`.back`);

  const switchGoButton = (e) => {
    screens.rules.element.querySelector(`.rules__button`).disabled = e.currentTarget.value === ``;
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    input.removeEventListener(`input`, switchGoButton, false);
    form.removeEventListener(`submit`, onFormSubmit, false);
    backButton.removeEventListener(`click`, () => screens.greeting.show(), false);
    GameData.userName = input.value.trim();
    screens.game.show();
    GameData.downloadStats();
  };

  input.addEventListener(`input`, switchGoButton, false);
  form.addEventListener(`submit`, onFormSubmit, false);
  backButton.addEventListener(`click`, () => screens.greeting.show(), false);
};

export default controller;
