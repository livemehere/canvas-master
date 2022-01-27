const canvas = document.querySelector("#my-canvas");
const c = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

let x = Math.random() * window.innerWidth;
let y = Math.random() * window.innerHeight;
let dy = Math.random() * 5;
let dx = Math.random() * 5;
let radious = 50;

function animate() {
  c.clearRect(0, 0, window.innerWidth, window.innerHeight);
  // Circle

  c.beginPath();
  c.arc(x, y, radious, 0, Math.PI * 2);
  c.fillStyle = "#333";
  c.fill();
  c.strokeStyle = "#333";
  c.stroke();
  requestAnimationFrame(animate);

  x += dx;
  y += dy;
  if (x > window.innerWidth - radious) {
    dx = -dx;
  } else if (x < radious) {
    dx = -dx;
  }
  if (y + radious > window.innerHeight || y - radious < 0) {
    dy = -dy;
  }
}

animate();
