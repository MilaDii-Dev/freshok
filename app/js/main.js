$(function () {

  $('.main-slider__items').slick({
    dots: false,
    prevArrow: '<button class="arrow arrow--prev" type="button"><svg class="arrow__image"><use xlink:href="images/sprite.svg#prevarrow"></use></svg></button>',
    nextArrow: '<button class="arrow arrow--next" type="button"><svg class="arrow__image"><use xlink:href="images/sprite.svg#nextarrow"></use></svg></button>',
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    responsive: [{
      breakpoint: 992,
      settings: {
        dots: true,
        arrows: false
      }
    }]
  });

  $('.brands__inner').slick({
    dots: false,
    slidesToShow: 6,
    slidesToScroll: 3,
    arrows: false,
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 765,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  });

  $('.user-nav__btn').on('click', function () {
    $('.cart').toggleClass('cart--active');
    $('body').toggleClass('no-scroll');
  });

  $('.product-card__btn--cart').on('click', function () {
    $('.product-card__counters').toggleClass('product-card__counters--active');
  });

  var product = document.querySelector('[data-ref="product"]');
  var promo = document.querySelector('[data-ref="promo"]');

  var config = {
    controls: {
      scope: 'local'
    }
  };

  var mixer1 = mixitup(product, config);
  var mixer2 = mixitup(promo, config);

  $('input').styler();


  $(document).on('mouseup', function (e) { // событие клика по веб-документу
    var div = $(".catalog__menu:not(.menu-mobile__button), .catalog__menu--active"); // тут указываем ID элемента
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

    var cart = $(".cart, .cart--active");
    if (!cart.is(e.target) // если клик был не по нашему блоку
      &&
      cart.has(e.target).length === 0) {
      cart.removeClass('cart--active'); 
      $('body').removeClass('no-scroll');
      $('.cart__btn:not(.cart__btn--small)').on('click', function () {
        $('.cart').removeClass('cart--active');
        $('body').removeClass('no-scroll');
      });
    }

    var mobile = $(".menu-mobile, .menu-mobile--active");
    if (!mobile.is(e.target) // если клик был не по нашему блоку
      &&
      mobile.has(e.target).length === 0) {
      mobile.removeClass('menu-mobile--active');
      $('body').removeClass('no-scroll');
      $('.burger').on('click', function () {
        $('.menu-mobile').addClass('menu-mobile--active');
        $('body').addClass('no-scroll');
      });
      $('.menu-mobile__btn').on('click', function () {
        $('.menu-mobile').removeClass('menu-mobile--active');
        $('body').removeClass('no-scroll');
      });
    }
  });

  $('.user-nav__link--search').on('click', function () {
    $('.form__mobile').toggleClass('form__mobile--active');
  });
});