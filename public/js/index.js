var bas=1;

$(function () {
    $(".hamburger").click(function (e) {
        $(".hamburger").toggleClass("is-active");
        $(".nav-menu").slideToggle()
    });
});
new WOW().init();

function openNav() {
   
    let x=  screen.width;
 
    if(x < 700)
    {
         document.getElementById("myNav").style.width = "60%";
    }
    else{
       
        document.getElementById("myNav").style.width = "20%";
    }
    
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}




//For facts and figures

function move() {
    var elem = document.getElementById("myBar");
    //            var fig = document.getElementsById("fig");
    var width = 10;
    var id = setInterval(frame, 40);

    function frame() {
        if (width >= 52) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = width * 160 + '+';
        }
    }
}

function move2() {
    var elem = document.getElementById("myBar2");
    var width = 10;
    var id = setInterval(frame, 30);

    function frame() {
        if (width >= 36) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = width * 42 + '+';
        }
    }
}

function move3() {
    var elem = document.getElementById("myBar3");
    var width = 10;
    var id = setInterval(frame, 45);

    function frame() {
        if (width >= 80) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = width * 250 + '+';
        }
    }
}

function move4() {
    var elem = document.getElementById("myBar4");
    var width = 10;
    var id = setInterval(frame, 60);

    function frame() {
        if (width >= 92) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = width * 830 + '+';
        }
    }
}

var isInViewport = function (elem) {
    if(bas!=0){
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
    }
};

var nms = document.getElementById("myBar3");
window.addEventListener('scroll', function (event) {
    if (isInViewport(nms)) {
        move();
        move2();
        move3();
        move4();
        nms = 0;
        bas=0;
    }
}, false);
/////BUTTONS
const ButtonHover = {
    button: document.querySelector('.button'),
    elWidth: 0,
    elHeight: 0,
    cursorX: 0,
    cursorY: 0,
    elCenterX: 0,
    elCenterY: 0,

    init() {
        this.elWidth = this.button.offsetWidth;
        this.elHeight = this.button.offsetHeight;
        this.button.addEventListener('mousemove', e => this.animate(e));
    },

    animate(e) {
        let cord = e.target.getBoundingClientRect();
        this.cursorX = e.x;
        this.cursorY = e.y;
        this.elCenterX = cord.left + cord.width / 2;
        this.elCenterY = cord.top + cord.height / 2;
        let y = this.elCenterY - this.cursorY;
        let x = this.elCenterX - this.cursorX;

        let theta = Math.atan2(y, x);
        let angle = theta * 180 / Math.PI - 90;
        if (angle < 0) {
            angle = angle + 360;
        }

        this.button.style.transform = 'translateX(' + -x * 0.05 + 'px) rotateX(' + -y * 0.1 + 'deg) rotateY(' + x * 0.1 + 'deg)';
        this.button.style.boxShadow = x * 0.2 + "px " + y * 0.3 + "px 28px rgba(0,0,0,0.25)";

    }
};


ButtonHover.init();

////////////////TRIO

$('.element').each(function () {
    $(this).mouseover(function () {
        $(this).addClass('active');
        $('.stage').children('.element').not('.active').addClass('inactive');
    });
    $(this).mouseleave(function () {
        $(this).removeClass('active');
        $('.stage').children('.element').not('.active').removeClass('inactive');
    });
});
$(window).load(function() {
            $(".se-pre-con").fadeOut("slow");;
        });