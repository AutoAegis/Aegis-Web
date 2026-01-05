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
    const speed = 0.06 + i*0.01
    img.style.transform = `translateY(${y*speed}px) scale(${1 + speed/6})`
  })
})

const particleCount = 80
for(let i=0;i<particleCount;i++){
  const p = document.createElement("div")
  p.classList.add("particle")
  p.style.left = Math.random()*100 + "vw"
  p.style.top = Math.random()*100 + "vh"
  p.style.animationDuration = 3 + Math.random()*4 + "s"
  p.style.opacity = Math.random()*0.6 + 0.3
  particleContainer.appendChild(p)
}

ranks.forEach((rank,index)=>{
  const xOffset = (Math.random()-0.5)*20
  const zOffset = Math.random()*50
  rank.style.transform = `translate3d(${xOffset}px,0,${zOffset}px)`
  rank.classList.add("rank-float")

  rank.addEventListener("mouseenter",()=>{
    const container = document.createElement("div")
    container.classList.add("hover-particles")
    for(let i=0;i<20;i++){
      const p = document.createElement("div")
      p.classList.add("particle")
      const angle = Math.random()*2*Math.PI
      const radius = 40 + Math.random()*20
      p.style.setProperty("--x", `${Math.cos(angle)*radius}px`)
      p.style.setProperty("--y", `${Math.sin(angle)*radius}px`)
      container.appendChild(p)
    }
    rank.appendChild(container)
    setTimeout(()=>{ container.remove() },700)
  })

  setInterval(()=>{
    const trail = document.createElement("div")
    trail.classList.add("hover-particles")
    const p = document.createElement("div")
    p.classList.add("particle")
    const angle = Math.random()*2*Math.PI
    const radius = 8 + Math.random()*8
    p.style.setProperty("--x", `${Math.cos(angle)*radius}px`)
    p.style.setProperty("--y", `${Math.sin(angle)*radius}px`)
    trail.appendChild(p)
    rank.appendChild(trail)
    setTimeout(()=>{ trail.remove() },1000)
  }, 500)
})

document.addEventListener("mousemove",(e)=>{
  const x = e.clientX, y = e.clientY
  const w = window.innerWidth, h = window.innerHeight
  const dx = (x - w/2)/w*20
  const dy = (y - h/2)/h*20

  ranks.forEach(rank=>{
    rank.style.transform += ` translateX(${dx*0.15}px) translateY(${dy*0.15}px)`
  })

  wave.style.setProperty("--wave-x", `${50 + dx*0.5}%`)
  wave.style.setProperty("--wave-y", `${50 + dy*0.5}%`)
})

setInterval(()=>{
  const x = 40 + Math.random()*20
  const y = 40 + Math.random()*20
  wave.style.setProperty("--wave-x", x + "%")
  wave.style.setProperty("--wave-y", y + "%")
}, 3000)

window.addEventListener("resize", ()=>{
  ranks.forEach(rank=>{
    const xOffset = (Math.random()-0.5)*15
    const zOffset = Math.random()*30
    rank.style.transform = `translate3d(${xOffset}px,0,${zOffset}px)`
  })
})
