import Component from '../../data/components';

const HeartItem = {
  EMPTY: `<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`,
  FULL: `<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`
};

const gameHeader = (livesCount) => {
  let hearts = new Array(3 - livesCount).fill(HeartItem.EMPTY).join(``);
  hearts += new Array(livesCount).fill(HeartItem.FULL).join(``);

  return `<header class="header">
  ${Component.backButton}
  <h1 class="game__timer">NN</h1>
  <div class="game__lives">
    ${hearts}
  </div>
  </header>`;
};

export default gameHeader;
