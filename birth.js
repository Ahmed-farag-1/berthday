const canvas = document.getElementById('balloonCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const balloons = [];
const colors = ['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF', '#FF6EC7'];

function createBalloon() {
  return {
    x: Math.random() * canvas.width,
    y: canvas.height + 100,
    radius: 20 + Math.random() * 30,
    color: colors[Math.floor(Math.random() * colors.length)],
    speed: 1 + Math.random() * 2
  };
}

for (let i = 0; i < 20; i++) {
  balloons.push(createBalloon());
}

function drawBalloons() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  balloons.forEach(balloon => {
    ctx.beginPath();
    ctx.arc(balloon.x, balloon.y, balloon.radius, 0, Math.PI * 2);
    ctx.fillStyle = balloon.color;
    ctx.fill();
    balloon.y -= balloon.speed;

    if (balloon.y + balloon.radius < 0) {
      const idx = balloons.indexOf(balloon);
      balloons[idx] = createBalloon();
    }
  });
  requestAnimationFrame(drawBalloons);
}

drawBalloons();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});



const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

musicBtn.addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic
      .play()
      .then(() => {
        musicBtn.textContent = "إيقاف الموسيقى ⏸";
      })
      .catch((err) => {
        console.log("المتصفح منع تشغيل الصوت:", err);
      });
  } else {
    bgMusic.pause();
    musicBtn.textContent = "تشغيل الموسيقى 🎵";
  }
});
