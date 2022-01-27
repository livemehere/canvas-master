const canvas = document.querySelector("#my-canvas");
const c = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
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
    if (this.y + this.radius > window.innerHeight) {
      this.dy = -this.dy * friction;
    } else {
      this.dy += 1;
    }

    if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }

    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  }
}

const circleArray = [];
const colorArray = ["#a7bed3", "#c6e2e9", "#f1ffc4"];
let friction = 0.98;

for (let i = 0; i < 100; i++) {
  let radius = Math.random() * 50;
  let x = Math.random() * window.innerWidth;
  let y = Math.random() * window.innerHeight;
  let dy = 0.98; // 중력
  let dx = Math.round(Math.random() * 10) - 9;
  circleArray.push(new Circle(x, y, dx, dy, radius, colorArray[i % 3]));
}

let mouse = {
  x: undefined,
  y: undefined,
};
window.addEventListener("click", (e) => {
  circleArray.forEach((circle) => {
    (circle.x = e.clientX), (circle.y = e.clientY);
  });
});

window.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

function animate() {
  c.clearRect(0, 0, window.innerWidth, window.innerHeight);
  // Circle

  circleArray.forEach((circle) => {
    circle.update();
  });

  requestAnimationFrame(animate);
}

animate();
