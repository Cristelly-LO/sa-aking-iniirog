// ======================================
// SA AKING INIIROG
// FINAL SCRIPT
// ======================================

const cover = document.getElementById("cover");
const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const dreams = document.getElementById("dreams");

const openBook = document.getElementById("openBook");
const wax = document.getElementById("wax");

// ===============================
// COVER → ENVELOPE
// ===============================

openBook.addEventListener("click", () => {

cover.style.transition = "opacity .8s ease";
cover.style.opacity = "0";

setTimeout(() => {

cover.classList.add("hidden");

envelope.classList.remove("hidden");

envelope.style.opacity = "0";

setTimeout(() => {

envelope.style.transition = "opacity .8s ease";
envelope.style.opacity = "1";

},50);

},800);

});

// ===============================
// ENVELOPE → LETTER
// ===============================

wax.addEventListener("click", () => {

wax.style.transform = "translate(-50%, -50%) scale(.85)";
wax.style.opacity = ".4";

setTimeout(() => {

envelope.style.opacity = "0";

},200);

setTimeout(() => {

envelope.classList.add("hidden");

letter.classList.remove("hidden");

letter.style.opacity = "0";

window.scrollTo({

top:0,

behavior:"instant"

});

setTimeout(() => {

letter.style.transition = "opacity .8s ease";

letter.style.opacity = "1";

},100);

},900);

});

// ===============================
// LETTER → DREAM GALLERY
// ===============================

let galleryShown = false;

window.addEventListener("scroll", () => {

if(letter.classList.contains("hidden")) return;

if(galleryShown) return;

const scrollBottom =
window.innerHeight + window.scrollY;

const pageHeight =
document.documentElement.scrollHeight;

if(scrollBottom >= pageHeight - 120){

galleryShown = true;

dreams.classList.remove("hidden");

dreams.scrollIntoView({

behavior:"smooth"

});

}

});

// ===============================
// IMAGE HOVER EFFECT
// ===============================

const photos = document.querySelectorAll(".gallery");

photos.forEach(photo => {

photo.addEventListener("mouseenter", () => {

photo.style.transform = "scale(1.02)";

});

photo.addEventListener("mouseleave", () => {

photo.style.transform = "scale(1)";

});

});

// ===============================
// BUTTON HOVER
// ===============================

openBook.addEventListener("mouseenter", () => {

openBook.style.transform = "translateY(-3px)";

});

openBook.addEventListener("mouseleave", () => {

openBook.style.transform = "translateY(0)";

});
