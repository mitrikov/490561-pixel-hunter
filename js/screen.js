const activeScreen = document.querySelector(`main`);

const showScreen = (element) => {
  activeScreen.innerHTML = '';
  activeScreen.appendChild(element);
};

export default showScreen;

