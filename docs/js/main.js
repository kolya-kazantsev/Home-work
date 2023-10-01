$('.francise__slider').slick({
    arrows:false,
    dots:true,
});
$('.slider__btn-prev').on('click', function (e) {
    e.preventDefault()
    $('.francise__slider').slick('slickPrev')
  })
  $('.slider__btn-next').on('click', function (e) {
    e.preventDefault()
    $('.francise__slider').slick('slickNext')
  })
  $('.francise__slider-dots').slick({
    arrows: false,
    dots: true,
    appendDots: $('.francise__slider-dots'),
    waitForAnimate: false,
  })