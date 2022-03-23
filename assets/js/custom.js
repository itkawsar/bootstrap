$(document).ready(function() {
    $('.banner-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow: '.prv-arrow',
        nextArrow: '.nxt-arrow',
        infinite: true,
        speed: 700,
        fade: true,
        cssEase: 'linear',
    });

    // init Isotope
    var $grid = $('.grids').isotope({
        // options
    });
    // filter items on button click
    $('.feature-menu').on('click', 'li', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });

});