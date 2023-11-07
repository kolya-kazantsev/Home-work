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
    waitForAnimate: false,
  })

  (function() {
    
    document.addEventListener('click', burgerInit)

    function burgerInit(e) {
        
        const burgerIcon = e.target.closest('.burger__icon')
        const burgerNavLink = e.target.closest('.header__nav-list')

        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 950) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }

    }

})()