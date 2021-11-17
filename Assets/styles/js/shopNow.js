$(document).ready(function() {
    /********************************************** Navigation ********************************************/
    
    //closes responsive menu when a scroll trigger link is clicked
    $('.nav-link').click(function() {
        $('.navbar-collapse').collapse('hide');
    });
    
    //
    $('body').scrollspy({
        target: '#mainNav',
        offset: 70
    });
    
    //On scroll down if offset is higher than 50 pixels add navBar shrink else remove that class 
    $(window).scroll(function() {
         if($('#mainNav').offset().top > 50) {
             $('#mainNav').addClass('navbar-shrink');
         }
        else {
            $('#mainNav').removeClass('navbar-shrink');
        }
    }); 
    //On scroll down if offset is higher than 900 pixels add navBar color to change Navbar color else remove that class
    $(window).scroll(function() {
         if($('#mainNav').offset().top > 900) {
             $('#mainNav').addClass('navbar-color');
         }
        else {
            $('#mainNav').removeClass('navbar-color');
        }
    }); 
});
<!--================================ Smooth Reveal ===========================================-->
window.sr = ScrollReveal();
sr.reveal('#first-col', {
  duration: 1000,
  origin: 'bottom',
  distance: '100px',
  mobile: true,
  viewFactor: 0.2
});
sr.reveal('#second-col', {
  duration: 1000,
  origin: 'bottom',
  distance: '100px',
  mobile: true,
  delay: 500,
  viewFactor: 0.2
});
sr.reveal('#third-col', {
  duration: 1000,
  origin: 'bottom',
  distance: '100px',
  mobile: true,
  delay: 900,
  viewFactor: 0.2
});
//TweenMax Effect
TweenMax.from(".txt", 2, {
    delay: 0.1,
    x: "-100%",
    opacity: 0,
    ease: Expo.easeInOut
});
//
window.onload = function() {
      document.getElementById("main").classList.add("loaded")

      lax.setup()

      const update = () => {
        lax.update(window.scrollY)
        window.requestAnimationFrame(update)
      }

      window.requestAnimationFrame(update)

      let w = window.innerWidth
      window.addEventListener("resize", function() {
        if(w !== window.innerWidth) {
          lax.updateElements()
        }
      });
    }

//bounce control
$('#bouncebtn').hover(function() {
    $('#bouncebtn').removeClass('infinite');
  }, function() {
    $('#bouncebtn').addClass('infinite');
  });
<!--=============================== Smooth Scrolling ==========================================-->
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });