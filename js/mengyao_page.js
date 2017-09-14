/**
 * Created by Alex.W on 2016/7/11.
 */
$(function() {
    $('#fullpage').fullpage({
        //Navigation
        menu: '#menu',
        anchors:['Mengyao','about', 'portfolio', 'project', 'contact'],
        navigation: true,
        navigationPosition: 'right',
        // navigationTooltips: ['首页', '国际汇款','基金管理','证劵业务','方圆支付','创业孵化园','联系我们'],
        showActiveTooltip: false,
        slidesNavigation: false,
        slidesNavPosition: 'bottom',
        // paddingTop: '90px',
        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        dragAndMove: false,
        offsetSections: false,
        resetSliders: false,
        fadingEffect: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        scrollOverflowReset: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: true,

        fixedElements: '#header, .footer',
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveSlides: false,

        //Custom selectors
        sectionSelector: '.section',

        lazyLoading: true,

        //events
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
        afterResize: function(){},
        afterResponsive: function(isResponsive){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
    });

    $('.mengyao').click(function() {
        $(this).toggleClass('hover');
    });
    //$('[data-toggle="tooltip"]').tooltip('show');



    $('.content span').click(function() {
        $('#name_voice')[0].play();
    });






    $('body').scrollspy({target:'.navbar',offset:80})


    $('.contact .submit1, .contact .submit2').click(function () {

        var name = $(this).parents('form').find('.name').val(), email = $(this).parents('form').find('.email').val(),
            phone = $(this).parents('form').find('.phone').val(), consult = $(this).parents('form').find('.consult').val();
        var emailReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        var phoneReg = /^[1-9][0-9]{9}$/;
        if(name == '' || phone == '' || email == '' || consult == '' || phoneReg.test(phone) == false || emailReg.test(email) == false ) {
            if(name == '') {
                $(this).parents('form').find(' .name ~ .error-label').removeClass('hide');
            }
            if(consult == '') {
                $(this).parents('form').find(' .consult ~ .error-label').removeClass('hide');
            }
            if(phone == '' || phoneReg.test(phone) == false) {
                $(this).parents('form').find(' .phone ~ .error-label').removeClass('hide');
            }
            if(email == '' || emailReg.test(email) == false) {
                $(this).parents('form').find(' .email ~ .error-label').removeClass('hide');
            }
        } else {
            // alert("ok");
            var resumeRequest = $('#request_label2')[0].checked;
            sendEmail(name,email,phone,consult,resumeRequest);
            $(this).parents('form').find('.name').val('');
            $(this).parents('form').find('.email').val('');
            $(this).parents('form').find('.phone').val('');
            $(this).parents('form').find('.consult').val('');
            $(".subBtn").addClass( "onclic", 250, validate());

        }
    });

    $('.contactInput .name, .contactInput textarea').blur(function () {
        if($(this).val() != '') {
            $(this).siblings('.error-label').addClass('hide');
        }
    });

    $('.phone').blur(function () {
        var phoneReg = /^[1-9][0-9]{9}$/;
        if(phoneReg.test($(this).val()) == true) {
            $(this).siblings('.error-label').addClass('hide');
        }
    });
    $('.email').blur(function () {
        var emailReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        if(emailReg.test($(this).val()) == true) {
            $(this).siblings('.error-label').addClass('hide');
        }
    });

    function validate() {
        setTimeout(function() {
            $( ".subBtn" ).removeClass( "onclic" );
            $( ".subBtn" ).addClass( "validate", 450, callback() );
        }, 2250 );
    }
    function callback() {
        setTimeout(function() {
            $( ".subBtn" ).removeClass( "validate" );
        }, 2250 );
    }

});


$(function() {
    $("input,select,textarea").not("[type=submit]").jqBootstrapValidation();
});

function sendEmail(n,em,p,cons,resume) {
    emailjs.send('mengyao','contact_msg',{
        name: n,
        phone: p,
        email: em,
        message: cons,
        'resume':resume
    })
        .then(function(response) {
            console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
        }, function(err) {
            console.log("FAILED. error=", err);
        });
}