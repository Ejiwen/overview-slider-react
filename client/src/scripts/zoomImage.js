module.exports = {
  zoomer: function () {
    const image = document.querySelector('.imagePortal');

    image.addEventListener('mousemove', function (e) {
      let width = image.offsetWidth;
      let height = image.offsetHeight;
      let mouseX = e.offsetX;
      let mouseY = e.offsetY;

      let bgPosX = (mouseX / width) * 100;
      let bgPosY = (mouseY / height) * 100;

      image.style.backgroundPosition = `${bgPosX}% ${bgPosY}%`;
    });

    image.addEventListener('mouseleave', function () {
      image.style.backgroundPosition = 'top';
    });
  },

  testFn: function () {
    console.log('test');
    const b = document.querySelector('.imagePortal');
    console.log(b);
  },
};
