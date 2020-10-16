$(function() {
    $(".counter__plus").click(function() {
        var $price = $(".counter__value");
        $price.text(parseInt($price.text()) + 1);
        $price.change();
        $('.counter__input').val($('.counter__value').text())
    });
    $(".counter__minus").click(function() {
        var $price = $(".counter__value");
        if ($price.text() > 0) {
            $price.text(parseInt($price.text()) - 1);
            $price.change();
        }
        $('.counter__input').val($('.counter__value').text())
    });

    $('.close-mark').click(function() {
        $(this).closest('.cart-item').remove()
        $('#itemCount').text($(".cart-wrapper .cart-item").length)
        $('#itemCount').change();
    })
    var $itemCount = $('#itemCount').text($(".cart-wrapper .cart-item").length)

    $('select').niceSelect()

    $('.hamburger').click(function() {
        $(this).toggleClass('is-active')
        $('.header').toggleClass('header__hidden')
        $('.header-bottom').toggleClass('header-bottom_active')
        $('header').toggleClass('header__fullheight')
    })
    $('.overlay').click(function() {
        $('.adaptive-menu').removeClass('adaptive-menu__active')
        $('.header').removeClass('header__hidden')
        $('.hamburger').removeClass('is-active')
        $(this).removeClass('show')
    })

    $('#popup-call').hide()

    $('.live-line').slick({
        loop: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 1500,
        slidesToShow: 4,
        slidesToScroll: 1,
        mobileFirst: true,
        responsive: [{
            breakpoint: 320,
            slidesToShow: 1,
            arrows: false,
            centerMode: true
        }]
    })
    $('.slider').slick({
        loop: true,
        dots: true,
        arrows: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    $('.percent__one').circleProgress({
        value: 0.87,
        size: 79,
        thickness: 4,
        fill: {
            gradient: ["#3f97ff"]
        },
        animation: {
            duration: 2500,
        }
    });
    $(".slider").on("beforeChange", function() {
        $('.percent__one').circleProgress({
            value: 0.87,
            size: 79,
            thickness: 4,
            fill: {
                gradient: ["#3f97ff"]
            },
            animation: {
                duration: 2500,
            }
        });
        $('.percent__two').circleProgress({
            value: 0.66,
            size: 79,
            thickness: 4,
            fill: {
                gradient: ["#3f97ff"]
            },
            animation: {
                duration: 2500,
            }
        });
        $('.percent__three').circleProgress({
            value: 0.37,
            size: 79,
            thickness: 4,
            fill: {
                gradient: ["#3f97ff"]
            },
            animation: {
                duration: 2500,
            }
        });
    });

    function fixedMenu() {
        if ($(window).width() > 1024) {
            let s = $(window).scrollTop();
            if (s > 1) {
                $('.header-logo').after($('.main_menu'));
                $('.header-bottom').hide()
                $('.header .container .row .col-xl-12').addClass('justify-content-between')
                $('.header-cart').addClass('position-static')
                $('.menu').addClass('menu__header')
                $('.header').addClass('header__fixed')
            } else {
                $('.header__top-wrapper').removeClass('header__top-wrapper_fixed');
                $('.header-bottom .container .row .col-xl-12').prepend($('.main_menu'));
                $('.main_menu').removeClass('menu_fixed')
                $('.header-bottom').show()
                $('.header .container .row .col-xl-12').removeClass('justify-content-between')
                $('.header-cart').removeClass('position-static')
                $('.menu').removeClass('menu__header')
                $('.header').removeClass('header__fixed')
            }
        } else {
            $('.header__top-wrapper').removeClass('header__top-wrapper_fixed');
        }
        if ($(window).width() <= 1024) {
            $('.header-bottom .container .row .col-xl-12').prepend($('.main__menu'));
        }
    }
    fixedMenu();

    $(window).on('scroll', function() {
        fixedMenu();
    });

    $('.collapse').collapse()
    $('.faq-item-question').click(function() {
        if (!$(this).hasClass('collapsed')) {
            $(this).addClass('collapsed')
            $(this).removeClass('faq-item-question_opened')
        } else {

            $('.faq-item-question').removeClass('faq-item-question_opened')
            $(this).addClass('faq-item-question_opened')
            $(this).removeClass('collapsed')
        }
    })

})