
let headerElem = document.querySelector("header");
let menuBtnElem = document.querySelector("header .menu-btn");
let navElem = document.querySelector("nav");

const fixedScrollValue = 20;

let isScrolled = false;
let isMenuActive = false;

menuBtnElem.addEventListener("click", () => {
  if (isMenuActive) {
    isMenuActive = false;
    hideNav();
  } else {
    isMenuActive = true;
    showNav();
  }
});

navElem.addEventListener("click", e => {
  if (e.target == navElem) {
    isMenuActive = false;
    hideNav();
  }
});

document.addEventListener("scroll", e => {
  let offset = window.pageYOffset;

  if (isScrolled && offset < fixedScrollValue) {
    isScrolled = false;
    headerElem.style.transform = "translateY(20px)";
    headerElem.style.backgroundColor = "#00000000";
    headerElem.style.position = "absolute";
    document.querySelector("main").style.marginTop = "";
  } else if (!isScrolled && offset >= fixedScrollValue) {
    isScrolled = true;
    document.querySelector("main").style.marginTop = "90px";
    headerElem.style.transform = "translateY(0px)";
    headerElem.style.backgroundColor = "#090909";
    headerElem.style.position = "fixed";
  }
});

function showNav() {
  navElem.classList.add("active");
  menuBtnElem.classList.add("active");
  setTimeout(() => {
    navElem.style.opacity = 1;
  }, 20);
}

function hideNav() {
  navElem.style.opacity = "";
  menuBtnElem.classList.remove("active");
  setTimeout(() => {
    navElem.classList.remove("active");
  }, 300);
}