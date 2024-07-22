const head = document.querySelector(".header");
const menu = document.querySelector(".collapse");

document.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    head.classList.add("active");

    if (menu.classList.contains("show")) {
      head.classList.remove("active");
      menu.classList.remove("show");
    }
  } else {
    head.classList.remove("active");
  }
});
