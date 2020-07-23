$(function () {
    new WOW().init();

    $('#navbarNav a').click(function () {
        new WOW().init();
    });
    /*start nice scroll*/
    $('body').niceScroll({
        cursorcolor: "#FD701A",
        cursorminheight:60,
        cursorwidth: "15px",
        cursorborder:'none',
        zindex: "10000000"
    });

    /*show img in lastNews when click*/
    $('.imges .row div img').click(function () {
        src=$(this).attr('src');
        $('#showImg img').attr('src',src).parent().slideDown(200);
        $('#overlayImg').css('display','block');
    });
    $('#overlayImg').click(function () {
        $('#overlayImg,#showImg').slideUp(150);
    });

    /*make nav bar static when scroll*/
    $(document).scroll(function () {
       if ($(document).scrollTop() > $('.top-header').height()- $('.myNav').height()){
           $('.myNav').removeClass('sticky-top').addClass('fixed-top').css('background','rgba(0, 0, 0, 0.8)');
       }else {
           $('.myNav').removeClass('fixed-top').addClass('sticky-top').css('background','rgba(0, 0, 0, 0.4)');;
       }
    });
    /*change class active when click in a in navbar*/
    $('.myNav nav ul a').click(function (e) {
        $('.myNav nav ul li').removeClass('active');
        $(this).parent().addClass('active');
    });
    $('a[href="#top-header"]').click(function () {
        $('.myNav nav ul li').removeClass('active');
        $('.myNav nav div ul li:first-child').addClass('active');
    });

    /*change class active in header when Scroll in a in window*/
    $(window).scroll(function () {
        var scrollTop=$(window).scrollTop();
        $('section').each(function () {
            x=$(this);
            var itemPosition=$(this).offset().top.toFixed(0);
             // if ((itemPosition==scrollTop.toFixed(0))){
              if ((itemPosition - 50) < scrollTop.toFixed(0) && (itemPosition - - 50)>scrollTop.toFixed(0)){
                var id='#'+x.attr('id');
                $('.myNav nav ul a').filter('[href]').each(function () {
                    if ($(this).attr('href')==id){
                        $('.myNav nav ul li').removeClass('active');
                        $(this).parent().addClass('active');
                    }
                });
            }
        });

    });

    /*button go to top*/
    $('.gotoTop').click(function () {
        $('html').animate({
            scrollTop:0
        },500,function () {
            new WOW().init();
        });
    });
    $(document).scroll(function () {
        if ($(document).scrollTop()<($('.top-header').height())){
            $('.gotoTop').fadeOut();
        }else {
            $('.gotoTop').fadeIn();
        }
    });

});