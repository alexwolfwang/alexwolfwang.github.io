/**
 * Created by Alex.W on 2016/7/21.
 */
$(function() {
    var width = $(document).width();
    var animationSpeed = 500;
    var pause = 3000;
    var currentSlide = 1;
    //$(window).on('resize',function() {
    //    width = $(document).width();
    //    console.log(width)
    //});

    var $slide = $('.row');
    var $slideContainer = $slide.find('.slides');
    var $img = $slideContainer.find('img');
    var slideInterval;

    function startSlider() {
        slideInterval = setInterval(function() {
            $('.slides').animate({'margin-left':'-=' + width},animationSpeed,function() {
                currentSlide ++;
                //var lastLeft = $img.last().position().left;
                //var firstLeft;
                //if(lastLeft >= 0) {
                //    firstLeft = lastLeft ;
                //} else {
                //    firstLeft = width + lastLeft;
                //}
                //this is required when width of img is not suit for the body
                if(currentSlide === $img.length) {
                    $slideContainer.css('margin-left',0);
                    currentSlide = 1;
                }
            })
        },pause);
    }
    function stopSlider() {
        clearInterval(slideInterval);
    }

    $slide.on('mouseenter',stopSlider).on('mouseleave',startSlider);
    startSlider();
})