import images from '../data/images';
/*
*   Question - класс описывающий структуру игрового вопроса
*   - id - идентификатор
*   - type - тип игры, для которой будет использоваться вопрос. Если не передается параметром, то задается случайно
*   - images - массив изображений, используемых в вопросе. Генерируются случайным образом из модуля images
* */

const GAME_TYPES = 3;

export default class Question {
  constructor(questionId, questionType) {
    this.id = questionId;
    this.type = questionType ? questionType : Math.round(Math.random() * (GAME_TYPES - 1));
    switch (this.type) {
      case 0 :
        this.images = this.shuffleImages([images.randomPainting, images.randomPhoto]);
        break;
      case 1 :
        this.images = [images.randomImage];
        break;
      case 2 :
        this.images = this.shuffleImages([images.randomPainting, images.randomPhoto, images.randomPhoto]);
        break;
    }
  }

  shuffleImages(array) {
    return array.map((a) => ({sort: Math.random(), value: a}))
        .sort((a, b) => a.sort > b.sort ? 1 : -1)
        .map((a) => a.value);
  }
}
