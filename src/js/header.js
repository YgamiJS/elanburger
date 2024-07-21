const head = document.querySelector(".header");

document.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    head.classList.add("active");
  } else {
    head.classList.remove("active");
  }
});
