$(function () {
  $('.slider-inner').slick({
    dots: false,
    prevArrow: $('.arrow-prev'),
    nextArrow: $('.arrow-next'),
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false
  });

  var mixer = mixitup('.product-cards')

  $('.header-bottom__button').on('click', function () {
    $('.header-bottom__catalog-menu').toggleClass('header-bottom__catalog-menu--active');
    $('.header-bottom__button').toggleClass('header-bottom__button--active');
  });

  $('.icons-link__cart, .cart-btn').not('.cart-btn__small').on('click', function () {
    $('.cart').toggleClass('cart--active');
    $('body').toggleClass('body--active');
  });

$('.product-card__btn-cart').on('click', function () {
  $('.product-form').toggleClass('product-form--active');
});

  $(document).ready(function () {
    $('.minus').click(function () {
      var $input = $(this).parent().find('.cart-form__number');
      var count = parseInt($input.val()) - 1;
      count = count < 1 ? 1 : count;
      $input.val(count);
      $input.change();
      return false;
    });
    $('.plus').click(function () {
      var $input = $(this).parent().find('.cart-form__number');
      $input.val(parseInt($input.val()) + 1);
      $input.change();
      return false;
    });
  });

});