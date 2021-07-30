module.exports = {
  SelectImg: function (index) {
    const image = document.querySelector('[data-id="' + index + '"]');
    const images = document.querySelectorAll('[data-id]');

    //image.style.borderBottom = '2px solid red';
    image.style.boxShadow =
      'rgba(255,255,0, 1) 3px 3px, rgba(255,255,0, 0.5) 5px 5px';

    for (let i = 0; i < images.length; i++) {
      if (i !== index) {
        //images[i].style.borderBottom = 'none';
        images[i].style.boxShadow = 'none';
      }
    }
  },
};
