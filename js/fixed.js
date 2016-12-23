$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 600) {
        $('.navigation').addClass('fixed');
    } else {
        $('.navigation').removeClass('fixed');
    }
});