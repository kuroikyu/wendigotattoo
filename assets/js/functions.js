$(function() {
    carousel();
    imgZoom();
});

function carousel() {
    var $carouselWrap = $('.carousel-wrap'),
        $carouselUnits = $carouselWrap.find('.carousel-unit'),
        unitCount = $carouselUnits.length,
        tallestUnitHeight = getTallestUnitHeight(),
        $carouselNav = $('.carousel-nav');

    function getTallestUnitHeight() {
        var heights = [];
        for (var i = 0; i < unitCount; i++) {
            var height = $carouselUnits.eq(i).height();
            heights.push(height);
        }
        var tallest = Math.max.apply(Math, heights);
        return tallest;
    }

    function initCarousel() {
        $carouselUnits.height(tallestUnitHeight).first().addClass('is-current');
        $carouselWrap.height(tallestUnitHeight);
    }
    initCarousel();

    function nextTestimonial() {
        if ($carouselUnits.filter('.is-current').index() < unitCount - 1) {
            $carouselUnits.filter('.is-current').next().addClass('is-current').siblings().removeClass('is-current');
        } else {
            $carouselUnits.first().addClass('is-current').siblings().removeClass('is-current');
        }
    }

    function prevTestimonial() {
        if ($carouselUnits.filter('.is-current').index() === 0) {
            $carouselUnits.last().addClass('is-current').siblings().removeClass('is-current');
        } else {
            $carouselUnits.filter('.is-current').prev().addClass('is-current').siblings().removeClass('is-current');
        }
    }

    var carouselInterval = setInterval(function() {
        nextTestimonial()
    }, 4500);

    $carouselNav.children('svg').on('click', function() {
        // clearInterval(carouselInterval);
        if ($(this).index() === $carouselNav.length) {
            nextTestimonial();
        } else {
            prevTestimonial();
        }
    });

}

function imgZoom() {
  var $imgContainer = $('.img-container');
  var $images = $imgContainer.find('img');
  var $dimmer = $('.dimmer');

  $images.on('click', function() {
    if ($(this).is('.enlarge')) {
      $(this).removeClass('enlarge');
      $dimmer.removeClass('display');

    } else {
      // Close image viewer
      // Trigger is click on enlarged image
      $(this).addClass('enlarge');
      $dimmer.addClass('display');
    }
  });


  // Close trigger is click on dimmer
  $dimmer.on('click', function () {
    $images.filter('.enlarge').removeClass('enlarge');
    $(this).removeClass('display');
  });


  // Close trigger is on ESC keypress

  // Close trigger is on X button click

  // loop through images
    // trigger is arrouw buttons
    // trigger is Arrow Keys
}
