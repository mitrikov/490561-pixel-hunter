import assert from 'assert';
import Timer from './timer';


describe(`Объект Timer`, () => {
  it(`Метод tick уменьшает время на 1 единицу`, () => {
    let timer = new Timer(30);
    timer.tick();
    assert.equal(timer.getValue(), 29);
  });

  it(`Метод tick при последовательном вызове 5 раз уменьшает время на 5 единиц`, () => {
    let timer = new Timer(30);
    timer.tick();
    timer.tick();
    timer.tick();
    timer.tick();
    timer.tick();
    assert.equal(timer.getValue(), 25);
  });

  it(`Таймер сообщает о том, что он закончен`, () => {
    let timer = new Timer(1);
    timer.tick();
    assert(timer.isEnded());
  });
});
