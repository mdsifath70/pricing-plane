$(function() {


    $(window).scroll(function() {
        let scrollTop = $(window).scrollTop();
        let header = $('.header').height();
        let headerHeight = header + 55;
        let pricing_bx_first = $('.pricing_bx.first').height();
        let pricing_bx_second = $('.pricing_bx.second').height();
        let pricing_bxPlushHeight = pricing_bx_first + headerHeight;
        let pricing_bxPlushHeight2 = pricing_bx_second + headerHeight;

        if (scrollTop > headerHeight) {
            $('.pricing_bx').addClass('active');

        } else {
            $('.pricing_bx').removeClass('active');
        }

        if (scrollTop > pricing_bxPlushHeight) {
            $('.pricing_bx.first').addClass('deActive');
        } else {
            $('.pricing_bx.first').removeClass('deActive');
        }

        if (scrollTop > pricing_bxPlushHeight2) {
            $('.pricing_bx.second').addClass('deActive');
        } else {
            $('.pricing_bx.second').removeClass('deActive');
        }

    });
});