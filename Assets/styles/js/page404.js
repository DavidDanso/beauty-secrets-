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
});
<!--================================ Smooth Reveal ===========================================-->
window.sr = ScrollReveal();
sr.reveal('.txt-one', {
  duration: 1000,
  origin: 'bottom',
  distance: '100px',
  mobile: true,
  viewFactor: 0.2
});
sr.reveal('#rotate-img', {
  duration: 1000,
  origin: 'top',
  distance: '200px',
  mobile: true,
  delay: 500,
  viewFactor: 0.2
});


