// script.js
function animateButton(element) {

    element.style.transform = "translateX(10px)";
  }
  
  function resetButton(element) {
 
    element.style.transform = "translateX(0)";
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const ctaButton = document.querySelector(".cta-button");
  
    ctaButton.addEventListener("mouseover", function () {
      animateButton(ctaButton);
    });
  
    ctaButton.addEventListener("mouseout", function () {
      resetButton(ctaButton);
    });
  });
  