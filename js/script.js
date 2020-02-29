
let headerElem = document.querySelector("header");
let menuBtnElem = document.querySelector("header .menu-btn");
let navElem = document.querySelector("nav");
let countdownTimerElem = {
  second: document.querySelector(".countdown .timer.second .value"),
  minute: document.querySelector(".countdown .timer.minute .value"),
  hour: document.querySelector(".countdown .timer.hour .value"),
  day: document.querySelector(".countdown .timer.day .value")
};


const fixedScrollValue = 20;

let isScrolled = false;
let isMenuActive = false;

let countdownTimerInterval = setInterval(() => countdownTimer("2020-03-15T09:00:00.000+05:30"), 1000);

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

function countdownTimer(timestamp) {
  let eventTime = Date.parse(timestamp);

  let now = new Date().getTime(); 
  let t = eventTime - now;
  if (t < 0 && countdownTimerInterval) {
    clearInterval(countdownTimerInterval);
    return;
  }
  let day = Math.floor(t / (1000 * 60 * 60 * 24)); 
  let hour = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
  let minute = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
  let second = Math.floor((t % (1000 * 60)) / 1000); 

  day = (day<10)? "0" + day: day;
  hour = (hour<10)? "0" + hour: hour;
  minute = (minute<10)? "0" + minute: minute;
  second = (second<10)? "0" + second: second;

  countdownTimerElem.second.textContent = second;
  countdownTimerElem.minute.textContent = minute;
  countdownTimerElem.hour.textContent = hour;
  countdownTimerElem.day.textContent = day;
}