$( document ).ready(function() {

    // NAVBAR
    $(".button-collapse").sideNav();

    var scrollTop = 0;
    $(window).scroll(function(){
        scrollTop = $(window).scrollTop();
        if (scrollTop >= 70) {
            $('nav').removeClass('bfr-scrolled');
            $('nav').addClass('scrolled');
            $('#nav-logo').fadeOut().hide();
            $('#nav-logo-aft').fadeIn().show();
        } else if (scrollTop < 70) {
            $('nav').removeClass('scrolled');
            $('nav').addClass('bfr-scrolled');
            $('#nav-logo-aft').fadeOut().hide();
            $('#nav-logo').fadeIn().show();
        }
    });
    // END OF NAVBAR

    // SLIDER
    $('.slider').slider();

        // call to action slider
        $('#partner').modal();

        $("#close").click(function(){
            $('#partner').modal('close');
        });
    // END OF SLIDER


    // PARTNER FORM SELECT FIELD
    // $('select').material_select();
    // END OF PARTNER FORM SELECT FIELD


    // ABOUT
    // $('.collapsible').collapsible();
    // $('.materialboxed').materialbox();
    // END OF ABOUT


    //LEADERSHIP POPUP
    // $('#readmore').modal();
    //
    // $("#readmore #close").click(function(){
    //     $('#readmore').modal('close');
    // });
    // END OF LEADERSHIP POPUP

    // SITE LOGO BUTTON
    $('nav .nav-wrapper .brand-logo').bind('click', function(event) {
        var $anchor = $(this);
        var nav = $($anchor.attr('href'));
        if (nav.length) {
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top}, 1500, 'easeInOutExpo');
                event.preventDefault();
        }
    });
    // END OF SITE LOGO BUTTON

    // NAVIGATION LINKS
    $('nav .nav-wrapper .right li a').bind('click', function(event) {
        $('nav .nav-wrapper .right li').removeClass('active');
        $(this).closest('li').addClass('active');
        var $anchor = $(this);
        var nav = $($anchor.attr('href'));
        if (nav.length) {
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top}, 1500, 'easeInOutExpo');
                event.preventDefault();
        }
    });
    // END OF NAVIGATION LINKS

    // SIDE NAVIGATION LINKS
    $('nav .nav-wrapper .side-nav li a').bind('click', function(event) {
        $('nav .nav-wrapper .side-nav li').removeClass('active');
        $(this).closest('li').addClass('active');
        var $anchor = $(this);
        var nav = $($anchor.attr('href'));
        if (nav.length) {
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top}, 1500, 'easeInOutExpo');
                event.preventDefault();
        }
    });
    // END OF SIDE NAVIGATION LINKS

    // FOOTER NAVIGATION LINKS
    // $('footer #top .row .l2 ul li a').bind('click', function(event) {
    //     $('footer #top .row .l2 ul li').removeClass('active');
    //     $(this).closest('li').addClass('active');
    //     var $anchor = $(this);
    //     var nav = $($anchor.attr('href'));
    //     if (nav.length) {
    //         $('html, body').stop().animate({
    //             scrollTop: $($anchor.attr('href')).offset().top}, 1500, 'easeInOutExpo');
    //             event.preventDefault();
    //     }
    // });
    // END OF FOOTER NAVIGATION LINKS

    //SEND EMAIL
    // $(function () {
    //     $("#send").click(function() {
    //         e.preventDefault();
    //         $.ajax({
    //             type: 'post',
    //             url: '../inc/contactus.inc.php',
    //             data: $('form').serialize(),
    //             success: function () {
    //                 alert('form was submitted');
    //             }
    //         });
    //     });
    // });

});

// document.addEventListener('DOMContentLoaded', function() {

    // SLIDER
  //   var elems = document.querySelectorAll('.slider');
  //   var instances = M.Slider.init(elems, options);
  // });
