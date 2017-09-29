const activeScreen = document.getElementsByTagName(`main`)[0];
const templates = [`greeting`, `rules`, `game-1`, `game-2`, `game-3`, `stats`];
let currentScreenNum = 0;

for (let value of templates) {
  screens.push(document.getElementById(value));
}

const showScreen = (number) => {
  activeScreen.innerHTML = screens[number].innerHTML;
  currentScreenNum = number;
};

const showNextScreen = () => {
  if (currentScreenNum < screens.length - 1) {
    currentScreenNum++;
    showScreen(currentScreenNum);
  }
};

const showPreviousScreen = () => {
  if (currentScreenNum > 0) {
    currentScreenNum--;
    showScreen(currentScreenNum);
  }
};

const listenKeys = (e) => {
  if (e.altKey && e.code === `ArrowRight`) {
    e.preventDefault();
    showNextScreen();
  }

  if (e.altKey && e.code === `ArrowLeft`) {
    e.preventDefault();
    showPreviousScreen();
  }
};

showScreen(0);
document.addEventListener(`keydown`, (e) => listenKeys(e), false);
