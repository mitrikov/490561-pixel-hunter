import GameData from '../../data/game-data';
import screens from '../../data/screens';

const onBackButtonClick = () => {
  let isUserWantToReturn = confirm(`Ваши текущие результаты будут потеряны. Вы действительно хотите вернуться в начало?`);
  if (isUserWantToReturn) {
    GameData.resetCurrentState();
    screens.game.resetTimer();
    screens.greeting.show();
  }
};

export default onBackButtonClick;
