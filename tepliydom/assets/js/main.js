$(document).ready(function() {


    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });
    $(document).mouseup(function (e) {
                var container = $(".cart-menu");

                // if the target of the click isn't the container nor a descendant of the container
                if (!container.is(e.target) && container.has(e.target).length === 0) {
                    $(".overlay").removeClass("show")
                    $(".cart-menu").removeClass("show")
                    $(".adaptive-menu").removeClass("show")
                    $(".hamburger").removeClass("is-active")
                }
            });
    $(".hamburger").click(function() {
        $(this).toggleClass("is-active")
        $(this).toggleClass("hamburgerfixed")
        $(".adaptive-menu").toggleClass("show")
        $(".overlay").toggleClass("show")
        $(".header").toggleClass("fixed")
        $(".cart-menu").removeClass("show")

    })
    $(".cart").click(function() {
        $(".cart-menu").toggleClass("show")
        $(".adaptive-menu").removeClass("show")
        $(".hamburger").removeClass("is-active")
    })

    $(".cart-adaptive").click(function() {
        $(".cart-menu").addClass("show")
        $(".overlay").addClass("show")
        $(".adaptive-menu").removeClass("show")
        $(".hamburger").removeClass("is-active")
    })
    $(".cart__add").click(function() {
        $(this).addClass("delete")
        $(".number").text("2")
        setTimeout(() => {
            $(this).removeClass("delete")
        }, 1000)

    })
    $('.quantity-up').click(function() {
        var elem = $(this).closest('.quantity').find('.quantity-val');
        var val = Number(elem.val()) + 1;
        elem.val(val);
    });

    $('.quantity-down').click(function() {
        var elem = $(this).closest('.quantity').find('.quantity-val');
        var val = Number(elem.val()) - 1;
        if (val < 1) val = 1;
        elem.val(val);
    });

})

function setCursorPosition(pos, e) {
    e.focus();
    if (e.setSelectionRange) e.setSelectionRange(pos, pos);
    else if (e.createTextRange) {
        var range = e.createTextRange();
        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select()
    }
}

function mask(e) {
    //console.log('mask',e);
    var matrix = this.placeholder, // .defaultValue
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
    def.length >= val.length && (val = def);
    matrix = matrix.replace(/[_\d]/g, function(a) {
        return val.charAt(i++) || "_"
    });
    this.value = matrix;
    i = matrix.lastIndexOf(val.substr(-1));
    i < matrix.length && matrix != this.placeholder ? i++ : i = matrix.indexOf("_");
    setCursorPosition(i, this)
}
window.addEventListener("DOMContentLoaded", function() {
    var input = document.querySelector("#online_phone");
    input.addEventListener("input", mask, false);
    input.focus();
    setCursorPosition(3, input);
});