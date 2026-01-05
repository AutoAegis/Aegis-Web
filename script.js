const reveals = document.querySelectorAll(".reveal")

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible")
      }
    })
  },
  { threshold: 0.15 }
)

reveals.forEach(el => observer.observe(el))

window.addEventListener("scroll", () => {
  const y = window.scrollY
  document.querySelectorAll("img").forEach(img => {
    img.style.transform = `translateY(${y * 0.045}px) scale(1.05)`
  })
})
