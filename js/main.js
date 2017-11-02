import modules from './load-modules';
import gameData from './data/game-data';

gameData.initQuestions();
modules.intro.show();

fetch(`https://es.dump.academy/pixel-hunter/stats/:vokirtim`)
    .then((result) => {
      // if (result.headers.get(`content-type`) &&
      //   result.headers.get(`content-type`).toLowerCase().indexOf("application/json") >= 0) {
      return result.json();
      // } else {
      // throw new TypeError();
      // }
    }).then((result) => console.log(result));

