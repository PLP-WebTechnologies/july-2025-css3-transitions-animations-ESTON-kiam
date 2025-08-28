/* =========================
   Part 2: Functions, Scope & Returns
========================= */

// Global variable
let animationCount = 0;

// Function with parameters + return value
function incrementCount(step) {
  animationCount += step;
  return animationCount;
}

// Function demonstrating local vs global scope
function localScopeDemo() {
  let localMessage = "I exist only inside this function";
  console.log(localMessage);
  // console.log(animationCount) -> Accessible since it's global
}

/* =========================
   Part 3: Combining CSS + JS
========================= */

// Animate Box on button click
const animateBtn = document.getElementById("animateBtn");
const box = document.getElementById("animatedBox");

animateBtn.addEventListener("click", () => {
  box.classList.toggle("animate");

  let total = incrementCount(1);
  console.log("Box animated count:", total);
});

// Card Flip Effect
const flipBtn = document.getElementById("flipBtn");
const card = document.getElementById("card");

flipBtn.addEventListener("click", () => {
  card.classList.toggle("flipped");

  let total = incrementCount(1);
  console.log("Card flipped count:", total);
});
