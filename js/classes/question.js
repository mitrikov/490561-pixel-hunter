import images from '../data/images';
import games from '../data/games';

export default class Question {
  constructor(questionId, questionType) {
    this.id = questionId;
    this.type = questionType ? questionType : Math.round(Math.random() * (games.length - 1));
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
