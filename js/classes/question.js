import images from '../data/images';
import GameType from '../data/game-type';
/*
*   Question - класс описывающий структуру игрового вопроса
*   - id - идентификатор
*   - type - тип игры, для которой будет использоваться вопрос. Если не передается параметром, то задается случайно
*   - images - массив изображений, используемых в вопросе. Генерируются случайным образом из модуля images
* */

export default class Question {
  constructor(questionId, questionType) {
    this.id = questionId;
    this.type = questionType ? questionType : Math.round(Math.random() * (GameType.MAX_COUNT - 1));
    switch (this.type) {
      case GameType.TWO_IMAGES :
        this.images = this.shuffleImages([images.randomPainting, images.randomPhoto]);
        break;
      case GameType.ONE_IMAGE :
        this.images = [images.randomImage];
        break;
      case GameType.THREE_IMAGES :
        this.isLookingForPainting = Math.round(Math.random());
        if (this.isLookingForPainting) {
          this.images = this.shuffleImages([images.randomPainting, images.randomPhoto, images.randomPhoto]);
        } else {
          this.images = this.shuffleImages([images.randomPhoto, images.randomPainting, images.randomPainting]);
        }
        break;
    }
  }

  shuffleImages(array) {
    return array.map((a) => ({sort: Math.random(), value: a}))
        .sort((a, b) => a.sort > b.sort ? 1 : -1)
        .map((a) => a.value);
  }
}
