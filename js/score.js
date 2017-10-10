import Answer from './answer';

const countTotalScore = (answers, lives = Answer.MAX_LIVES) => {
  let totalScore;

  if (answers.length < Answer.MAX_COUNT || lives <= 0) {
    totalScore = -1;
  } else {
    totalScore = answers.reduce((sum, current) => { // Сумма элементов массива ответов
      return sum + current;
    });
    totalScore += lives * 50;
  }
  return totalScore;
};

export default countTotalScore;
