const activeScreen = document.querySelector(`main.central`);

class Screen {
  constructor(htmlCode) {
    const screenElement = document.createElement(`div`);
    screenElement.innerHTML = htmlCode;
    this.element = screenElement;
  }

  show() {
    activeScreen.innerHTML = ``;
    activeScreen.appendChild(this.element);
  }

  setController(callback) {
    callback.call();
  }
}

export default Screen;

