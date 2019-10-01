$(function() {
            $(".hamburger").click(function(e) {
                $(".hamburger").toggleClass("is-active");
                $(".nav-menu").slideToggle()
            });
        });
new WOW().init();
