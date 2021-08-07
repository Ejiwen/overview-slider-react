/*
module.exports = {
  leazyImg: function () {
    const images = document.querySelectorAll('img');

    images.forEach((image) => {
      const newURL = image.src.replace(/&w=\d+/, '&w=1800');
      image.src = newURL;
    });
  },
};
*/

var imagesOptions = {};

let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const image = entry.target;
    const newURL = image.src.replace(/&w=\d+/, '&w=1800');
    image.src = newURL;
    observer.unobserve(image);
  });
}, imagesOptions);

module.exports = {
  leazyImg: function () {
    const images = document.querySelectorAll('img');

    images.forEach((image) => {
      observer.observe(image);
    });
  },
};
