"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnOpenModal = document.querySelectorAll(".btn--show-modal");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

///////////////////////////////////////
//* Modal
function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}
function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

btnOpenModal.forEach((btn) => btn.addEventListener("click", openModal));
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
});

///////////////////////////////////////
//* Button scrolling
btnScrollTo.addEventListener("click", (e) => {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log("Current scroll (X/Y) ", window.pageXOffset, window.pageYOffset);

  console.log(
    "height/width viewport ",
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // smooth scrolling

  // window.scrollTo(s1coords.left, s1coords.top);

  // window.scrollTo({
  //   left: s1coords.left,
  //   top: s1coords.top,
  //   behavior: "smooth",
  // });

  section1.scrollIntoView({ behavior: "smooth" });
});

///////////////////////////////////////
//* Page navigation
// document.querySelectorAll(".nav__link").forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.preventDefault();
//     const id = this.getAttribute("href");
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   });
// });

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("nav__link")) {
    console.log(e.target);
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

///////////////////////////////////////
//* Tabbed component
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");
  console.log(clicked);

  clicked.classList.add("operations__tab--active");
});

///////////////////////////////////////

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////

/*
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

document.querySelector(".header");
const allSections = document.querySelectorAll(".section");
// console.log(allSections);

document.getElementById("section--2");
const allButtons = document.getElementsByTagName("button");
// console.log(allButtons);

// console.log(document.getElementsByClassName("btn"));

//* Creating and inserting elements

const message = document.createElement("div");
message.classList.add("cookie-message");
message.innerHTML = `Cookies help us deliver the best experience on our website. By using our website, you agree to the use of cookies. <button class="btn btn--close-cookie">Got it!</button>`;

// header.prepend(message);
header.append(message);
document.querySelector(".btn--close-cookie").addEventListener("click", () => {
  message.remove();
});

// Styles
message.style.backgroundColor = "#37383d";
message.style.width = "104%";

// console.log(message.style.height);
// console.log(message.style.color);
// console.log(message.style.backgroundColor);
// console.log(message.style.width);

// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 30 + "px";

// document.documentElement.style.setProperty("--color-primary", "blue");

// Attributes
const logo = document.querySelector(".nav__logo");
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);

// console.log(logo.test);
// console.log(logo.getAttribute("test"));
logo.setAttribute("owner", "Rahul");

logo.classList.add("hello", "bye");
logo.classList.remove("bye");
logo.classList.toggle("open");
logo.classList.contains("open");

///////////////////////////////////////
//* Types of Events and Event Handler
const h1 = document.querySelector("h1");

const alertH1 = () => {
  alert("AddEventListener! You are reading heading");
  // h1.removeEventListener("mouseenter", alertH1);
};

h1.addEventListener("mouseenter", alertH1);

setTimeout(() => {
  h1.removeEventListener("mouseenter", alertH1);
}, 5000);

// h1.onmouseenter = function () {
//   alert("onmouseenter! You are reading heading");
// };

// rgb(0-255, 0-255, 0-255)

//* Event Propagation in Practice
const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const randomColor = () => {
  return `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
};

document.querySelector(".nav__link").addEventListener(
  "click",
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log("LINK", e.target, e.currentTarget);
    console.log(this == e.currentTarget);

    // Stop propagation
    // e.stopPropagation();
  },
  true
);

document.querySelector(".nav__links").addEventListener(
  "click",
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log("UL", e.target, e.currentTarget);
    console.log(this == e.currentTarget);
  },
  true
);

document.querySelector(".nav").addEventListener(
  "click",
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log("NAV", e.target, e.currentTarget);
    console.log(this == e.currentTarget);
  },
  true
);


///////////////////////////////////////
//* DOM Traversing

const h1 = document.querySelector("h1");

// Going Downwards: child
console.log(h1.querySelectorAll(".highlight"));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = "white";
h1.lastElementChild.style.color = "orangered";

// Going Upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest(".header").style.background = "var(--color-secondary)";

h1.closest("h1").style.background = "var(--gradient-primary)";

console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);

*/
