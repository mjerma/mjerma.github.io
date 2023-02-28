$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      $('nav').addClass('shrink');
    } else {
      $('nav').removeClass('shrink');
    }
  });

  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
  })