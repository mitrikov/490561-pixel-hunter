export default class Timer {
  constructor(time) {
    this._value = time;
  }

  getValue() {
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
}
