const activeScreen = document.querySelector(`main.central`);

export default class Template {
  constructor(code, elementName = `div`) {
    this.element = document.createElement(elementName);
    this.element.innerHTML = code;
  }

  show() {
    activeScreen.innerHTML = ``;
    activeScreen.appendChild(this.element);
  }

  setControllers(callback) {
    callback();
  }
}
