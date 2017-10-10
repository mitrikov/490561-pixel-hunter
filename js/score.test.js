import assert from 'assert';
import Answer from './answer';
import countTotalScore from './score';


describe(`Функция countTotalScore()`, () => {
  it(`Возвращает -1 когда число ответов <10`, () => {
    assert.equal(countTotalScore([Answer.CORRECT, Answer.SLOW]), -1);
    assert.equal(countTotalScore([Answer.SLOW, Answer.SLOW, Answer.SLOW, Answer.SLOW, Answer.SLOW, Answer.SLOW, Answer.SLOW, Answer.SLOW, Answer.SLOW]), -1);
    assert.notEqual(countTotalScore([Answer.SLOW, Answer.SLOW, Answer.SLOW, Answer.SLOW, Answer.SLOW, Answer.SLOW, Answer.SLOW, Answer.SLOW, Answer.SLOW, Answer.SLOW]), -1);
  });

  it(`Возвращает 1150, если игрок ответил на все вопросы и не быстро и не медленно и у него остались все жизни`, () => {
    assert.equal(countTotalScore([Answer.CORRECT, Answer.CORRECT, Answer.CORRECT, Answer.CORRECT, Answer.CORRECT, Answer.CORRECT, Answer.CORRECT, Answer.CORRECT, Answer.CORRECT, Answer.CORRECT], 3), 1150);
  });

  it(`Возвращает 450, если игрок отвечал медленно и 2 раза ошибся`, () => {
    assert.equal(countTotalScore([Answer.SLOW, Answer.SLOW, Answer.SLOW, Answer.SLOW, Answer.SLOW, Answer.SLOW, Answer.SLOW, Answer.SLOW, Answer.WRONG, Answer.WRONG], 1), 450);
  });

  it(`Возвращает -1, если у игрока закончились жизни и он проиграл`, () => {
    assert.equal(countTotalScore([Answer.CORRECT, Answer.WRONG, Answer.CORRECT, Answer.WRONG, Answer.CORRECT, Answer.WRONG], 0), -1);
  });
});

