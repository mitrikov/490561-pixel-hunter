import modules from './load-modules';
import gameData from './data/game-data';
import images from './data/images';

gameData.initQuestions();
modules.intro.show();


window.onload = () => {
  const loading = images.load();
  modules.intro.element.querySelector(`.intro__asterisk`).classList.add(`rotating`);
  loading.then(() => {
    modules.intro.element.classList.add(`fade-out`);
    setTimeout(() => {
      modules.greeting.element.classList.add(`fade-in`);
      modules.greeting.show();
      modules.intro.element.classList.remove(`fade-out`);
    }, 500);
  });
};
