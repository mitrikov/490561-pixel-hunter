import Answer from './answer';

const countTotalScore = (answers, lives = Answer.MAX_LIVES) => {
  let totalScore;

  if (answers.length < Answer.MAX_COUNT) {
    totalScore = -1;
  } else {
    totalScore = answers.reduce((sum, current) => sum + current);
    totalScore += lives * 50;
  }
  return totalScore;
};

export default countTotalScore;
