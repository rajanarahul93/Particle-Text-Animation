const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

let particleArray = []

const mouse = {
    x: null,
    y: null,
    radius: 250
}

window.addEventListener('mousemove', function(event) {
    mouse.x = event.x
    mouse.y = event.y
})

ctx.fillStyle = 'white'
ctx.font = '30px Verdana'
ctx.fillText('RAHUL', 0, 30)

const textCoordinates = ctx.getImageData(0, 0, 100, 100)

class Particle {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.size = 3
        this.baseSize = this.size
        this.baseX = this.x
        this.baseY = this.y
        this.density = (Math.random() * 40) + 5
        this.color = this.randomColor()
        this.angle = 0
        this.speed = Math.random() * 0.02 + 0.02
    }

    randomColor() {
        const r = Math.floor(Math.random() * 255)
        const g = Math.floor(Math.random() * 255)
        const b = Math.floor(Math.random() * 255)
        return `rgb(${r},${g},${b})`
    }

    updateColor() {
        this.color = this.randomColor()
    }

    draw() {
        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate(this.angle)
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(0, 0, this.size, 0, Math.PI * 2)
        ctx.closePath()
        ctx.fill()
        ctx.restore()
    }

    update() {
        this.angle += this.speed
        this.size = this.baseSize + Math.sin(this.angle) * 2

        let dx = mouse.x - this.x
        let dy = mouse.y - this.y
        let distance = Math.sqrt(dx * dx + dy * dy)
        let forceDirectionX = dx / distance
        let forceDirectionY = dy / distance
        let maxDistance = mouse.radius
        let force = (maxDistance - distance) / maxDistance
        let directionX = forceDirectionX * force * this.density
        let directionY = forceDirectionY * force * this.density

        if (distance < mouse.radius) {
            this.x -= directionX
            this.y -= directionY
        } else {
            if (this.x !== this.baseX) {
                let dx = this.x - this.baseX
                this.x -= dx / 10
            }
            if (this.y !== this.baseY) {
                let dy = this.y - this.baseY
                this.y -= dy / 10
            }
        }
    }
}

function init() {
    particleArray = []
    for (let y = 0, y2 = textCoordinates.height; y < y2; y++) {
        for (let x = 0, x2 = textCoordinates.width; x < x2; x++) {
            if (textCoordinates.data[(y * 4 * textCoordinates.width) + (x * 4) + 3] > 128) {
                let positionX = x
                let positionY = y
                particleArray.push(new Particle(positionX * 15, positionY * 15))
            }
        }
    }
}

init()

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (let i = 0; i < particleArray.length; i++) {
        particleArray[i].draw()
        particleArray[i].update()
        if (Math.random() > 0.99) {
            particleArray[i].updateColor()
        }
    }
    connect()
    requestAnimationFrame(animate)
}

animate()

function connect() {
    let opacityValue = 1
    for (let a = 0; a < particleArray.length; a++) {
        for (let b = a; b < particleArray.length; b++) {
            let dx = particleArray[a].x - particleArray[b].x
            let dy = particleArray[a].y - particleArray[b].y
            let distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 25) {
                opacityValue = 1 - (distance / 25)
                ctx.strokeStyle = `rgba(255,255,255,${opacityValue})`
                ctx.lineWidth = 2
                ctx.beginPath()
                ctx.moveTo(particleArray[a].x, particleArray[a].y)
                ctx.lineTo(particleArray[b].x, particleArray[b].y)
                ctx.stroke()
            }
        }
    }
}
