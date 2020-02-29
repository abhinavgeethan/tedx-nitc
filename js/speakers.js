function e(type, text, className, appendOn = -1) {
  let el = document.createElement(type);
  el.innerHTML = text;
  (className != "")?el.classList.add(className): null;
  
  (appendOn != -1)?appendOn.appendChild(el): null;
  return el;
}

function makeLecture(cardData) {
  
  let lecture = e("DIV", "", "speaker");
  
  let mainPart = e("DIV", "", "main-part", lecture);
  
  let dataPart = e("DIV", "", "data-part", mainPart);
  let dottedPart = e("DIV", "", "dotted-part", mainPart);
  
  let allPart = e("DIV", "", "all-part", dataPart);
  
  let imagePart = e("DIV", "", "image-part", dataPart);
  imagePart.style.backgroundImage = `url('${cardData.image_url}')`;
  let headPart = e("DIV", "", "head-part", allPart);
  let otherPart = e("DIV", "", "other-part", allPart);
  
  let btn = e("DIV", "More Info", "btn", otherPart);
  btn.addEventListener("click", function() {
    makeModal(cardData);
  });
  
  let h2 = e("H2", cardData.name, "", headPart);
  let subHead = e("DIV", cardData.sub_heading, "sub-head", headPart);
  subHead.classList.add("make-red"); 
  
  return lecture;
}


function makeModal(cardData) {
  let modal = e("DIV", "", "modal", document.body);
  setTimeout( function() {
    modal.style.opacity = 1;  
  }, 10);
  
  let content = e("DIV", "", "content", modal);
  let box = e("DIV", "", "box", content);
  
  let closeBtn = e("DIV", "&times;", "close-btn", box);
  modal.addEventListener("click", function(e) {
    if (e.target == modal) {
      modal.style.opacity = 0;
      setTimeout( function() {
        modal.parentElement.removeChild(modal);
      }, 200);;
    }
  })

  closeBtn.addEventListener("click", function() {
    modal.style.opacity = 0;
    setTimeout( function() {
      modal.parentElement.removeChild(modal);
    }, 200);
  });
  let dataPart = e("DIV", "", "data-part", box);
  let imagePart = e("DIV", "", "image-part", box);
  imagePart.style.backgroundImage = `url('${cardData.image_url}')`;
  
  let headPart = e("DIV", "", "head-part", dataPart);
  let moreInfo = e("DIV", "", "more-info", dataPart);
  let para = e("P", cardData.description, "", dataPart);
  cardData.meta.forEach(elem => e("DIV", elem, "information", moreInfo));
  
  let h2 = e("H2", cardData.name, "", headPart);
  let subHead = e("DIV", cardData.sub_heading, "sub-head", headPart);
  subHead.classList.add("make-red"); 

  setTimeout( function() {
    imagePart.style.display = "block";
    dataPart.style.display = "block";
  }, 1340)
  
  return modal;
}
  
let speakerData = [
  {
    image_url: "https://cdn.glitch.com/c47a0ebc-acce-4028-b82e-4a3a99120c05%2FBikash%20Sinha.jpg?v=1570901270462",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum porro et, dolorem architecto modi cupiditate commodi, mollitia fugiat quos facilis animi fugit. Ducimus repellat saepe voluptatibus vel autem est ipsa? Quisquam necessitatibus quaerat quasi odit recusandae voluptatum, eveniet animi? Iste consectetur iure dignissimos dolorem quibusdam, quasi et adipisci nostrum numquam porro velit quod magnam incidunt eius maiores sit? Rem, totam. Sit asperiores ratione molestias aperiam itaque consequatur cumque provident, fuga inventore eos at quidem ex illo nesciunt voluptatum odio accusamus similique? Illum unde quae odio. Ex sit laborum necessitatibus aspernatur.",
    name: "Dr. Bikash Sinha",
    sub_heading: "Scientist and Engineer",
    meta: ["10:30AM"]
  },
  {
    image_url: "https://cdn.glitch.com/c47a0ebc-acce-4028-b82e-4a3a99120c05%2FBikash%20Sinha.jpg?v=1570901270462",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum porro et, dolorem architecto modi cupiditate commodi, mollitia fugiat quos facilis animi fugit. Ducimus repellat saepe voluptatibus vel autem est ipsa? Quisquam necessitatibus quaerat quasi odit recusandae voluptatum, eveniet animi? Iste consectetur iure dignissimos dolorem quibusdam, quasi et adipisci nostrum numquam porro velit quod magnam incidunt eius maiores sit? Rem, totam. Sit asperiores ratione molestias aperiam itaque consequatur cumque provident, fuga inventore eos at quidem ex illo nesciunt voluptatum odio accusamus similique? Illum unde quae odio. Ex sit laborum necessitatibus aspernatur.",
    name: "Dr. Bikash Sinha",
    sub_heading: "Scientist and Engineer",
    meta: ["10:30AM"]
  },
];

speakerData.forEach( spkData => document.querySelector(".speaker-list").appendChild(makeLecture(spkData)) );