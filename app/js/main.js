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
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  });

  $('.user-nav__btn').on('click', function () {
    $('.cart').toggleClass('cart--active');
    $('.wrapper').toggleClass('no-scroll');
  });

  const productButtons = document.querySelectorAll('.product-card__btn--cart');
  productButtons.forEach(item => {
    item.addEventListener('click', () => {
      item.previousElementSibling.classList.toggle('product-card__counters');
    });
  });

  var products = document.querySelector('[data-ref="products"]');
  var promo = document.querySelector('[data-ref="promo"]');

  var config = {
    controls: {
      scope: 'local'
    }
  };

  var mixer1 = mixitup(products, config);
  var mixer2 = mixitup(promo, config);

  $('input').styler();


  $(document).on('mouseup', function (e) { // событие клика по веб-документу
    var div = $(".catalog__menu:not(.mobile-nav__button), .catalog__menu--active"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
      &&
      div.has(e.target).length === 0) { // и не по его дочерним элементам
      div.removeClass('catalog__menu--active');
      $('.catalog__button').removeClass('catalog__button--active');
      $('.catalog__button').on('click', function () {
        $('.catalog__button').toggleClass('catalog__button--active');
        $('.catalog__menu').toggleClass('catalog__menu--active');
      });
    }

    var cart = $(".cart, .cart--active");
    if (!cart.is(e.target) // если клик был не по нашему блоку
      &&
      cart.has(e.target).length === 0) {
      cart.removeClass('cart--active');
      $('.wrapper').removeClass('no-scroll');
      $('.cart__btn:not(.cart__btn--small)').on('click', function () {
        $('.cart').removeClass('cart--active');
        $('.wrapper').removeClass('no-scroll');
      });
    }

    var mobile = $(".mobile-nav, .mobile-nav--active");
    if (!mobile.is(e.target) // если клик был не по нашему блоку
      &&
      mobile.has(e.target).length === 0) {
      mobile.removeClass('mobile-nav--active');
      $('.wrapper').removeClass('no-scroll');
      $('.burger').on('click', function () {
        $('.mobile-nav').addClass('mobile-nav--active');
        $('.wrapper').addClass('no-scroll');
      });
      $('.mobile-nav__btn').on('click', function () {
        $('.mobile-nav').removeClass('mobile-nav--active');
        $('.wrapper').removeClass('no-scroll');
      });
    }
  });

  $('.user-nav__link--search').on('click', function () {
    $('.form__mobile').toggleClass('form__mobile--active');
  });
});