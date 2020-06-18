var swiper = new Swiper('.swiper-container', {
    autoplay: {
        delay: 7000,
    },
    speed: 1500,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
var swiper2 = new Swiper('.tariffs-slider', {
    autoplay: {
        delay: 3000,
    },
    speed: 1500,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    loop:true,
});

$(".footer-item_adaptive").click(function() {
    $(".footer-item__link", this).toggleClass("footer-item__link_adaptive")
    $(".footer__arrow", this).toggleClass("footer__arrow_rotate")
})

$(".hamburger").click(function() {
    $(this).toggleClass("is-active")
    $(".adaptive-menu").toggleClass("show")
})
$(".menu-drop-item").hover(function () {
    $(".menu-drop-links", this).toggleClass("menu-drop-links_block")
})