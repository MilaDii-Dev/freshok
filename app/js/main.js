$(function () {

  $('.user-nav__btn').on('click', function () {
    $('.cart').toggleClass('cart--active');
    $('body').toggleClass('body--active');
  });

  $('.button--catalog').on('click', function () {
    $('.catalog__menu').toggleClass('catalog__menu--active');
    $('.button--catalog').toggleClass('button--catalog--active');
  });

  $('.product-card__btn--cart').on('click', function () {
    $('.product-card__counter').toggleClass('product-card__counter--active');
  });

  $('.main-slider__items').slick({
    dots: false,
    prevArrow: '<button class="arrow arrow-prev" type="button"><svg class="arrow__image"><use xlink:href="images/sprite/sprite.svg#prevarrow"></use></svg></button>',
    nextArrow: '<button class="arrow arrow-next" type="button"><svg class="arrow__image"><use xlink:href="images/sprite/sprite.svg#nextarrow"></use></svg></button>',
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false
  });

  var containerEl1 = document.querySelector('[data-ref="container-1"]');
  var containerEl2 = document.querySelector('[data-ref="container-2"]');

  var config = {
    controls: {
      scope: 'local'
    }
  };

  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);
});