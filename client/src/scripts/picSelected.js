module.exports = {
  SelectImg: function (index) {
    const image = document.querySelector('[data-id="' + index + '"]');
    const images = document.querySelectorAll('[data-id]');

    //image.style.borderBottom = '2px solid red';
    image.style.boxShadow =
      'rgb(12 12 12) 0px 6px, rgb(255 255 255 / 72%) 0px 8px';

    for (let i = 0; i < images.length; i++) {
      if (i !== index) {
        //images[i].style.borderBottom = 'none';
        images[i].style.boxShadow = 'none';
      }
    }
  },

  SelectStyle: function (indexStyle) {
    const figcaption = document.querySelector(
      '[data-caption="' + indexStyle + '"]'
    );
    const figcaptions = document.querySelectorAll('[data-caption]');

    //image.style.borderBottom = '2px solid red';
    // image.style.display = 'inline-block';
    // image.append('fsdfsfd', h1);
    //jquery('styleList:before').css('content', 'teest');
    figcaption.classList.add('testcls');

    for (let i = 0; i < figcaptions.length; i++) {
      if (i !== indexStyle) {
        if (figcaptions[i].classList.contains('testcls')) {
          figcaptions[i].classList.remove('testcls');
        }
      }
    }
  },

  ScrollThumbnails: function () {
    //Document.getElementsByClassName('Thumbnails').scroll(0, 900);
    jquery('.scrollClass').click(function () {
      jquery('.Thumbnails').animate({ scrollTop: +400 }, 1000);
    });
  },
};
