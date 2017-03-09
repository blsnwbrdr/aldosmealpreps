$(document).ready(function() {
  "use strict";
  
// SCROLL REVEAL ANIMATION
  window.sr = ScrollReveal();
    sr.reveal('.sr_checks', {
      duration: 1000,
      delay: 500,
      distance: '0px',
      scale: 0.2
    }, 200);
    sr.reveal('.sr_button', {
      duration: 1000,
    });
    sr.reveal('.sr_contact', {
      duration: 1500,
      origin: 'left'
    });

// MIXITUP MENU ANIMATION
    $('#menu_list').mixItUp();
  
})(jQuery);

