import assert from 'assert';
import Timer from './timer';


describe(`Объект Timer`, () => {
  it(`Метод tick уменьшает время на 1 единицу`, () => {
    let timer = new Timer(30);
    timer.tick();
    assert.equal(timer.value, 29);
  });

  it(`Метод tick при последовательном вызове 5 раз уменьшает время на 5 единиц`, () => {
    let timer = new Timer(30);
    timer.tick();
    timer.tick();
    timer.tick();
    timer.tick();
    timer.tick();
    assert.equal(timer.value, 25);
  });

  it(`Таймер сообщает о том, что он закончен`, () => {
    let timer = new Timer(1);
    timer.tick();
    assert(timer.isEnded());
  });

  it(`Таймер прекращает отсчёт по достижению нуля`, () => {
    let timer = new Timer(1);
    timer.tick();
    assert.equal(timer.value, 0);
  });

  it(`Если время меньше 20 секунд возвращает state - normal`, () => {
    let timer = new Timer(20);
    timer.tick();
    assert.equal(timer.state, `normal`);
  });

  it(`Если время меньше 10 секунд возвращает state - slow`, () => {
    let timer = new Timer(10);
    timer.tick();
    assert.equal(timer.state, `slow`);
  });
});
