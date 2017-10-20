const game3 = (question) => {
  return `<form class="game__content  game__content--triple">
      <div class="game__option">
        <img src="${question.images[0]}" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option  game__option--selected">
        <img src="${question.images[1]}" width="304" height="455">
      </div>
      <div class="game__option">
        <img src="${question.images[2]}" width="304" height="455">
      </div>
    </form>`;
};

export default game3;
