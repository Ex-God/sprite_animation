import { Player } from './classes.js'

/**@type {HTMLCanvasElement}*/

const canvas = document.querySelector('.scene')
const ctx = canvas.getContext('2d')
canvas.width = innerWidth
canvas.height = innerHeight

const player = new Player()

let frameX = 3
let frameY = 5

let gameFrame = 0
const staggerFrames = 5

const playerAnimations = []

player.states.forEach((state, index) => {
  let frames = {
    location: []
  }

  for(let i = 0; i < state.frames; i++) {
    let positionX = i * player.width
    let positionY = index * player.height
    frames.location.push({x: positionX, y: positionY})
  }

  playerAnimations[state.name] = frames
})

let animation = playerAnimations['idle']

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.width)
  let position = Math.floor(gameFrame / staggerFrames) % animation.location.length
  frameX = player.width * position
  frameY = animation.location[position].y
  ctx.drawImage(player.image, frameX, frameY, player.width, player.height, player.x, player.y, 100, 90)
  gameFrame ++
  requestAnimationFrame(animate)
}

animate()

window.addEventListener('keypress', (event) => {
  if(event.key === 'd') {
    ctx.clearRect(0, 0, canvas.width, canvas.width)
    animation = playerAnimations['run']
    player.x += 10
  }
  if(event.key === 'a') {
    ctx.clearRect(0, 0, canvas.width, canvas.width)
    animation = playerAnimations['run']
    player.x -= 10
  }
  if(event.key === 's') {
    ctx.clearRect(0, 0, canvas.width, canvas.width)
    animation = playerAnimations['sit']
  }
  if(event.key === 'w') {
    ctx.clearRect(0, 0, canvas.width, canvas.width)
    animation = playerAnimations['jump']
  }
  if(event.key === ' ') {
    ctx.clearRect(0, 0, canvas.width, canvas.width)
    animation = playerAnimations['bite']
  }
})

window.addEventListener('keyup', (event) => {
  if(event.key) {
    animation = playerAnimations['idle']
  }
})

console.log(player.states)
console.log(playerAnimations)