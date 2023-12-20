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



  if (document.querySelector('.reviews-slider')) {
    const reviewsSlider = new Swiper('.reviews-slider', {
      loop: true,
      navigation: {
        nextEl: '.reviews-slider__next',
        prevEl: '.reviews-slider__prev',
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        // renderBullet: function () {
        //   return '<span class="reviews-slider__dot"></span>';
        // },

      },
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },

    });

  }



  function burgerMenu() {
    const burger = document.querySelector('.menu__btn '),
      wrapperBurger = document.querySelector('.header__inner');

    burger.addEventListener('click', () => {
      wrapperBurger.classList.toggle('header__inner--active')
    });

  }

  if (document.querySelector('.menu__btn ')) {
    burgerMenu();
  }




































});