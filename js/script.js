$(document).ready(function() {

  $('#slides').superslides({
    animation: 'fade',
    play: 5000,
    pagination: false
  });

  var typed = new Typed(".typed", {
    strings: ["Data Analyst.", "Software Developer.", "Student."],
    typeSpeed: 60,
    loop: true,
    startDelay: 1000,
    showCursor: false
  });

  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    items: 4,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      768: {
        items: 3,
      },
      938: {
        items: 4
      }
    }
  })

  $('.chart').easyPieChart({
    easing: 'easeInOut',
    barColor: '#fff',
    trackColor: false,
    scaleColor: false,
    lineWidth: 4,
    size: 152,
    onStep: function(from, to, percent) {
      $(this.el).find('.percent').text(Math.round(percent));
    }

  });

});

$(document).ready(function() {

  $('#slides').superslides({
    animation: 'fade',
    play: 5000,
    pagination: false
  });

  var typed = new Typed(".typed", {
    strings: ["Data Analyst.", "Software Developer.", "Student."],
    typeSpeed: 60,
    loop: true,
    startDelay: 1000,
    showCursor: false
  });

  $('.owl-carousel').owlCarousel({
    loop: true,
    items: 4,
    // margin: 10,
    // nav: true,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      768: {
        items: 3,
      },
      938: {
        items: 4
      }
    }
  });

  $('.chart').easyPieChart({
    easing: 'easeInOut',
    barColor: '#fff',
    trackColor: false,
    scaleColor: false,
    lineWidth: 4,
    size: 152,
    onStep: function(from, to, percent) {
      $(this.el).find('.percent').text(Math.round(percent));
    }

  });

});
