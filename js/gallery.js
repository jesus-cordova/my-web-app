const gridMove = document.querySelectorAll(".right, .down, .left, .up");
const gridObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("move");
      }
    });
  },
  {
    threshold: 0.5,
  },
);

for (let i = 0; i < gridMove.length; i++) {
  const el = gridMove[i];
  gridObserver.observe(el);
}
