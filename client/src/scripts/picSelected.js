module.exports = {
  SelectImg: function (index) {
    const image = document.querySelector('[data-id="' + index + '"]');
    const images = document.querySelectorAll('[data-id]');

    //image.style.borderBottom = '2px solid red';
    image.style.boxShadow =
      'rgb(0 0 0) 4px 4px, rgb(255 255 255 / 72%) 6px 6px';

    for (let i = 0; i < images.length; i++) {
      if (i !== index) {
        //images[i].style.borderBottom = 'none';
        images[i].style.boxShadow = 'none';
      }
    }
  },
};
