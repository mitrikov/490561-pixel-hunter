import screens from '../data/screens';

const activeScreen = document.querySelector(`main.central`);

export default class Template {
  constructor(content) {
    this.element = document.createElement(`div`);
    this._content = content;
    // this.element.innerHTML = typeof this._content === `function` ? this._content.call() : content;
  }

  set id(id) {
    this._id = id;
    screens[id] = this;
  }

  set controllers(controllers) {
    this._controllers = controllers;
  }

  applyControllers() {
    this._controllers(this);
  }

  show() {
    activeScreen.innerHTML = ``;
    this.element.innerHTML = typeof this._content === `function` ? this._content.call() : this._content;
    activeScreen.appendChild(this.element);
    this.applyControllers();
  }
}
