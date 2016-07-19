/**
 * Created by Alex.W on 2016/7/11.
 */
$(function() {
    $('#mengyao').click(function() {
        $(this).toggleClass('hover');
    });
    //$('[data-toggle="tooltip"]').tooltip('show');



    $('.content span').click(function() {
        $('#name_voice')[0].play();
    });


    $('body').on('click','.page_scroll a',function(event) {
        var $anchor = $(this);
        var $position = $($anchor.attr('href')).offset().top;
        $('body').stop().animate({
            scrollTop: $position
        },1000,'swing');
        event.preventDefault();
    });

    $('body').scrollspy({target:'.navbar',offset:80})

});


$(function() {
    $("input,select,textarea").not("[type=submit]").jqBootstrapValidation();
});