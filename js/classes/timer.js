const Time = {
  BEGIN: 30,
  FAST: 20,
  SLOW: 10
};

export default class Timer {
  constructor(time) {
    this._value = time ? time : Time.BEGIN;
    this._state = `fast`;
  }

  get value() {
    return this._value;
  }

  get state() {
    return this._state;
  }

  isEnded() {
    return this._value <= 0;
  }

  tick() {
    if (!this.isEnded()) {
      --this._value;
      if (this.value >= Time.FAST) {
        this._state = `FAST`;
      } else if (this.value >= Time.SLOW) {
        this._state = `CORRECT`;
      } else {
        this._state = `SLOW`;
      }
    }
  }

  reset() {
    this._value = Time.BEGIN;
    this._state = `fast`;
  }
}
