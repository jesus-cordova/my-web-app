const links = document.querySelectorAll(".nav-links");
const pathname = window.location.pathname;
links.forEach((el) => {
  if (el.href.includes(pathname)) {
    console.log("test");
    console.log();
    el.classList.add("selected");
  }
});
