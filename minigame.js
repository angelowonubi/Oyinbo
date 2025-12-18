const heart = document.getElementById("heart");
const messageDiv = document.getElementById("gameMessage");
heart.classList.add("pulse"); // heart pulses when idle
let clicks = 0;

const messages = [
  "You are beautiful, everyday and in everyway.",
  "Every moment with you is beautiful.",
  "You’re My oyinbo.",
  "I love seeing you smile. I want to make you happy",
  " You are ABSOLUTELY Perfect"
];

// Start heart in center
function centerHeart() {
  const x = (window.innerWidth - heart.offsetWidth) / 2;
  const y = (window.innerHeight - heart.offsetHeight) / 2;
  heart.style.left = x + "px";
  heart.style.top = y + "px";
}

// Move heart to random position
function moveHeart() {
  const maxX = window.innerWidth - heart.offsetWidth;
  const maxY = window.innerHeight - heart.offsetHeight;
  const x = Math.random() * maxX;
  const y = Math.random() * maxY;
  heart.style.left = x + "px";
  heart.style.top = y + "px";
}

// Handle clicks
heart.addEventListener("click", () => {
  if (clicks < messages.length) {
    messageDiv.classList.remove("show");
    messageDiv.classList.add("fade-in");
    messageDiv.innerText = messages[clicks];
    setTimeout(() => messageDiv.classList.add("show"), 50);

    clicks++;

    if (clicks < messages.length) {
      moveHeart();
    } else {
      heart.style.display = "none";
      setTimeout(() => { window.location.href = "final.html"; }, 2000);
    }
  }
});

// Initial heart position
centerHeart();
