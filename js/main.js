import intro from './intro.js';
import showScreen from './screen.js';


showScreen(intro);

/* Альтернативный вариант - передавать объектом отдельно код и обработчики событий
import {intro, setEventListeners} from './intro.js';
import greeting from "./greeting";

showScreen(intro);
setEventListeners(greeting)
*/
