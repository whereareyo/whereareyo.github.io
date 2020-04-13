 $("#demo_1").ionRangeSlider({
     type: "double",
     grid: true,
     min: 0,
     max: 10000,
     from: 2500,
     to: 7500
 });
 $(document).ready(function() {
     $(".skins-wrapper-item").click(function() {
         if (!$(this).hasClass("skins-wrapper-item__selected")) {
             $(this).addClass("skins-wrapper-item__selected")
         } else {
             $(this).removeClass("skins-wrapper-item__selected")
         }
     })

     $(".btc").click(function() {
         if (!$(this).hasClass("payment-content-method_selected")) {
             $(this).addClass("payment-content-method_selected")
             $(".eth").removeClass("payment-content-method_selected")
         } else {
             $(this).removeClass("payment-content-method_selected")
         }
     })

     $(".eth").click(function() {
         if (!$(this).hasClass("payment-content-method_selected")) {
             $(this).addClass("payment-content-method_selected")
             $(".btc").removeClass("payment-content-method_selected")
         } else {
             $(this).removeClass("payment-content-method_selected")
         }
     })

     $(".header-content__settings").click(function() {
         $(".settings").toggleClass("show")
         $(".adaptive-menu").removeClass("adaptive-menu_show")
         $(".header").removeClass("header_hide")
         $(".wrapper-menu").removeClass("open")
     })
     $(".settings__close").click(function() {
         $(".settings").removeClass("show")
         $(".adaptive-menu").removeClass("adaptive-menu_show")
         $(".header").removeClass("header_hide")
         $(".wrapper-menu").removeClass("open")
         $(".overlay").removeClass("show")
     })
     $(".header-content-balance__plus").click(function() {
         $(".payment").toggleClass("show")
         $(".adaptive-menu").removeClass("adaptive-menu_show")
         $(".header").removeClass("header_hide")
         $(".wrapper-menu").removeClass("open")
     })
     $(".payment__close").click(function() {
         $(".payment").removeClass("show")
         $(".adaptive-menu").removeClass("adaptive-menu_show")
         $(".header").removeClass("header_hide")
         $(".wrapper-menu").removeClass("open")
         $(".overlay").removeClass("show")
     })
     $(".adaptive-cart").click(function() {
         $(".cart").toggleClass("cart_active")
         $(".hold").removeClass("hold_active")
         $(".adaptive-menu").removeClass("adaptive-menu_show")
         $(".header").removeClass("header_hide")
         $(".wrapper-menu").removeClass("open")
     })
     $(".adaptive-holder").click(function() {
         $(".hold").toggleClass("hold_active")
         $(".cart").removeClass("cart_active")
         $(".adaptive-menu").removeClass("adaptive-menu_show")
         $(".header").removeClass("header_hide")
         $(".wrapper-menu").removeClass("open")
     })
     $(".overlay").click(function() {
         $(this).removeClass("show")
         $(".hold").removeClass("hold_active")
         $(".cart").removeClass("cart_active")
         $(".header").removeClass("header_hide")
         $(".wrapper-menu").removeClass("open")
         $(".adaptive-menu").removeClass("adaptive-menu_show")
         $(".payment").removeClass("show")
         $(".settings").removeClass("show")
         $(".sidebar").removeClass("sidebar_active")
     })
 })

 function copytext(el) {
     var $tmp = $("<input>");
     $("body").append($tmp);
     $tmp.val($(el).text()).select();
     document.execCommand("copy");
     $tmp.remove();
     $(".payment-content__input").addClass("payment-content__input_active")
     setTimeout(function() {
         $(".payment-content__input").removeClass("payment-content__input_active");
     }, 500);

 }
 $(".wrapper-menu").click(function() {
     if (!$(this).hasClass("open")) {
         $(this).addClass("open")
         $(".adaptive-menu").addClass("adaptive-menu_show")
         $(".header").addClass("header_hide")
         $(".cart").removeClass("cart_active")
         $(".settings").removeClass("show")
         $(".payment").removeClass("show")
         $(".hold").removeClass("hold_active")
         $(".overlay").addClass("show")
         $(".sidebar").removeClass("sidebar_active")
     } else {
        $(this).removeClass("open")
         $(".overlay").removeClass("show")
         $(".adaptive-menu").removeClass("adaptive-menu_show")
         $(".header").removeClass("header_hide")
     }
 })
 $(".filter").click(function() {
    $(".sidebar").toggleClass("sidebar_active")
    $(".overlay").addClass("show")
 })