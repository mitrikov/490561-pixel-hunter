import GameData from './data/game-data';
import screens from './data/screens';
import images from './data/images';

GameData.initQuestions();
screens.intro.show();

images.loadLogo()
    .then(() => images.load(() => {
      screens.intro.element.classList.add(`fade-out`);
      setTimeout(() => {
        screens.greeting.element.classList.add(`fade-in`);
        screens.greeting.show();
        screens.intro.element.classList.remove(`fade-out`);
      }, 300);
    }));
