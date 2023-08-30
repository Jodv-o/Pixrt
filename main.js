const pixels = document.querySelectorAll('.pixel')
const grid = document.querySelector('.grid')
const color = document.querySelector('.color')
const eraser = document.querySelector('.eraser')
const bucket = document.querySelector('.fill')

let erase = false

pixels.forEach((pixel)=>{
  pixel.addEventListener('mousedown', ()=>{
    if(!erase){
      pixel.style.background = color.value
    }else{
      pixel.style.background = '#fff'
    }
  })

  pixel.addEventListener('mouseenter', ()=>{
    pixel.style.border = '2px solid'
  })
  pixel.addEventListener('mouseleave', ()=>{
    pixel.style.border = 'none'
  })
})

eraser.addEventListener('click', ()=>{
  if(!erase){
    erase = true
    eraser.className = 'eraser-active'
  }else{
    erase = false
    eraser.className = 'eraser'
  }
})

