export default {
  paintings: [
    // People
    `https://k42.kn3.net/CF42609C8.jpg`,
    `https://liketheseasonblog.files.wordpress.com/2011/11/robert-downey-jr-photo-realistic-portrait-digital-painting-by-sheridan-johns-copyright-sheridan-johns.jpg?w=600`,
    `https://designyoutrust.com/wp-content/uploads7/ANATERESAFERNANDEZ.jpg`,
    // Animals
    `https://k42.kn3.net/D2F0370D6.jpg`,

    // Nature
    `https://k32.kn3.net/5C7060EC5.jpg`,
    `http://animalnewyork.com/wp-content/uploads/queensborowalsh.jpg`,
    `http://d5wt70d4gnm1t.cloudfront.net/media/a-s/articles/1351-273930673654/richard-estes-at-mad-900x450-c.jpg`,
    `https://i.pinimg.com/736x/d3/a0/ca/d3a0cae0cd1e1dc2a30a196c4380c0d0--contemporary-style-contemporary-architecture.jpg`,
    `https://static.boredpanda.com/blog/wp-content/uuuploads/hyper-realistic-paintings/hyper-realistic-paintings-2.jpg`,
    `http://www.listupon.com/wp-content/uploads/2014/05/photorealism.jpg`,
    `http://viola.bz/wp-content/uploads/2012/09/Beautiful-photorealistic-painting-by-Yigal-Ozeri-Israel-14.jpg`,
    `http://1995-2015.undo.net/Pressrelease/foto/1304604831b.jpg`,
    `http://mymodernmet.com/wp/wp-content/uploads/archive/GGW9Ybls01wgf-tWxDf0_1082129930.jpeg`,
    `https://i.pinimg.com/736x/11/01/62/110162e68293f7d7f06f26fcd08759f6--landscape-oil-paintings-landscape-artists.jpg`,
    `http://newyorkhistoryblog.org/wp-content/uploads/2014/05/church-catskillcreek-1847-washingtonctymus.jpg`,
  ],
  photos: [
    // People
    `http://i.imgur.com/1KegWPz.jpg`,
    `http://a1.cdn.whatstrending.com/post_items/images/000/040/855/large/Captain_Ray_Lewis.jpg`,
    `http://a3.cdn.whatstrending.com/post_items/images/000/040/857/large/AuOSCfV.jpg`,

    // Animals
    `https://i.imgur.com/DiHM5Zb.jpg`,

    // Nature
    `http://i.imgur.com/DKR1HtB.jpg`,
    `https://petapixel.com/assets/uploads/2012/09/4.jpg`,
    `http://www.city-data.com/forum/attachments/photography/93538d1333829393-photographs-look-like-paintings-painting-photo-exposure-corrected.jpg`,
    `https://images.fineartamerica.com/images-medium-large-5/shattered-rainbow-matt-molloy.jpg`,
    `http://2.bp.blogspot.com/_Lt_y05LmQuU/TFNjxuzSg7I/AAAAAAAAA6c/fbecUH89Kr4/s1600/IMG_4120.JPG`,
    `https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2017/02/stormy-night-venice-1024x676.jpg`,
    `https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2017/02/ice-cave-1024x683.jpg`,
    `http://www.apogeephoto.com/wp-content/uploads/2016/july2011/Margo_photos/ZAP-188-092-048MasterMistyIslands.jpg`,
    `http://www.reposetherapy.com/wp-content/uploads/2017/05/water-mind.jpg`,

    // Food
    `http://l.rgbimg.com/cache1vIxWN/users/s/su/sundstrom/600/mif3Rrq.jpg`,
    `https://prods3.imgix.net/images/articles/2012_07/burgerblends-xl.jpg`
  ],

  used: [],

  get randomPainting() {
    const randomIndex = Math.round(Math.random() * (this.paintings.length - 1));
    const paintingUrl = this.paintings.splice(randomIndex, 1).toString();
    this.used.push(paintingUrl);
    return {
      url: paintingUrl,
      type: `paint`
    };
  },

  get randomPhoto() {
    const randomIndex = Math.round(Math.random() * (this.photos.length - 1));
    const photoUrl = this.photos.splice(randomIndex, 1).toString();
    this.used.push(photoUrl);
    return {
      url: photoUrl,
      type: `photo`
    };
  },

  get randomImage() {
    const paintingOrPhoto = Math.round(Math.random());
    return paintingOrPhoto ? this.randomPainting : this.randomPhoto;
  },

  load() {
    return new Promise((onLoad) => {
      let image;
      for (let url of this.used) {
        image = new Image();
        image.src = url;
        image.onerror = () => {
          this.photos.splice(this.photos.find(image.src), 1);
          this.paintings.splice(this.paintings.find(image.src), 1)
        };
      }
      image.onload = () => onLoad();
    });
  }
};
