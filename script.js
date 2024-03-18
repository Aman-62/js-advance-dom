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
*/
