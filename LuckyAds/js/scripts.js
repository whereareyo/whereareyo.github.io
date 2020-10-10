$(function() {
    $("#phone").mask("+7 (999) 99-99-999");
    $('select').niceSelect();
    $("nice-select").click(function() {
        $(this).toggleClass('open')
    })
})