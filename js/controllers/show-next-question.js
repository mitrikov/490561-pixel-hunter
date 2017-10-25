import screens from '../data/screens';
import GameTemplate from '../classes/game-template';
import gameData from '../data/game-data';
import Answer from '../data/answer';

const showNextQuestion = () => {
  let template;
  if (gameData.currentQuestionId < Answer.MAX_COUNT - 1 && !gameData.isGameFailed) {
    gameData.currentQuestionId++;
    template = new GameTemplate(gameData.questions[gameData.currentQuestionId]);
  } else {
    template = screens.stats;
  }
  template.show();
};

export default showNextQuestion;
