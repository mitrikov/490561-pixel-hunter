import screens from '../data/screens';

const controller = () => {
  const onContinue = () => {
    screens.greeting.element.querySelector(`.greeting__continue`).removeEventListener(`click`, onContinue, false);
    screens.rules.show();
  };

  screens.greeting.element.querySelector(`.greeting__continue`).addEventListener(`click`, onContinue, false);
};

export default controller;
