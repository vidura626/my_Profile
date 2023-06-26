
//---------------
class StickyNavigation {

    constructor() {
        this.currentId = null;
        this.currentTab = null;
        this.tabContainerHeight = 70;
        let self = this;
        $('.et-hero-tab').click(function () {
            self.onTabClick(event, $(this));
        });
        $(window).scroll(() => {
            this.onScroll();
        });
        $(window).resize(() => {
            this.onResize();
        });
    }

    onTabClick(event, element) {
        event.preventDefault();
        let scrollTop = $(element.attr('href')).offset().top - this.tabContainerHeight + 1;
        $('html, body').animate({scrollTop: scrollTop}, 600);
    }

    onScroll() {
        this.checkTabContainerPosition();
        this.findCurrentTabSelector();
    }

    onResize() {
        if (this.currentId) {
            this.setSliderCss();
        }
    }

    checkTabContainerPosition() {
        let offset = $('.et-hero-tabs').offset().top + $('.et-hero-tabs').height() - this.tabContainerHeight;
        if ($(window).scrollTop() > offset) {
            $('.et-hero-tabs-container').addClass('et-hero-tabs-container--top');
        } else {
            $('.et-hero-tabs-container').removeClass('et-hero-tabs-container--top');
        }
    }

    findCurrentTabSelector(element) {
        let newCurrentId;
        let newCurrentTab;
        let self = this;
        $('.et-hero-tab').each(function () {
            let id = $(this).attr('href');
            let offsetTop = $(id).offset().top - self.tabContainerHeight;
            let offsetBottom = $(id).offset().top + $(id).height() - self.tabContainerHeight;
            if ($(window).scrollTop() > offsetTop && $(window).scrollTop() < offsetBottom) {
                newCurrentId = id;
                newCurrentTab = $(this);
            }
        });
        if (this.currentId != newCurrentId || this.currentId === null) {
            this.currentId = newCurrentId;
            this.currentTab = newCurrentTab;
            this.setSliderCss();
        }
    }

    setSliderCss() {
        let width = 0;
        let left = 0;
        if (this.currentTab) {
            width = this.currentTab.css('width');
            left = this.currentTab.offset().left;
        }
        $('.et-hero-tab-slider').css('width', width);
        $('.et-hero-tab-slider').css('left', left);
    }

}

new StickyNavigation();

//  Projects
$(document).ready(function () {
    let $card = $('.card');
    $card.hover(function () {
        $(this).prev().css('left', '-6rem');
        $($(this.children[0])).css('transform', 'rotateZ(0)');
        $($(this.children[0])).css('top', '0');
        $($(this.children[0])).css('bottom', '75%');
    }, function () {
        $(this).prev().css("left", "0");
        $($(this.children[0])).css('transform', 'rotateZ(-45deg)');
        $($(this.children[0])).css('bottom', '0');
    });

    $card.click(function () {

    });

});


//particlesJS
particlesJS("particles-js", {
    "particles": {
        "number": {"value": 50, "density": {"enable": true, "value_area": 800}},
        "color": {"value": "#b4b9d5"},
        "shape": {
            "type": "polygon",
            "stroke": {"width": 2, "color": "#000000"},
            "polygon": {"nb_sides": 10},
            "image": {"src": "img/github.svg", "width": 100, "height": 100}
        },
        "opacity": {
            "value": 0.5,
            "random": true,
            "anim": {"enable": false, "speed": 2, "opacity_min": 0.5, "sync": false}
        },
        "size": {
            "value": 2,
            "random": true,
            "anim": {"enable": false, "speed": 240.55789993763318, "size_min": 24.298777771478104, "sync": false}
        },
        "line_linked": {
            "enable": true,
            "distance": 239.9040383846462,
            "color": "#a11010",
            "opacity": 0.49580167932826885,
            "width": 1.7592962814874056
        },
        "move": {
            "enable": true,
            "speed": 3,
            "direction": "top-right",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {"enable": true, "rotateX": 239.90403838464624, "rotateY": 559.7760895641745}
        }
    },
    "interactivity": {
        "detect_on": "window",
        "events": {
            "onhover": {"enable": true, "mode": "repulse"},
            "onclick": {"enable": true, "mode": "repulse"},
            "resize": true
        },
        "modes": {
            "grab": {"distance": 400, "line_linked": {"opacity": 1}},
            "bubble": {"distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3},
            "repulse": {"distance": 200, "duration": 0.4},
            "push": {"particles_nb": 4},
            "remove": {"particles_nb": 2}
        }
    },
    "retina_detect": true
});
var count_particles, stats, update;
stats = new Stats;
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement);
count_particles = document.querySelector('.js-count-particles');
update = function () {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
        count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
};
requestAnimationFrame(update);
;
