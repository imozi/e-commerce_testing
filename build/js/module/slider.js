'use strict';

(function () {
  var slider = document.querySelector('.swiper-container');
  var MOBILE_WIDTH = 768;

  if (!slider) {
    return;
  }

  var sliderNextEl = slider.querySelector('.swiper-button-next');
  var sliderPrevEl = slider.querySelector('.swiper-button-prev');
  var sizeScreen = window.screen.width;

  var swiper = new Swiper(slider, {
    slidesPerView: 'auto',
    slidesPerGroup: (sizeScreen < MOBILE_WIDTH) ? 1 : 4,
    navigation: {
      nextEl: sliderNextEl,
      prevEl: sliderPrevEl,
    },
  });
})();