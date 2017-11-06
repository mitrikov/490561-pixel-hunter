import assert from 'assert';
import Timer from './timer';


describe(`Объект Timer`, () => {
  it(`Метод tick уменьшает время на 1 единицу`, () => {
    const timer = new Timer(30);
    timer.tick();
    assert.equal(timer.value, 29);
  });

  it(`Метод tick при последовательном вызове 5 раз уменьшает время на 5 единиц`, () => {
    const timer = new Timer(30);
    timer.tick();
    timer.tick();
    timer.tick();
    timer.tick();
    timer.tick();
    assert.equal(timer.value, 25);
  });

  it(`Таймер сообщает о том, что он закончен`, () => {
    const timer = new Timer(1);
    timer.tick();
    assert(timer.isEnded());
  });

  it(`Таймер прекращает отсчёт по достижению нуля`, () => {
    const timer = new Timer(1);
    timer.tick();
    assert.equal(timer.value, 0);
  });
});
