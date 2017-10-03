import getElementFromTemplate from './template.js';
import greeting from './greeting.js';
import showScreen from './screen.js';

const intro = getElementFromTemplate(`<div id="main" class="central__content">
    <div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
    </div>
  </div>
  <footer class="footer">
    <a href="https://htmlacademy.ru" class="social-link social-link--academy">HTML Academy</a>
    <span class="footer__made-in">Сделано в <a href="https://htmlacademy.ru" class="footer__link">HTML Academy</a> &copy; 2016</span>
    <div class="footer__social-links">
      <a href="https://twitter.com/htmlacademy_ru" class="social-link  social-link--tw">Твиттер</a>
      <a href="https://www.instagram.com/htmlacademy/" class="social-link  social-link--ins">Инстаграм</a>
      <a href="https://www.facebook.com/htmlacademy" class="social-link  social-link--fb">Фэйсбук</a>
      <a href="https://vk.com/htmlacademy" class="social-link  social-link--vk">Вконтакте</a>
    </div>
  </footer>`);

intro.querySelector(`.intro__asterisk`).addEventListener(`click`, showScreen.bind(null, greeting), false);

export default intro;

/* Альтернативный вариант - передавать объектом отдельно код и обработчики событий
const setEventListeners = (page) => {
  intro.querySelector(`.intro__asterisk`).addEventListener(`click`, showScreen.bind(null, page), false);
}

const setEventListeners = (page) => {
  intro.querySelector(`.intro__asterisk`).addEventListener(`click`, showScreen.bind(null, page), false);
};

export {intro, setEventListeners};
}; */