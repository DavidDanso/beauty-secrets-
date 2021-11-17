// Function to animate the content of each page
function contentAnimation() {

  var tl = gsap.timeline();
  var tl = gsap.timeline();
  tl.from('.is-animated', { duration: .5, translateY: 10, opacity: 0, stagger: 0.4 });
  tl.from('.main-navigation', { duration: .5, translateY: -10, opacity: 0});

  $('.green-heading-bg').addClass('show');
}

  barba.init({

    sync: true,

    transitions: [{

      async leave(data) {
        
        const done = this.async();
        
        pageTransition();
        await delay(1000);
        done();

      },

      async enter(data) {
        contentAnimation();
      },

      async once(data) {
        contentAnimation();
      }

    }]
  });
    
TweenMax.from('.is-animated', 1, {
      delay: 1,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
    })

TweenMax.to('.first', 1.5, {
      delay: .2,
      left: '-100%',
      ease: Expo.easeInOut
    })

    TweenMax.to('.second', 1.5, {
      delay: .4,
      left: '-100%',
      ease: Expo.easeInOut
    })

    TweenMax.to('.third', 1.5, {
      delay: .6,
      left: '-100%',
      ease: Expo.easeInOut
    })