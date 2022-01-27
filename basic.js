const canvas = document.querySelector("#my-canvas");
const c = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Rectangle
c.fillStyle = "rgba(255,0,0,0.5)";
c.fillRect(0, 0, 50, 50); // x, y, width, height
c.fillRect(110, 220, 50, 50); // x, y, width, height

// Line
c.beginPath();
c.moveTo(50, 300); //좌표
c.lineTo(350, 300); //다음좌표
c.lineTo(500, 100); // 다음좌표
c.strokeStyle = "red"; //라인색
c.stroke(); // path를 채울 것

// Circle
c.beginPath();
c.arc(300, 500, 80, 0, Math.PI * 2);
c.strokeStyle = "#333";
c.stroke();

// random generate
for (let i = 0; i < 10; i++) {
  c.beginPath();
  c.arc(
    Math.random() * window.innerWidth,
    Math.random() * innerHeight,
    80,
    0,
    Math.PI * 2
  );
  c.strokeStyle = "#333";
  c.stroke();
}
