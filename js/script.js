$(function(){
    $('.counting-one').counterUp({
        delay: 10,
        time: 1000
    });
    $('.counting-two').counterUp({
        delay: 10,
        time: 1000
    });
    $('.counting-three').counterUp({
        delay: 10,
        time: 1000
    });
    $('.client-slide').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1000,
        pauseOnHover: false,
        arrows: true,
        prevArrow: '.one',
        nextArrow: '.two',
        centerMode: true,
         centerPadding: '0px',
    });
})

// $('.scrl-btn').on("click", function(){
//     $("html,body").animate({scrollTop: 0},1000)
// })

// $(window).on('scroll',function(){
//     var scrl = $(this).scrollTop();
//     if(scrl>400){
//         $('.scrl-btn').fadeIn(500)
//     }else{
//         $('.scrl-btn').fadeOut(500)
//     }
// })


$('.scrl-btn').on('click',function(){
    $('html,body').animate({scrollTop: 0},1000)
})

$(window).on('scroll',function(){
   var one = $(this).scrollTop();
   if(one>600){
    $('.scrl-btn').fadeIn(500)
   }else{
    $('.scrl-btn').fadeOut(500)
   }
})

// $(window).scroll(function(){
//     if($(window).scrollTop()>500){
//         $('.nav-scrl').addClass('nav-down')
//     }else{
//         $('.nav-scrl').removeClass('nav-down')
//     }
// })
$(window).scroll(function(){
    if($(window).scrollTop()>500){
        $('.nav-scrl').addClass('nav-down')
    }else{
        $('.nav-scrl').removeClass('nav-down')
    }
})