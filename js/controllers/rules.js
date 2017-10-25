import screens from '../data/screens';
import gameData from '../data/game-data';

const controllers = () => {
  const switchGoButton = (e) => {
    screens.rules.element.querySelector(`.rules__button`).disabled = e.currentTarget.value === ``;
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    gameData.userName = screens.rules.element.querySelector(`.rules__input`).value;
    gameData.currentQuestionId = 0;
    screens[`question-0`].show();
  };

  screens.rules.element.querySelector(`.rules__input`).addEventListener(`input`, switchGoButton, false);
  screens.rules.element.querySelector(`.rules__form`).addEventListener(`submit`, onFormSubmit, false);
  screens.rules.element.querySelector(`.back`).addEventListener(`click`, () => screens.greeting.show(), false);
};

export default controllers;
