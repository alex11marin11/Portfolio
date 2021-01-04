// Intro, heroes, nav-bar animations
/*const tl = gsap.timeline({defaults: {ease: "power2.out"}});

tl.to(".text", {y: "0%", duration: 1, stagger: 0.5});
tl.to(".slider", {y:"-100%", duration: 1.5, delay: 0.25});
tl.to(".intro", {y: "-100%", duration: 1}, "-=1.5");
tl.fromTo("nav", {opacity: 0}, {opacity: 1, duration: 1});
tl.fromTo(".big-text", {opacity: 0, y: "50%"}, {opacity: 1, y: "-20%", duration: 1}, "-=1.5");
tl.fromTo(".subtitle", {opacity: 0, y: "80%"}, {opacity: 1, y: "-60%", duration: 1}, "-=1");
tl.fromTo(".scroll-icon", {opacity: 0}, {opacity: 1, duration: 1}, "-=0.5");*/


// Portfolio images animation
const portfolioItems = document.querySelectorAll('.bg-image');
portfolioItems.forEach(portfolioItem => {
  console.log(portfolioItem.classList)

  portfolioItem.addEventListener('mouseover', () => {
    portfolioItem.classList.add('img-darken');
  })

  portfolioItem.addEventListener('mouseout', () => {
    portfolioItem.classList.remove('img-darken');
  })
})


// Patricles code for the heroes section
/*particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 30,
        "density": {
          "enable": true,
          "value_area": 300
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 4,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 300,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 300,
          "size": 10,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 150
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#ffffff",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }
);*/