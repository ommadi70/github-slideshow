const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const question = document.getElementById("question");
const floating = document.querySelector(".floating");

const texts = [
  "Wait… what? 🥺",
  "You don’t mean that 😭",
  "Think again 😏",
  "I’ll cry 😢",
  "Okay now this is personal 💔"
];

let count = 0;

// Move NO button smoothly
function dodge() {
  const x = Math.random() * 180 - 90;
  const y = Math.random() * 90 - 45;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
  question.textContent = texts[count % texts.length];
  count++;
}

noBtn.addEventListener("touchstart", dodge);
noBtn.addEventListener("mouseover", dodge);

// YES interaction
yesBtn.addEventListener("click", () => {
  question.innerHTML = "YAY!! I LOVEEEEE YOUUUUUU 🤧 VIRTUAL DATE ON 14TH?";
  document.querySelector(".buttons").style.display = "none";
  launchHearts();
});

// Floating hearts
function launchHearts() {
  setInterval(() => {
    const span = document.createElement("span");
    span.innerHTML = ["🍓","🐽","🎀","😋"][Math.floor(Math.random()*4)];
    span.style.left = Math.random() * 100 + "vw";
    span.style.animationDuration = Math.random() * 3 + 4 + "s";
    floating.appendChild(span);

    setTimeout(() => span.remove(), 7000);
  }, 250);
}
