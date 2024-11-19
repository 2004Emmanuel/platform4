const vie = document.getElementById("navy");
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    vie.classList.add("scrolled");
  } else {
    vie.classList.remove("scrolled");
  }
});
