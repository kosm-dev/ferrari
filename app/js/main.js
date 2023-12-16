"use strict";

document.addEventListener("DOMContentLoaded", () => {




  if (document.querySelector('.hero-slider')) {
    const heroSlider = new Swiper('.hero-slider', {
      loop: true,
      navigation: {
        nextEl: '.hero-slider__arrow-next',
        prevEl: '.hero-slider__arrow-prev',
      },
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },

    });

  }







































});