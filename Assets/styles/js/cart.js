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
//bounce control
$('#bouncebtn').hover(function() {
    $('#bouncebtn').removeClass('infinite');
  }, function() {
    $('#bouncebtn').addClass('infinite');
  });
<!--================================ circleType Effect ===========================================-->
const circleType = new CircleType(document.getElementById('rotated'));

function delItem(itemDeleted) {
    itemDeleted.parentElement.remove();
}
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

