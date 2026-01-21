// Slight mouse parallax effect
document.addEventListener("mousemove", e => {
  document.querySelectorAll(".blob").forEach(blob => {
    blob.style.transform =
      `translate(${e.clientX * 0.01}px, ${e.clientY * 0.01}px)`;
  });
});

// Scroll reveal animation
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
  glow.style.opacity = "1";
});

document.addEventListener("mouseleave", () => {
  glow.style.opacity = "0";
});


const slides = document.querySelectorAll(".slide");
let current = 0;

function updateSlides() {
  slides.forEach((slide, i) => {
    slide.classList.remove("active", "prev", "next");

    if (i === current) slide.classList.add("active");
    else if (i === current - 1) slide.classList.add("prev");
    else if (i === current + 1) slide.classList.add("next");
  });
}

updateSlides();

slides.forEach((slide, i) => {
  slide.addEventListener("click", () => {
    current = i;
    updateSlides();
  });
});

document.addEventListener("keydown", e => {
  if (e.key === "ArrowRight" && current < slides.length - 1) current++;
  if (e.key === "ArrowLeft" && current > 0) current--;
  updateSlides();
});
