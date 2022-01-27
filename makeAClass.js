const canvas = document.querySelector("#my-canvas");
const c = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

let radius = 50;
window.addEventListener("click", (e) => {
  circleArray.forEach((circle) => {
    (circle.x = e.clientX), (circle.y = e.clientY - radius);
  });
});

class Circle {
  constructor(x, y, dx, dy, radius, color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color;
  }

  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    c.fillStyle = this.color;
    c.fill();
    c.strokeStyle = this.color;
    c.stroke();
  }

  update() {
    this.x += this.dx;
    this.y += this.dy;
    if (this.x > window.innerWidth - this.radius) {
      this.dx = -this.dx;
    } else if (this.x < this.radius) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > window.innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.draw();
  }
}

const circleArray = [];
const colorArray = ["#a7bed3", "#c6e2e9", "#f1ffc4"];

for (let i = 0; i < 100; i++) {
  let x = Math.random() * window.innerWidth;
  let y = Math.random() * window.innerHeight;
  let dy = Math.random() * 5;
  let dx = Math.random() * 5;

  circleArray.push(new Circle(x, y, dx, dy, radius, colorArray[i % 3]));
}

function animate() {
  c.clearRect(0, 0, window.innerWidth, window.innerHeight);
  // Circle

  circleArray.forEach((circle) => {
    circle.update();
  });

  requestAnimationFrame(animate);
}

animate();
