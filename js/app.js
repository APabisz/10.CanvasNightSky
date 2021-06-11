import "../css/style.scss"

class Sky {
  constructor(canvas) {
    this.canvas = canvas
    this.ctx = canvas.getContext("2d")
    this.width = window.innerWidth
    this.height = window.innerHeight
    this.lastConstellation = 0
    this.nextConstellation = Math.random() * 3000
    ;(this.constellation = {
      stars: [],
      isClosed: false,
      width: null,
    }),
      (this.lastUpdate = 0)
  }

  initCanvas() {
    this.canvas.width = this.width
    this.canvas.height = this.height

    this.ctx.fillStyle = "#000000"
    this.ctx.fillRect(0, 0, this.width, this.height)
  }

  generateStars(count) {
    let stars = []

    for (let i = 0; i < count; i++) {
      const radius = Math.random() * 3 + 3 /*  *3 +3  */
      stars.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        radius: radius,
        originalRadius: radius,
        rotation: Math.random() * 360 * (Math.PI / 180),
        color: "#e3bc4f",
        speed: Math.random() / 8 + 0.1,
      })
    }
    this.stars = stars
  }

  drawStars() {
    this.stars.forEach((star) => this.drawStar(star))
  }

  generateRandomConstellation() {
    const x = this.width / 2 + Math.random() * 0.8 * this.width - this.width / 2
    const y =
      this.height / 2 + Math.random() * 0.8 * this.height - this.height / 2
    const radius = (this.height / 2) * Math.random() * 0.5 + 0.5

    const stars = this.stars
      .filter((star) => {
        return (
          star.x > x - radius &&
          star.x < x + radius &&
          star.y > y - radius &&
          star.y < y + radius
        )
      })
      .sort(() => Math.random() - 0.5)
      .slice(0, Math.round(Math.random() * 5 + 3))
    this.constellation = {
      stars: stars,
      drawBack: stars.map(() => Math.random() > 0.8),
      isClosed: Math.random() > 0.5,
      width: 4,
    }
  }

  updateConstellation() {
    if (this.constellation.width > 0) {
      this.constellation.width -= 0.015 * (this.delta / 8)
    } else {
      this.constellation.width = 0
    }
  }

  drawConstellation() {
    const { stars, isClosed, width, drawBack } = this.constellation
    const starsCount = stars.length

    if (starsCount > 2) {
      const firstStar = stars[0]

      this.ctx.beginPath()
      this.ctx.moveTo(firstStar.x, firstStar.y)
      this.ctx.lineTo(stars[1].x, stars[1].y)

      for (let i = 1; i < starsCount - 1; i++) {
        const star = stars[i]
        const nextStar = stars[i + 1]
        this.ctx.lineTo(nextStar.x, nextStar.y)
        if (drawBack[i]) {
          this.ctx.lineTo(star.x, star.y)
        }
      }

      if (isClosed) {
        this.ctx.lineTo(firstStar.x, firstStar.y)
      }
      this.ctx.lineWidth = width
      this.ctx.strokeStyle = "#d4a642"
      this.ctx.stroke()
    }
  }

  drawOverlayer() {
    let gradient = this.ctx.createRadialGradient(
      this.width / 2,
      this.height / 2,
      Math.min(this.height / 4, this.width / 4, 250),
      this.width / 2,
      this.height / 2,
      this.width / 2
    )
    gradient.addColorStop(0, "rgba(0,0,0,0)")
    if (this.width > 1000 && this.height > 600) {
      gradient.addColorStop(1, "rgba(0,0,0,0.65)")
    } else if (this.width > 500 && this.height > 500) {
      gradient.addColorStop(1, "rgba(0,0,0,0.50)")
    } else {
      gradient.addColorStop(1, "rgba(0,0,0,0.35)")
    }
    this.ctx.fillStyle = gradient
    this.ctx.fillRect(0, 0, this.width, this.height)
  }

  clearCanvas() {
    this.ctx.fillStyle = "#000"
    this.ctx.fillRect(0, 0, this.width, this.height)
  }

  drawStar(star) {
    this.ctx.save()

    this.ctx.fillStyle = star.color

    this.ctx.beginPath()

    this.ctx.translate(star.x, star.y)
    this.ctx.rotate(star.rotation)
    this.ctx.moveTo(0, 0 - star.radius)
    for (let i = 0; i < 5; i++) {
      this.ctx.rotate((Math.PI / 180) * 36)
      this.ctx.lineTo(0, 0 - star.radius * 0.6)
      this.ctx.rotate((Math.PI / 180) * 36)
      this.ctx.lineTo(0, 0 - star.radius)
    }

    this.ctx.fill()
    this.ctx.restore()
  }

  updateStars() {
    this.stars.forEach((star) => {
      star.x += star.speed * (this.delta / 8)
      star.y -=
        (star.speed * (this.delta / 8) * (this.width / 2 - star.x)) / 2000
      star.radius = star.originalRadius * (Math.random() / 5 + 0.9)
      if (star.x > this.width + 2 * star.radius) {
        star.x = -2 * star.radius
      }

      if (star.y < -2 * star.radius) {
        star.y = this.height + 2 * star.radius
      } else if (star.y > this.height + 2 * star.radius) {
        star.y = -2 * star.radius
      }
    })
  }

  draw(now) {
    this.delta = now - this.lastUpdate
    this.clearCanvas()
    this.drawStars()
    this.updateStars()
    this.drawConstellation()
    this.updateConstellation()
    this.drawOverlayer()
    if (now - this.lastConstellation > this.nextConstellation) {
      this.lastConstellation = now
      this.nextConstellation = Math.random() * 1500 + 3000
      this.generateRandomConstellation()
    }
    this.lastUpdate = now
    window.requestAnimationFrame((now) => this.draw(now))
  }

  run(count) {
    this.initCanvas()
    this.generateStars(count)
    this.draw(0)
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const sky = new Sky(document.querySelector("#canvas"))
  const squareArea = Math.floor((window.innerHeight * window.innerWidth) / 1200)
  sky.run(squareArea)
})
