import Template from '../classes/template';
import Component from '../data/components';
import controllers from '../controllers/intro';

const template = new Template(`<div id="main" class="central__content">
    <div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
    </div>
  </div>
  ${Component.footer}`);

template.id = `intro`;
template.controllers = controllers;

export default template;
