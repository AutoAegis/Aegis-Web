const reveals = document.querySelectorAll(".reveal")
const images = document.querySelectorAll(".image img")
const particleContainer = document.querySelector(".particles")
const ranks = document.querySelectorAll(".rank")

const wave = document.createElement("div")
wave.classList.add("energy-wave")
document.body.appendChild(wave)

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add("visible")
  })
},{ threshold:0.15 })
reveals.forEach(el => observer.observe(el))

window.addEventListener("scroll", ()=>{
  const y = window.scrollY
  images.forEach((img,i)=>{
    const speed=0.06+i*0.01
    img.style.transform=`translateY(${y*speed}px) scale(${1+speed/6}) rotateX(${y*0.01}deg)`
  })
})

const particleCount = 80
for(let i=0;i<particleCount;i++){
  const p = document.createElement("div")
  p.classList.add("particle")
  p.style.left=Math.random()*100+"vw"
  p.style.top=Math.random()*100+"vh"
  p.style.animationDuration=3+Math.random()*4+"s"
  p.style.opacity=Math.random()*0.6+0.3
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
    for(let i=0;i<25;i++){
      const p = document.createElement("div")
      p.classList.add("particle")
      const angle = Math.random()*2*Math.PI
      const radius = 50+Math.random()*30
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
    const angle = (Math.random()*2*Math.PI)
    const radius = 10+Math.random()*10
    p.style.setProperty("--x", `${Math.cos(angle)*radius}px`)
    p.style.setProperty("--y", `${Math.sin(angle)*radius}px`)
    trail.appendChild(p)
    rank.appendChild(trail)
    setTimeout(()=>{ trail.remove() },1000)
  }, 400)
})

document.addEventListener("mousemove",(e)=>{
  const x=e.clientX, y=e.clientY
  const w=window.innerWidth, h=window.innerHeight
  const dx=(x-w/2)/w*40, dy=(y-h/2)/h*40
  images.forEach(img=>{
    img.style.transform += ` translate(${dx}px, ${dy}px)`
  })
  ranks.forEach(rank=>{
    rank.style.transform += ` translateX(${dx*0.25}px) translateY(${dy*0.25}px)`
  })

  wave.style.setProperty("--wave-x", (x/w*100)+"%")
  wave.style.setProperty("--wave-y", (y/h*100)+"%")
})

setInterval(()=>{
  const x = Math.random()*100
  const y = Math.random()*100
  wave.style.setProperty("--wave-x", x+"%")
  wave.style.setProperty("--wave-y", y+"%")
}, 2500)
