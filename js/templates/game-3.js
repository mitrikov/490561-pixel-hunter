import GameData from '../data/game-data';

const game3 = () => {
  return `<form class="game__content  game__content--triple">
      <div class="game__option">
        <img src="${GameData.currentQuestion.images[0].url}" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option  game__option--selected">
        <img src="${GameData.currentQuestion.images[1].url}" width="304" height="455">
      </div>
      <div class="game__option">
        <img src="${GameData.currentQuestion.images[2].url}" width="304" height="455">
      </div>
    </form>`;
};

export default game3;
