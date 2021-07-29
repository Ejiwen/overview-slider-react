var imagesOptions = {};
let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const image = entry.target;
    const newURL = image.src.replace(/&w=\d+/, '&w=800');
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

/*
module.exports = {
  leazyImg: function () {
    //console.log('hey!!!!!!');
    const images = document.querySelectorAll('img');

    images.forEach((image) => {
      const newSrc =
        'https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=10&q=80';
      image.src = newSrc;
    });
  },
};
*/
