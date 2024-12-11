// script.js
const testimonials = document.querySelector(".testimonials");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;

function updateSliderPosition() {
  const cardWidth = document.querySelector(".testimonial-card").offsetWidth;
  testimonials.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

prevBtn.addEventListener("click", () => {
  const cardCount = document.querySelectorAll(".testimonial-card").length;
  currentIndex = (currentIndex - 1 + cardCount) % cardCount; // Loop back to last slide
  updateSliderPosition();
});

nextBtn.addEventListener("click", () => {
  const cardCount = document.querySelectorAll(".testimonial-card").length;
  currentIndex = (currentIndex + 1) % cardCount; // Loop back to first slide
  updateSliderPosition();
});

// Ensure the slider is responsive
window.addEventListener("resize", updateSliderPosition);
