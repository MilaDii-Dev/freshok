$(function () {

  $(".product__rating").rateYo({
    "starSvg": '<svg xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1922_530)"><path d="M0.022973 6.16426C0.0780978 5.99454 0.224753 5.87085 0.401315 5.84523L5.36139 5.12445L7.57966 0.629872C7.6586 0.469872 7.82157 0.368591 7.99997 0.368591C8.17841 0.368591 8.34135 0.469872 8.42032 0.629872L10.6387 5.12445L15.5987 5.84523C15.7752 5.87085 15.9219 5.99454 15.977 6.16422C16.0322 6.33394 15.9862 6.52022 15.8584 6.64475L12.2694 10.1433L13.1165 15.0834C13.1467 15.2593 13.0744 15.4369 12.9301 15.5418C12.8484 15.6012 12.7517 15.6313 12.6545 15.6313C12.5799 15.6313 12.505 15.6136 12.4365 15.5775L8 13.2451L3.56374 15.5775C3.40577 15.6605 3.21443 15.6467 3.07009 15.5418C2.92574 15.4369 2.8534 15.2592 2.88356 15.0833L3.73096 10.1433L0.141567 6.64472C0.0138172 6.52022 -0.0322143 6.33394 0.022973 6.16426Z" fill="#C1C1C1" fill-opacity="0.3"/></g><defs><lipPath d="clip0_1922_530"><rect width="16" height="16"/></lipPath></defs></svg>',
    "starWidth": "16px",
    "spacing": "6px",
    "normalFill": "#C1C1C1",
    "ratedFill": "#FFB800",
  });

  $('.product__slider').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled: true,
      navigateByImgClick: true
    },
  });

  $('.tab__link').on('click', function (e) {
    e.preventDefault();
    $('.tab__link').removeClass('tab__link--active');
    $(this).addClass('tab__link--active');

    $('.tab__item').removeClass('tab__item--active');
    $($(this).attr('href')).addClass('tab__item--active');
  });

  $('.product-card__counter, .filters__input, .tab__checkbox-input, select').styler();

  $(document).on('mouseup', function (e) {

    var mobile = $(".filters, .filters--active");
    if (!mobile.is(e.target) && mobile.has(e.target).length === 0) {
      mobile.removeClass('filters--active');
      $('.wrapper').removeClass('no-scroll');
      $('.shop-filter__btn--open').on('click', function () {
        $('.filters').addClass('filters--active');
        $('.wrapper').addClass('no-scroll');
      });
      $('.filters__btn').on('click', function () {
        $('.filters').removeClass('filters--active');
        $('.wrapper').removeClass('no-scroll');
      });
    }

    // событие клика по веб-документу
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
        $('.filters').removeClass('filters--active');
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

  var $range = $(".filters-price__range");
  var $inputFrom = $(".filters-price__input--from");
  var $inputTo = $(".filters-price__input--to");
  var instance;
  var min = 0;
  var max = 1100;
  var from = 0;
  var to = 0;
  $range.ionRangeSlider({
    skin: "round",
    type: "double",
    min: min,
    max: max,
    from: 100,
    to: 1000,
    onStart: updateInputs,
    onChange: updateInputs,
    onFinish: updateInputs
  });
  instance = $range.data("ionRangeSlider");

  function updateInputs(data) {
    from = data.from;
    to = data.to;
    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);
  }
  $inputFrom.on("change", function () {
    var val = $(this).prop("value");
    // validate
    if (val < min) {
      val = min;
    } else if (val > to) {
      val = to;
    }
    instance.update({
      from: val
    });
    $(this).prop("value", val);
  });

  $inputTo.on("change", function () {
    var val = $(this).prop("value");
    // validate
    if (val < from) {
      val = from;
    } else if (val > max) {
      val = max;
    }
    instance.update({
      to: val
    });
    $(this).prop("value", val);
  });

  $('.main-slider__items').slick({
    dots: false,
    prevArrow: '<button class="arrow arrow--prev" type="button"><svg class="arrow__image"><use xlink:href="images/sprite.svg#prevarrow"></use></svg></button>',
    nextArrow: '<button class="arrow arrow--next" type="button"><svg class="arrow__image"><use xlink:href="images/sprite.svg#nextarrow"></use></svg></button>',
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    responsive: [{
      breakpoint: 1200,
      settings: {
        dots: true,
        arrows: false
      }
    }]
  });

  $('.slider-card__inner').slick({
    dots: false,
    prevArrow: '<button class="arrow arrow--prev" type="button"><svg class="arrow__image"><use xlink:href="images/sprite.svg#prevarrow"></use></svg></button>',
    nextArrow: '<button class="arrow arrow--next" type="button"><svg class="arrow__image"><use xlink:href="images/sprite.svg#nextarrow"></use></svg></button>',
    slidesToShow: 4,
    slidesToScroll: 2,
    infinite: false,
    responsive: [{
        breakpoint: 1200,
        settings: {
          dots: false,
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          dots: true,
          arrows: false
        }
      },
    ]
  });

  $('.product__slider').slick({
    dots: false,
    prevArrow: '<button class="arrow arrow--prev" type="button"><svg class="arrow__image"><use xlink:href="images/sprite.svg#prevarrow"></use></svg></button>',
    nextArrow: '<button class="arrow arrow--next" type="button"><svg class="arrow__image"><use xlink:href="images/sprite.svg#nextarrow"></use></svg></button>',
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    responsive: [{
      breakpoint: 1200,
      settings: {
        dots: false,
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

  $(".filters-price__range").ionRangeSlider({
    type: "double",
  });

  $('.shop-filter__btn:not(.shop-filter__btn--open)').on('click', function () {
    $('.shop-filter__btn').removeClass('shop-filter__btn--active');
    $(this).addClass('shop-filter__btn--active');
  });

  $('.shop-filter__btn--list').on('click', function () {
    $('.shop-cards').addClass('shop-cards--list');
  });

  $('.shop-filter__btn--grid').on('click', function () {
    $('.shop-cards').removeClass('shop-cards--list');
  });

  $('.user-nav__btn').on('click', function () {
    $('.cart').toggleClass('cart--active');
    $('.wrapper').toggleClass('no-scroll');
  });

  $('.filters__subtitle').on('click', function () {
    $(this).next().slideToggle();
    $(this).toggleClass('filters__subtitle--active');
  });

  const productButtons = document.querySelectorAll('.product-card__btn--cart');
  productButtons.forEach(item => {
    item.addEventListener('click', () => {
      item.previousElementSibling.classList.toggle('product-card__counters:not(.product__counters)');
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


  $('.user-nav__link--search').on('click', function () {
    $('.form__mobile').toggleClass('form__mobile--active');
  });

});