import game1Template from '../templates/game-1';
import game2Template from '../templates/game-2';
import game3Template from '../templates/game-3';
import game1Controllers from '../controllers/game-1';
import game2Controllers from '../controllers/game-2';
import game3Controllers from '../controllers/game-3';

export default [
  {template: game1Template, controllers: game1Controllers},
  {template: game2Template, controllers: game2Controllers},
  {template: game3Template, controllers: game3Controllers}
];
