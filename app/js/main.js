$(function () {

  $('.slider').slick({
    dots: false,
    prevArrow: '<button class="arrow arrow--prev" type="button"><svg class="arrow__image"><use xlink:href="images/sprite.svg#prevarrow"></use></svg></button>',
    nextArrow: '<button class="arrow arrow--next" type="button"><svg class="arrow__image"><use xlink:href="images/sprite.svg#nextarrow"></use></svg></button>',
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false
  });

  $('.user-nav__btn').on('click', function () {
    $('.cart').toggleClass('cart--active');
    $('body').toggleClass('no-scroll');
  });

  $('.cart__btn:not(.cart__btn--small)').on('click', function () {
    $('.cart').removeClass('cart--active');
    $('body').removeClass('no-scroll');
  });

  $('.product-card__btn--cart').on('click', function () {
  $('.product-card__counters').toggleClass('product-card__counters--active');
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

  $('input').styler();


  $(document).on('mouseup', function (e) { // событие клика по веб-документу
    var div = $(".catalog__menu, .catalog__menu--active"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
      &&
      div.has(e.target).length === 0) { // и не по его дочерним элементам
      div.removeClass('catalog__menu--active');
      $('.button--catalog').removeClass('button--catalog--active');

      $('.button--catalog').on('click', function () {
        $('.button--catalog').toggleClass('button--catalog--active');
        $('.catalog__menu').toggleClass('catalog__menu--active');
      });
    }
  });

});