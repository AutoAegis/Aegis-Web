const reveals = document.querySelectorAll(".reveal")
const images = document.querySelectorAll(".image img")
const particleContainer = document.querySelector(".particles")
const ranks = document.querySelectorAll(".rank")
const heroSparks = document.querySelector(".hero-sparks")

const wave = document.createElement("div")
wave.classList.add("energy-wave")
document.body.appendChild(wave)

for(let i=0;i<60;i++){
  const spark = document.createElement("div")
  spark.classList.add("particle")
  spark.style.width = spark.style.height = `${2 + Math.random()*3}px`
  spark.style.left = `${Math.random()*100}%`
  spark.style.top = `${Math.random()*100}%`
  spark.style.opacity = Math.random()*0.4+0.1
  spark.style.animation = `sparkMove ${3+Math.random()*4}s ease-in-out infinite alternate`
  heroSparks.appendChild(spark)
}

const sparkStyle = document.createElement('style')
sparkStyle.innerHTML = `
@keyframes sparkMove {
  0% { transform: translateY(0px) scale(1);}
  50% { transform: translateY(-15px) scale(1.2);}
  100% { transform: translateY(0px) scale(1);}
}`
document.head.appendChild(sparkStyle)

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add("visible")
  })
}, { threshold: 0.15 })
reveals.forEach(el => observer.observe(el))

window.addEventListener("scroll", ()=>{
  const y = window.scrollY
  images.forEach((img,i)=>{
    const speed = 0.06 + i*0.
