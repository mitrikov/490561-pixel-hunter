export default {
  paintings: [
    // People
    `https://k42.kn3.net/CF42609C8.jpg`,

    // Animals
    `https://k42.kn3.net/D2F0370D6.jpg`,

    // Nature
    `https://k32.kn3.net/5C7060EC5.jpg`
  ],
  photos: [
    // People
    `http://i.imgur.com/1KegWPz.jpg`,

    // Animals
    `https://i.imgur.com/DiHM5Zb.jpg`,

    // Nature
    `http://i.imgur.com/DKR1HtB.jpg`
  ],

  get randomPainting() {
    let image = {};
    const randomIndex = Math.round(Math.random() * (this.photos.length - 1));
    image.url = this.paintings[randomIndex];
    image.type = `paint`;
    return image;
  },

  get randomPhoto() {
    let image = {};
    const randomIndex = Math.round(Math.random() * (this.photos.length - 1));
    image.url = this.photos[randomIndex];
    image.type = `photo`;
    return image;
  },

  get randomImage() {
    const paintingOrPhoto = Math.round(Math.random());
    return paintingOrPhoto ? this.randomPainting : this.randomPhoto;
  }
};
