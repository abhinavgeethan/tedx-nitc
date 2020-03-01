let countdownTimerElem = {
    second: document.querySelector(".countdown .timer.second .value"),
    minute: document.querySelector(".countdown .timer.minute .value"),
    hour: document.querySelector(".countdown .timer.hour .value"),
    day: document.querySelector(".countdown .timer.day .value")
  };
  
let countdownTimerInterval = setInterval(() => countdownTimer("2020-03-15T09:00:00.000+05:30"), 1000);
  
  
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