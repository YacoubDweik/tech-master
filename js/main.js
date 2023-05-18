let skillsSection = document.querySelector("#skills");
let spans = document.querySelectorAll("#skills .the-progress span");
let statsSection = document.querySelector("#stats");
let numbers = document.querySelectorAll("#stats .number");
let trigger = false;
let menu = document.querySelector("header .menu");
let otherLinks = document.querySelector("header li:last-child a");

spans.forEach((e) => (e.style.width = 0));
numbers.forEach((e) => (e.innerHTML = 0));
window.onscroll = function () {
  // Increase the width of skills
  if (window.scrollY >= skillsSection.offsetTop) {
    spans.forEach((e) => (e.style.width = e.dataset.width));
  }
  // Turn on the counter of stats
  if (window.scrollY >= statsSection.offsetTop) {
    if (!trigger) {
      numbers.forEach((e) => startCounter(e));
    }
    trigger = true;
  }
};

function startCounter(e) {
  let target = e.dataset.goal;
  let counter = setInterval(() => {
    if (e.innerHTML != target) {
      e.innerHTML++;
    } else {
      clearInterval(counter);
    }
  }, 2000 / target);
}

// Press to show the menu
document.body.addEventListener("click", (e) =>
  e.target == otherLinks
    ? menu.classList.add("show")
    : menu.classList.remove("show")
);

// Timer
const sec = 1000;
const min = 60;
const hour = 3600;
const day = 86400;
let daysSec = document.querySelector(".time .days");
let hoursSec = document.querySelector(".time .hours");
let minsSec = document.querySelector(".time .minutes");
let secsSec = document.querySelector(".time .seconds");

setInterval(timeCounter, 1000);

function timeCounter() {
  let dateNow = new Date().getTime();
  let specificDate = new Date("12-21-2024").getTime();
  let remaining = (specificDate - dateNow) / sec;
  daysSec.innerHTML = Math.trunc(remaining / day);
  hoursSec.innerHTML = Math.trunc((remaining / hour) % 24);
  minsSec.innerHTML = Math.trunc((remaining / min) % 60);
  secsSec.innerHTML = Math.trunc(remaining % 60);
}
