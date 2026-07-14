// =========================
// ELEMENTS
// =========================

const cover = document.getElementById("cover");
const envelope = document.getElementById("envelope");

const beginButton = document.getElementById("beginButton");
const waxSeal = document.getElementById("waxSeal");

const music = document.getElementById("bgMusic");

// =========================
// OPEN ENVELOPE PAGE
// =========================

beginButton.addEventListener("click", () => {

cover.classList.add("hidden");

envelope.classList.remove("hidden");

});

// =========================
// OPEN LETTER
// =========================

waxSeal.addEventListener("click", () => {

// play music
music.play();

// fade effect
envelope.style.opacity = "0";

setTimeout(() => {

window.location.href = "letter.html";

}, 800);

});
