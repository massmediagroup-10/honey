'use strict';

function initSlider() {
    $('.preview-slider').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        fade: true,
        prevArrow: '<a href="#" class="slick-prev"><i class="fa fa-chevron-left"></i></a>',
        nextArrow: '<a href="#" class="slick-next"><i class="fa fa-chevron-right"></i></a>'
    });

    $('.detail-slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.detail-slider-nav',
        prevArrow: '<a href="#" class="slick-prev"><i class="fa fa-chevron-left"></i></a>',
        nextArrow: '<a href="#" class="slick-next"><i class="fa fa-chevron-right"></i></a>'
    });
    $('.detail-slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.detail-slider-for',
        focusOnSelect: true,
        arrows: false,
        vertical: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 6,
                vertical: false
            }
        }, {
            breakpoint: 780,
            settings: {
                slidesToShow: 4,
                vertical: false
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                vertical: false
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                vertical: false
            }
        }]
    });
}

function detailToggle() {
    $('.tabs-item-inner').slideUp(0);
    $(document).on('click', '.tabs-item h5', function() {
        if ($(this).siblings('.tabs-item-inner').length) {
            $(this).stop().toggleClass('active');
            $(this).siblings('.tabs-item-inner').stop().slideToggle();
        }
    });
}

function foundation() {
    $(document).foundation();
}

$(document).ready(function() {
    initSlider();
    foundation();
    detailToggle();
});