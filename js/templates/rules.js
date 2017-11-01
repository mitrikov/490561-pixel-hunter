import Template from '../classes/template';
import components from '../data/components';
import controller from '../controllers/rules';
import GameData from '../data/game-data';

const template = new Template(() => {
  const userName = GameData.userName;
  const disabled = userName ? `` : `disabled`;

  return `<header class="header">
    ${components.backButton}
  </header>
  <div class="rules">
    <h1 class="rules__title">Правила</h1>
    <p class="rules__description">Угадай 10 раз для каждого изображения фото <img
      src="img/photo_icon.png" width="16" height="16"> или рисунок <img
      src="img/paint_icon.png" width="16" height="16" alt="">.<br>
      Фотографиями или рисунками могут быть оба изображения.<br>
      На каждую попытку отводится 30 секунд.<br>
      Ошибиться можно не более 3 раз.<br>
      <br>
      Готовы?
    </p>
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="Ваше Имя" value="${userName}">
      <button class="rules__button  continue" type="submit" ${disabled}>Go!</button>
    </form>
  </div>
  ${components.footer}`;
});

template.id = `rules`;
template.controllers = controller;

export default template;
