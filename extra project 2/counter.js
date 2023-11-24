
$.fn.jQuerySimpleCounter = function( options ) {
    var settings = $.extend({
        start:  0,
        end:    100,
        easing: 'swing',
        duration: 400,
        complete: ''
    }, options );

    var thisElement = $(this);

    $({count: settings.start}).animate({count: settings.end}, {
        duration: settings.duration,
        easing: settings.easing,
        step: function() {
            var mathCount = Math.ceil(this.count);
            thisElement.text(mathCount);
        },
        complete: settings.complete
    });
};


$('#number1').jQuerySimpleCounter({end: 232,duration: 3000});
$('#number2').jQuerySimpleCounter({end: 521,duration: 3000});
$('#number3').jQuerySimpleCounter({end: 1463,duration: 2000});
$('#number4').jQuerySimpleCounter({end: 15,duration: 2500});



  /* AUTHOR LINK */
 $('.about-me-img').hover(function(){
        $('.authorWindowWrapper').stop().fadeIn('fast').find('p').addClass('trans');
    }, function(){
        $('.authorWindowWrapper').stop().fadeOut('fast').find('p').removeClass('trans');
    });


    const items = document.querySelectorAll(".accordion-item h2");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));



const swiper = new Swiper('.myswiper', {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
})
let currentIndex = 0;

      function nextSlide() {
        currentIndex = (currentIndex + 1) % 6; // Adjust the number based on the number of cards
        updateSlider();
      }

      function prevSlide() {
        currentIndex = (currentIndex - 1 + 6) % 6; // Adjust the number based on the number of cards
        updateSlider();
      }

      function updateSlider() {
        const sliderContent = document.querySelector(".slider-content");
        const cardWidth =
          document.querySelector(".review-card").offsetWidth + 20; // Adjusted width including margin
        sliderContent.style.transform = `translateX(${
          -currentIndex * cardWidth
        }px)`;
      }
      

      