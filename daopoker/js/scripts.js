let betwins = document.querySelectorAll('.betwin')
for (let betwin of betwins) {
    if (betwin.textContent === '0 $') {
        betwin.classList.remove('contains')
    } else {
        betwin.classList.add('contains')

    }
}
let selectors = document.querySelectorAll('.selector')
for (let selector of selectors) {
    selector.onclick = function() {
        if (!selector.classList.contains('selector__active')) {
            selector.classList.add('selector__active')
        } else {
            selector.classList.remove('selector__active')
        }
    }
}
$(function() {
    $('.slider').slick({
        loop: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        infinite: true,
        responsive: [{
                breakpoint: 1300,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
        ]
    });
    $('.banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        loop: true,
        arrows: false,
        dots: true,
        fade: true,
    });


    $('.hamburger').click(function() {
        $(this).toggleClass('is-active')
        $('.header').toggleClass('header__hidden')
        $('.adaptive-menu').toggleClass('adaptive-menu__active')
        $('.overlay').toggleClass('show')
    })
    $('.overlay').click(function() {
        $('.adaptive-menu').removeClass('adaptive-menu__active')
        $('.header').removeClass('header__hidden')
        $('.hamburger').removeClass('is-active')
        $(this).removeClass('show')
    })

    // плавная прокрутка


    $('.faqpage').hide()
    $('.downloadpage').hide()
    $('.download').click(function() {
        $('.faqpage').hide()
        $('.main').hide()
        $('.footer').hide()
        $('.downloadpage').show()
        $('.adaptive-menu').removeClass('adaptive-menu__active')
        $('.header').removeClass('header__hidden')
        $('.hamburger').removeClass('is-active')
        $('.overlay').removeClass('show')
    })
    $('.faqtrigger').click(function() {
        $('.faqpage').show()
        $('.main').hide()
        $('.footer').show()
        $('.downloadpage').hide()
        $('.adaptive-menu').removeClass('adaptive-menu__active')
        $('.header').removeClass('header__hidden')
        $('.hamburger').removeClass('is-active')
        $('.overlay').removeClass('show')
    })
    $('.teamtrigger').click(function() {
        $('.main').show()
        $('.faqpage').hide()
        $('.downloadpage').hide()
        $('.footer').show()
        $('.adaptive-menu').removeClass('adaptive-menu__active')
        $('.header').removeClass('header__hidden')
        $('.hamburger').removeClass('is-active')
        $('.overlay').removeClass('show')
    })
    $('.abouttrigger').click(function() {
        $('.main').show()
        $('.faqpage').hide()
        $('.downloadpage').hide()
        $('.footer').show()
        $('.adaptive-menu').removeClass('adaptive-menu__active')
        $('.header').removeClass('header__hidden')
        $('.hamburger').removeClass('is-active')
        $('.overlay').removeClass('show')
    })
    $('.logo').click(function() {
        $('.main').show()
        $('.faqpage').hide()
        $('.downloadpage').hide()
        $('.footer').show()
        $('.adaptive-menu').removeClass('adaptive-menu__active')
        $('.header').removeClass('header__hidden')
        $('.hamburger').removeClass('is-active')
        $('.overlay').removeClass('show')
    })
    $('.footer-logo').click(function() {
        $('.main').show()
        $('.faqpage').hide()
        $('.downloadpage').hide()
        $('.footer').show()
        $('.adaptive-menu').removeClass('adaptive-menu__active')
        $('.header').removeClass('header__hidden')
        $('.hamburger').removeClass('is-active')
        $('.overlay').removeClass('show')
    })
    $('.menu, .scroll').click(function() {
        var scroll_el = $(this).find('a').attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({
                scrollTop: $(scroll_el).offset().top - 110
            }, 800);
            $('.header').removeClass('header__hidden');
            $('.adaptive-menu').removeClass('adaptive-menu__active')
            $('.hamburger').removeClass('is-active')
            $('.overlay').removeClass('show')
        } else {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
        }
        return false;
    });
    

})