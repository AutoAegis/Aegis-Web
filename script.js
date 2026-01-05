const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 }
);

reveals.forEach(el => observer.observe(el));

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  document.querySelectorAll("img").forEach(img => {
    const speed = 0.05;
    img.style.transform =
      `translateY(${scrollY * speed}px) scale(1.04)`;
  });
});
