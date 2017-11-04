import GameData from '../data/game-data';
import screens from '../data/screens';

const controller = () => {
  const switchGoButton = (e) => {
    screens.rules.element.querySelector(`.rules__button`).disabled = e.currentTarget.value === ``;
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    screens.rules.element.querySelector(`.rules__input`).removeEventListener(`input`, switchGoButton, false);
    screens.rules.element.querySelector(`.rules__form`).removeEventListener(`submit`, onFormSubmit, false);
    screens.rules.element.querySelector(`.back`).removeEventListener(`click`, () => screens.greeting.show(), false);
    GameData.userName = screens.rules.element.querySelector(`.rules__input`).value.trim();
    screens.game.show();
    GameData.downloadStats();
  };

  screens.rules.element.querySelector(`.rules__input`).addEventListener(`input`, switchGoButton, false);
  screens.rules.element.querySelector(`.rules__form`).addEventListener(`submit`, onFormSubmit, false);
  screens.rules.element.querySelector(`.back`).addEventListener(`click`, () => screens.greeting.show(), false);
};

export default controller;
