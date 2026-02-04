const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const question = document.getElementById("question");
const heartsContainer = document.querySelector(".hearts");

const messages = [
  "BANGARAM🥺",
  "PLEASSEEEEEE🐧",
  "Please MERI JAANNNN",
  "HAANNN BOLDEE 🍫",
  "PLEASEEE 🥹",
];

let msgIndex = 0;

// Move NO button on touch
noBtn.addEventListener("touchstart", moveButton);
noBtn.addEventListener("mouseover", moveButton);

function moveButton() {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 100 - 50;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;

  question.innerHTML = messages[msgIndex];
  msgIndex = (msgIndex + 1) % messages.length;
}

// YES click
yesBtn.addEventListener("click", () => {
  question.innerHTML = "YAY!! I LOVE YOU Virtual Date? 14th Feb?👄";
  document.querySelector(".buttons").style.display = "none";
  startHearts();
});

// Floating hearts generator
function startHearts() {
  setInterval(() => {
    const heart = document.createElement("span");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
  }, 200);
}
