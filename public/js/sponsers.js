$(function() {
            $(".hamburger").click(function(e) {
                $(".hamburger").toggleClass("is-active");
                $(".nav-menu").slideToggle()
            });
        });
new WOW().init();

        function openNav() {
            document.getElementById("myNav").style.width = "100%";
        }

        function closeNav() {
            document.getElementById("myNav").style.width = "0%";
        }
$(window).load(function() {
            $(".se-pre-con").fadeOut("slow");;
        });
