import "@/scss/index.scss";

const burger = document.querySelector(".navbar-toggler");
const header = document.querySelector(".header");
const burgerMenu = document.querySelector(".collapse");
const requisites = document.querySelector(".requisites__current-year");

requisites.textContent = `2023-${new Date().getFullYear()}`;

burger.addEventListener("click", () => {
  burgerMenu.classList.toggle("show");
  header.classList.add("show");

  if (burgerMenu.classList.contains("show")) {
    header.classList.add("active");
    header.classList.remove("close");
    setTimeout(() => (burgerMenu.style.opacity = 1), 500);
  } else {
    // burgerMenu.classList.add("close");

    header.classList.add("close");
    header.classList.remove("show");
    setTimeout(() => (burgerMenu.style.opacity = 0), 500);
    // setTimeout(() => header.classList.remove("close"), 450);
    // setTimeout(() => header.classList.remove("close"), 500);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const initialY = window.pageYOffset;
        const targetY =
          window.pageYOffset + targetElement.getBoundingClientRect().top;
        const distance = targetY - initialY;
        const speed = 1000;

        let start;

        window.requestAnimationFrame(function step(timestamp) {
          if (!start) start = timestamp;
          let progress = timestamp - start;
          window.scrollTo(0, initialY + (distance * progress) / speed);
          if (progress < speed) {
            window.requestAnimationFrame(step);
          } else {
            window.scrollTo(0, initialY + distance);
          }
        });
      }
    });
  });
});
