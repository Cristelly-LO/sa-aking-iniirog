// ==============================
// ELEMENTS
// ==============================

const cover = document.getElementById("cover");
const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const dreams = document.getElementById("dreams");

const openBook = document.getElementById("openBook");
const wax = document.getElementById("wax");


// ==============================
// START
// ==============================

openBook.addEventListener("click", () => {

cover.style.opacity = "0";

setTimeout(() => {

cover.classList.add("hidden");

envelope.classList.remove("hidden");

envelope.style.opacity = "0";

setTimeout(() => {

envelope.style.opacity = "1";

},100);

},800);

});

// ==============================
// OPEN ENVELOPE
// ==============================

wax.addEventListener("click", () => {

envelope.style.opacity = "0";

setTimeout(() => {

envelope.classList.add("hidden");

letter.classList.remove("hidden");

letter.style.opacity = "0";

setTimeout(() => {

letter.style.opacity = "1";

},100);

music.play().catch(() => {});

window.scrollTo({
top:0,
behavior:"smooth"
});

},800);

});

// ==============================
// SHOW DREAM GALLERY
// ==============================

window.addEventListener("scroll", () => {

if(letter.classList.contains("hidden")) return;

const scrollPosition =
window.scrollY + window.innerHeight;

const pageHeight =
document.body.offsetHeight;

if(scrollPosition >= pageHeight - 100){

dreams.classList.remove("hidden");

dreams.scrollIntoView({
behavior:"smooth"
});

}

});
