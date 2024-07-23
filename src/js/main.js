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

if (window.matchMedia("(min-width: 1024px)")) {
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
}

// document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//   anchor.addEventListener("click", function (e) {
//     e.preventDefault();

//     const target = document.querySelector(this.getAttribute("href"));

//     if (target) {
//       const offset = target.offsetTop;
//       // const duration = 3000; // 1 second

//       // window.scrollTo({
//       //   top: offset,
//       //   behavior: "smooth",
//       //   duration: duration,
//       // });

//       $("html, body").animate(
//         {
//           scrollTop: offset,
//         },
//         3000
//       );
//     }
//   });
// });

// function smoothScroll(target, duration) {
//   var targetElement = document.querySelector(target);
//   var targetPosition = targetElement.getBoundingClientRect().top;
//   var startPosition = window.pageYOffset;
//   var startTime = null;

//   function animation(currentTime) {
//     if (startTime === null) startTime = currentTime;
//     var timeElapsed = currentTime - startTime;
//     var run = ease(timeElapsed, startPosition, targetPosition, duration);
//     window.scrollTo(0, run);
//     if (timeElapsed < duration) requestAnimationFrame(animation);
//   }

//   function ease(t, b, c, d) {
//     t /= d / 2;
//     if (t < 1) return (c / 2) * t * t + b;
//     t--;
//     return (-c / 2) * (t * (t - 2) - 1) + b;
//   }

//   requestAnimationFrame(animation);
// }

// document.querySelectorAll("nav a").forEach((anchor) => {
//   anchor.addEventListener("click", function (e) {
//     e.preventDefault();
//     var target = this.getAttribute("href");
//     smoothScroll(target, 3000); // Adjust the duration in milliseconds as needed
//   });
// });

// function smoothScroll(target, duration) {
//   const targetElement = document.querySelector(target);
//   const targetPosition = targetElement.getBoundingClientRect().top;
//   const startPosition = window.pageYOffset;
//   let startTime = null;

//   function animation(currentTime) {
//     if (startTime === null) startTime = currentTime;
//     const timeElapsed = currentTime - startTime;
//     const run = ease(timeElapsed, startPosition, targetPosition, duration);
//     window.scrollTo(0, run);
//     if (timeElapsed < duration) requestAnimationFrame(animation);
//   }

//   function ease(t, b, c, d) {
//     t /= d / 2;
//     if (t < 1) return (c / 2) * t * t + b;
//     t--;
//     return (-c / 2) * (t * (t - 2) - 1) + b;
//   }

//   requestAnimationFrame(animation);
// }

// document.querySelectorAll("nav a").forEach((anchor) => {
//   anchor.addEventListener("click", function (e) {
//     e.preventDefault();
//     const target = this.getAttribute("href");
//     smoothScroll(target, 1000); // Adjust the duration in milliseconds as needed
//   });
// });

// function smoothScroll(target, duration) {
//   const targetElement = document.querySelector(target);
//   const targetPosition =
//     targetElement.getBoundingClientRect().top + window.pageYOffset;
//   const startPosition = window.pageYOffset;
//   const distance = targetPosition - startPosition - 120;
//   let startTime = null;

//   function animation(currentTime) {
//     if (startTime === null) startTime = currentTime;
//     const timeElapsed = currentTime - startTime;
//     const run = ease(timeElapsed, startPosition, distance, duration);
//     window.scrollTo(0, run);
//     if (timeElapsed < duration) requestAnimationFrame(animation);
//   }

//   function ease(t, b, c, d) {
//     t /= d / 2;
//     if (t < 1) return (c / 2) * t * t + b;
//     t--;
//     return (-c / 2) * (t * (t - 2) - 1) + b;
//   }

//   requestAnimationFrame(animation);
// }

// document.querySelectorAll("nav a").forEach((anchor) => {
//   anchor.addEventListener("click", function (e) {
//     e.preventDefault();
//     const target = this.getAttribute("href");
//     smoothScroll(target, 3000); // Adjust the duration in milliseconds as needed
//   });
// });
