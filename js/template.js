const activeScreen = document.querySelector(`main.central`);

export default class Template {
  constructor(code) {
    this.element = document.createElement(`div`);
    this.element.innerHTML = code;
  }

  show() {
    activeScreen.innerHTML = ``;
    activeScreen.appendChild(this.element);
  }
}
