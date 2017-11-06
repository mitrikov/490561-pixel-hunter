import screens from '../data/screens';

const controller = () => {
  const greetingContinue = screens.greeting.element.querySelector(`.greeting__continue`);

  const onContinue = () => {
    greetingContinue.removeEventListener(`click`, onContinue, false);
    screens.rules.show();
  };

  greetingContinue.addEventListener(`click`, onContinue, false);
};

export default controller;
