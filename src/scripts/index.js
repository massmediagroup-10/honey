'use strict';

function initSlider() {
    $('.preview-slider').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        fade: false,
        prevArrow: '<a href="#" class="slick-prev"><i class="fa fa-chevron-left"></i></a>',
        nextArrow: '<a href="#" class="slick-next"><i class="fa fa-chevron-right"></i></a>',
        autoplay: true,
        autoplaySpeed: 8000,
        pauseOnFocus: false
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
    $('.preview-list').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        focusOnSelect: true,
        arrows: false,
        prevArrow: '<a href="#" class="slick-prev"><i class="fa fa-chevron-left"></i></a>',
        nextArrow: '<a href="#" class="slick-next"><i class="fa fa-chevron-right"></i></a>',
        responsive: [{
            breakpoint: 1024,
            settings: {
                arrows: true,
                slidesToShow: 2
            }
        }, {
            breakpoint: 600,
            settings: {
                arrows: true,
                slidesToShow: 1
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

function checkoutItem() {
    $('.checkout-item').not('.active').find('.checkout-body').slideUp(0);

    $(document).on('click', '.checkout-title a', function() {
        var checkout = $(this).parent();
        var item = $(this).closest('.checkout-item');

        $('.checkout-body').stop().slideUp();
        $('.checkout-item').not(item).stop().removeClass('active');

        if (item.hasClass('active')) {
            item.stop().removeClass('active');
            checkout.siblings('.checkout-body').stop().slideUp();
        } else {
            item.stop().addClass('active');
            checkout.siblings('.checkout-body').stop().slideDown();
        }
    });
}

function footerplaceholder() {
    $('.footer_placeholder')
        .height($('.footer')
            .outerHeight());
}

function foundation() {
    $(document).foundation();
}

function simpleMenu() {
    $('.simple-menu li').each(function(e) {
        if ($(this).hasClass('active')) {
            var target = $(this).find('a').attr('href');
            $('.account-content').hide();
            $(target).show();
        }
    });

    $(document).on('click', '.simple-menu a', function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $('.simple-menu li').removeClass('active');
        $(this).closest('li').addClass('active');
        $('.account-content').hide();
        $(target).show();
    });
}

function accountOrder() {
    $('.account-order-list').slideUp(0);

    $('.account-order-link').on('click', function(e) {
        e.preventDefault();
        var parent = $(this).closest('.account-order-item');
        parent.toggleClass('active')
        parent.find('.account-order-list').stop().slideToggle();
    });
}

function filterToggle() {
    var filter = $('.filter');
    $(document).on('click', '.filter-toggle', function() {
        filter.toggleClass('active');
    });

    if ($('#filter').length) {
        var hammertime = new Hammer(document.getElementById('filter'));
        hammertime.on('swipeleft', function() {
            filter.removeClass('active');
        });
    }
}

function isMobile() {
    return ($(window).width() < 1025) ? true : false;
}

function mobileMenu() {
    if (isMobile()) {
        $('.submenu').slideUp(0);
        $('.navigation-collapse').slideUp(0);
    }

    $(document).on('click', '.menu-toggle', function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $('.navigation-collapse').stop().slideToggle();
    });

    $(document).on('click', '.submenu-link', function(e) {
        if (isMobile()) {
            e.preventDefault();
            $(this).toggleClass('collapsed');
            $(this).siblings('.submenu').stop().slideToggle();
        }
    });

    $(window).resize(function() {
        if (!isMobile()) {
            $('.submenu').attr('style', '');
            $('.navigation-collapse').slideDown(0);
            $('.navigation-collapse').attr('style', '');
        } else {
            if ($('.navigation-collapse').is(':visible')) {
                $('.menu-toggle').addClass('active');
            } else {
                $('.menu-toggle').removeClass('active');
                $('.submenu-link').removeClass('collapsed');
            }
        }
    });
}

$(document).ready(function() {
    initSlider();
    foundation();
    detailToggle();
    checkoutItem();
    footerplaceholder();
    simpleMenu();
    accountOrder();
    filterToggle();
    mobileMenu();

    $('form').each(function() {
        $(this).validate();
    });

    $(window).resize(function() {
        footerplaceholder();
    });
});