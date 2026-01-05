const reveals = document.querySelectorAll(".reveal")
const images = document.querySelectorAll(".image img")

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add("visible")
  })
},{ threshold: 0.15 })

reveals.forEach(el => observer.observe(el))

window.addEventListener("scroll", () => {
  const y = window.scrollY
  images.forEach((img,i) => {
    const speed = 0.06 + i*0.01
    img.style.transform = `translateY(${y*speed}px) scale(${1 + speed/6}) rotateX(${y*0.01}deg)`
  })
})
