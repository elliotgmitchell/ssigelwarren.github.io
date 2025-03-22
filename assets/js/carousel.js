// Carousel functionality
let slideIndex = 0;
const slides = document.getElementsByClassName('carousel-item');
const indicators = document.getElementsByClassName('indicator');
let slideInterval;

// Initialize the carousel when the page loads
document.addEventListener('DOMContentLoaded', function() {
  showSlides();
  // Auto advance slides every 5 seconds
  startSlideInterval();
  
  // Pause auto-advance when hovering over carousel
  const carousel = document.querySelector('.carousel');
  if (carousel) {
    carousel.addEventListener('mouseenter', function() {
      clearInterval(slideInterval);
    });
    
    carousel.addEventListener('mouseleave', function() {
      startSlideInterval();
    });
  }
});

// Start the automatic slide interval
function startSlideInterval() {
  slideInterval = setInterval(function() {
    changeSlide(1);
  }, 3500);
}

// Change slide with prev/next controls
function changeSlide(n) {
  showSlides(slideIndex += n);
}

// Change slide with the indicators
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Main function to control the current slide
function showSlides(n) {
  let i;
  
  // Reset to first slide if we've gone past the end
  if (n >= slides.length) {
    slideIndex = 0;
  }
  
  // Go to last slide if we've gone before the beginning
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  
  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }
  
  // Remove active state from all indicators
  for (i = 0; i < indicators.length; i++) {
    indicators[i].classList.remove('active');
  }
  
  // Show the current slide and set the active indicator
  slides[slideIndex].classList.add('active');
  indicators[slideIndex].classList.add('active');
}