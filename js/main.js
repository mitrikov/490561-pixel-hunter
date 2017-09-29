const templates = [`main`, `rules`, `greeting`, `game-1`, `game-2`, `game-3`, `stats`];
const activeScreen = document.getElementsByTagName(`main`)[0];
let screens = [];
let currentScreenNum = 0;

for (let i = 0; i < templates.length; i++) {
  screens[i] = document.getElementById(templates[i]);
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

const listenKeys = () => {
  if (event.altKey && event.keyCode === 39) {
    event.preventDefault();
    showNextScreen();
  }

  if (event.altKey && event.keyCode === 37) {
    event.preventDefault();
    showPreviousScreen();
  }
};

document.addEventListener(`keydown`, listenKeys, false);
document.getElementsByClassName(`intro__asterisk`)[0].addEventListener(`click`, showNextScreen, false);
