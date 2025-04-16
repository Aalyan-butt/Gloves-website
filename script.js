document.addEventListener('DOMContentLoaded', () => {
    const statNumbers = document.querySelectorAll('.stat-number');
  
    const animateNumber = (element) => {
      const target = parseInt(element.getAttribute('data-target'));
      const start = parseInt(element.textContent);
      const duration = 2000; // 2 seconds
      const startTime = performance.now();
  
      const updateNumber = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        if (elapsedTime < duration) {
          const progress = elapsedTime / duration;
          const current = Math.round(start + (target - start) * progress);
          element.textContent = current;
          requestAnimationFrame(updateNumber);
        } else {
          element.textContent = target+"+";
        }
      };
  
      element.classList.add('animated');
      requestAnimationFrame(updateNumber);
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateNumber(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
  
    statNumbers.forEach((number) => observer.observe(number));
  });

// home sec2 js starts

// Function to handle intersection
function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {  // Element is in view
      entry.target.classList.add('show-from-bottom');  // Add class to trigger animation
      observer.unobserve(entry.target);  // Stop observing after animation is triggered
    }
  });
}

// Create a new IntersectionObserver instance
const observer = new IntersectionObserver(handleIntersection, {
  threshold: 0.2  // Trigger when 20% of the element is in view
});

// Select the element with class 'home-sec2'
const homeSec2 = document.querySelector('.home-sec2');
if (homeSec2) {
  observer.observe(homeSec2);  // Start observing
}


// home sec2 js ends



//   Abdul Ahad js starts

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get the button element
  const submitButton = document.querySelector('.SUBMIT_CONTATC_US');

  // Function to pause the animation
  function pauseAnimation() {
      submitButton.style.animationPlayState = 'paused';
  }

  // Function to resume the animation
  function resumeAnimation() {
      submitButton.style.animationPlayState = 'running';
  }

  // Add event listeners for mouseenter and mouseleave
  submitButton.addEventListener('mouseenter', pauseAnimation);
  submitButton.addEventListener('mouseleave', resumeAnimation);
});



document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.product-slider-track');
    const slides = document.querySelectorAll('.product-slide');
    let slideWidth = slides[0].offsetWidth;
    let currentIndex = 0;
    const slidesPerView = 4;
  
    
    slides.forEach(slide => {
      const clone = slide.cloneNode(true);
      track.appendChild(clone);
    });
  
    function updateSlideWidth() {
      slideWidth = slides[0].offsetWidth;
      setTrackPosition();
    }
  
    function setTrackPosition() {
      track.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
    }
  
    function moveSlide() {
      currentIndex++;
      if (currentIndex >= slides.length) {
        setTimeout(() => {
          currentIndex = 0;
          track.style.transition = 'none';
          setTrackPosition();
          setTimeout(() => {
            track.style.transition = 'transform 0.5s ease-in-out';
          }, 10);
        }, 500);
      }
      setTrackPosition();
    }
  
    window.addEventListener('resize', updateSlideWidth);
    updateSlideWidth();
  
    setInterval(moveSlide, 3000); 
  });

  document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.querySelector('.rare-gloves-hero');
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image');
  
    function checkVisibility() {
      const rect = heroSection.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  
      if (rect.top <= windowHeight * 0.75 && rect.bottom >= 0) {
        heroContent.classList.add('visible');
        heroImage.classList.add('visible');
        window.removeEventListener('scroll', checkVisibility);
      }
    }
  
    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); 
  });
  document.addEventListener('DOMContentLoaded', function() {
    const bannerText = document.querySelector('.banner-text');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          bannerText.classList.add('visible');
        } else {
          bannerText.classList.remove('visible');
        }
      });
    }, { threshold: 0.1 });
  
    observer.observe(document.querySelector('.banner-container'));
  });
  document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelector('.ceo-image').classList.add('visible');
          entry.target.querySelector('.ceo-text').classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
  
    const ceoMessage = document.querySelector('.ceo-message');
    observer.observe(ceoMessage);
  });



  
//   Abdul Ahad js ends




// nadir bhai js starts





let certificationImages = document.querySelectorAll('.certification-item-img2');

certificationImages.forEach(function(certificationImage) {
  // Set the initial transition properties for smooth animations, making sure !important is applied correctly
  certificationImage.style.setProperty('transition', 'transform 0.3s ease-in-out !important, filter 0.3s ease-in-out !important', '');

  certificationImage.addEventListener('click', function() {
    // Check if the image is already scaled up
    if (certificationImage.style.transform === 'scale(2)') {
      // Revert to original size and brightness
      certificationImage.style.setProperty('transform', 'scale(1)', 'important');
      certificationImage.style.setProperty('filter', 'brightness(1)', 'important');
    } else {
      // Scale up and apply brightness effect
      certificationImage.style.setProperty('transform', 'scale(2)', 'important');
      certificationImage.style.setProperty('filter', 'brightness(0.8)', 'important');  // Slight dimming for effect
    }
  });
});



document.getElementById('quotationForm').addEventListener('submit', function(event) {
  event.preventDefault();
  // Here you can add code to handle form submission
  alert('Quotation submitted successfully!');
  var modal = bootstrap.Modal.getInstance(document.getElementById('quotationModal'));
  modal.hide();
});
// nadir bhai js ends