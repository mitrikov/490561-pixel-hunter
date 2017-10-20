import Template from '../template';
import Component from './components/component';
import controllers from '../controllers/intro';
import screens from "../test";


const intro = new Template(`<div id="main" class="central__content">
    <div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
    </div>
  </div>
  ${Component.footer}`);

screens.intro = intro;

intro.setControllers(() => controllers(intro));

export default intro;
