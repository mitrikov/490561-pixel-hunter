const activeScreen = document.getElementsByTagName(`main`)[0];
const screens = [`greeting`, `rules`, `game-1`, `game-2`, `game-3`, `stats`].map((id) => document.getElementById(id));
let currentScreenNum = 0;

const ARROW_LEFT = 0x25;
const ARROW_RIGHT = 0x27;

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
  if (e.altKey && e.keyCode === ARROW_LEFT) {
    e.preventDefault();
    showPreviousScreen();
  }

  if (e.altKey && e.keyCode === ARROW_RIGHT) {
    e.preventDefault();
    showNextScreen();
  }
};

showScreen(0);
document.addEventListener(`keydown`, (e) => listenKeys(e), false);
