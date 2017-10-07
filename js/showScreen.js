const activeScreen = document.querySelector(`main.central`);

const showScreen = (screen) => {
  activeScreen.innerHTML = ``;
  activeScreen.appendChild(screen);
};

export default showScreen;
