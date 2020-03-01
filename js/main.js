let bannerTexts = [
  {
    name: "A change to pursue life", 
    space: [1, 8, 18],
    red: [19, 20, 21, 22],
    breaks: [11],
  },
  {
    name: "To do what's impossible",
    space: [2, 5],
    red: [13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
    breaks: [12],
  },
  {
    name: "To say I can't can",
    space: [2, 6, 14],
    strike: true,
    red: [15, 16, 17],
    breaks: [8],
  },
  {
    name: "To take roads not taken",
    space: [2, 7, 17],
    red: [8, 9, 10, 11, 12],
    breaks: [13],
  },
  {
    name: "See the unseen PERSPECTIVE",
    space: [3, 7],
    red: [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
    rotate: true,
    breaks: [14],
  },
];    

let sequenceAnimationElem = document.querySelector(".main .sequence-animation");
let goDowmElem = document.querySelector(" section.main .go-down");
let animationRunning = true;
document.addEventListener("scroll", () => {
  let offset = window.pageYOffset;
  let fixedScrollValue = 250;
   
  if (offset > fixedScrollValue && animationRunning) {
    goDowmElem.style.opacity = 0;
    goDowmElem.style.animation = "none";
    animationRunning = false;
  } else if(offset <= fixedScrollValue && !animationRunning) {
    goDowmElem.style.opacity = 1;
    animationRunning = true;
    sleep(500);
    goDowmElem.style.animation = "";
  }
})

window.addEventListener("load", () => {
  setTimeout(() => {
    assignAnimation();
  }, 2600);
})

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function assignAnimation() {
  for(let j = 0; ; j++) {
    let bannerText = bannerTexts[j%bannerTexts.length];
    let animationDuration ="3000";
    if (j%bannerTexts.length == bannerTexts.length -1) {
      animationDuration = "5000";
    }
    let currentElem = e("DIV", "", "text", sequenceAnimationElem);
    for (let i =0; i< bannerText.name.length; i++) {
      let letter;
      if (bannerText.breaks.indexOf(i) != -1) {
        letter = e("br"," ",  "", currentElem);
      } else {
        letter = e("span", bannerText.name[i], "", currentElem);
      }
      if (bannerText.space.indexOf(i) != -1) letter.classList.add("blank");
      if (bannerText.strike && i > 8 && i < 14) letter.classList.add("strike");
      if (bannerText.rotate && i > 17 && i < 23) {
        letter.classList.add("large");
        letter.style.animation =`FadeShowInverted ${animationDuration}ms ease-in-out forwards`;
        letter.style.position = "relative";
        letter.style.left = "-0.6%";
      } else if (bannerText.red.indexOf(i) != -1) {
        letter.classList.add("large");
        if (bannerText.rotate) {
          letter.style.animation =`FadeShow ${animationDuration}ms ease-in-out forwards`;
        } else {
          letter.style.animation =`FadeShowRed ${animationDuration}ms ease-in-out forwards`;
        }
      } else {
        letter.style.animation =`FadeShow ${animationDuration}ms ease-in-out forwards`;
      }
    }
    await sleep(animationDuration);
    currentElem.parentElement.removeChild(currentElem);
    
  }
}