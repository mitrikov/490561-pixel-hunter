const DEFAULT_TIME = 25;

export default class Timer {
  constructor(time) {
    this._value = time ? time : DEFAULT_TIME;
  }

  get value() {
    return this._value;
  }

  isEnded() {
    return this._value <= 0;
  }

  tick() {
    if (!this.isEnded()) {
      --this._value;
    }
  }

  reset() {
    this._value = DEFAULT_TIME;
  }
}
