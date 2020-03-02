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
    image_url: "https://cdn.glitch.com/1db8d091-7a7f-4d80-a4fe-2ae6168bd7a9%2F2.jpg?v=1583061219652",
    description: "Anjali Menon is a poet, film and theatre critic, playwright, content strategist, and a food and travel blogger. She completed her master's degree in English Literature from Christ University, Bangalore. She has more than 200 poems published across multiple channels. She is currently a content writer working with LinkedIn and is the founder of a community-based organization called 'Have a Word' that features poets and musicians.",
    name: "Anjali Menon",
    sub_heading: "Poet, Film and Theatre critic",
    meta: []
  },
  {
    image_url: "https://cdn.glitch.com/1db8d091-7a7f-4d80-a4fe-2ae6168bd7a9%2F7.jpg?v=1583061219244",
    description: "Prof. Kana M. Sureshan is a world-class Research Scientist at IISER Thiruvananthapuram. His research interests include the development of materials for environmental protection and healthcare. He has published about 100 research papers in highly reputed international journals and filed six patents. He has given more than 100 invited talks and plenary lectures at various international conferences worldwide. He was awarded the Innocentive award (USA) for designing the shortest and economic route for the tuberculosis drug, PA-824. In recognition of his outstanding research, he was awarded the Ramanujan fellowship by Govt of India, Swarnajayanti fellowship by Govt of India, young scientist award by YIM Boston, USA, Bhagyatara Award by Panjab University and the Technology Innovation Award for the year 2020 by the Govt. of India. He has also received the bronze medal from Chemical Research Society of India and MRSI medal from Materials Research Society of India. In 2018, he was elected as the Fellow of Royal Society of Chemistry, U. K and in 2020, he has been elected as the Fellow of Indian Academy of Sciences. He is a member of various professional organizations worldwide.",
    name: "Prof. Kana M. Sureshan",
    sub_heading: "Scientist<br />IISER Trivandrum",
    meta: []
  },
  {
    image_url: "https://cdn.glitch.com/1db8d091-7a7f-4d80-a4fe-2ae6168bd7a9%2F9.jpg?v=1583061220294",
    description: "With numerous songs to her credit in over 6 languages, Sruthy Sasidharan is a well known face in the industry and a renowned playback singer. Ms. Sruthy started learning music at the young age of 4 and performed in various TV channels, radio programmes and festivals. While pursuing her career in engineering, she realized her true passion for music and later left her job to pursue a career in music. She stepped into the world of playback singing with the song \"Kiya kiva\" from the movie Akashamittayi. Down the line her song \"Kadhale\" from the movie \"Maradona\" topped the charts and brought her many award nominations and wider recognition.",
    name: "Sruthy Sasidharan",
    sub_heading: "Playback Singer",
    meta: []
  },
  {
    image_url: "https://cdn.glitch.com/1db8d091-7a7f-4d80-a4fe-2ae6168bd7a9%2F5.jpg?v=1583061219527",
    description: "A communications professional with two decades of experience, Bhavna spearheads the OPPI's communications function and works on multi-stakeholder advocacy and communication programmes. Her online campaigns and talks at prestigious platorms have won her recognition both in India and globally.",
    name: "Bhavna Singh",
    sub_heading: "Senior Director - Communications and Patient Advocacy at OPPI",
    meta: []
  },
  {
    image_url: "https://cdn.glitch.com/1db8d091-7a7f-4d80-a4fe-2ae6168bd7a9%2F4.jpg?v=1583061218587",
    description: "Sreenath Sasikumar is the CEO and founder of MashupStack. He has been listed in Google hall of fame and has been honoured with the position of Deputy commander with Kerala police cyber dome. He is the technical reviewer of three books by Packt Publications UK, contributor to Global OWASP Top 10 list, Owasp Kerala board member and speaker. For his technical contributions, he has received awards from the Home Minister of Kerala in 2017, from the Chief minister of Kerala in 2018 and from the DGP of Kerala in 2019. He was also the global board member of Mozilla add-ons review committee.",
    name: "Sreenath Sasikumar",
    sub_heading: "CEO and founder of MashupStack",
    meta: []
  },
  {
    image_url: "https://cdn.glitch.com/1db8d091-7a7f-4d80-a4fe-2ae6168bd7a9%2F10.jpg?v=1583061221037",
    description: "Pavi Sankar, a Kerala based digital artist who goes by the username of 'Sarcasanam' passes social commentary and re-imagines familiar Malayali motifs with ample amount of dry wit and creative flair. While his artworks are spectacular owing to his skill and conceptualization, the truth bombs that Pavi often drops is another aspect that has raised his popularity.",
    name: "Pavi Sankar",
    sub_heading: "Artist",
    meta: []
  },
  {
    image_url: "https://cdn.glitch.com/1db8d091-7a7f-4d80-a4fe-2ae6168bd7a9%2F6.jpg?v=1583061219463",
    description: "Kavitha Emmanuel is a social activist, trainer, motivational speaker and founder of the Women of Worth (WOW) movement. She has one goal: To empower women to be the best they can be and restore their God-given dignity, value and worth. She sees the hidden potential in women and their constant struggle to fit into moulds dictated by societal and cultural norms. She launched the Dark is Beautiful campaign in March 2009 to address the toxic belief that a person's worth is measured by the colour of their skin.",
    name: "Kavitha Emmanuel",
    sub_heading: "Founder of Women of Worth",
    meta: []
  },
  {
    image_url: "https://cdn.glitch.com/1db8d091-7a7f-4d80-a4fe-2ae6168bd7a9%2F1.jpg?v=1583061209157",
    description: "Puja believes that children should be at the heart of all human development work. This belief informs her passionate interest and involvement in children and their potential. Over the course of her work, Puja has been involved in the nurturing of a large number of organisations and people, enabling them to connect at the level of individual belief, to the vision of all rights, for all children.",
    name: "Puja Marwaha",
    sub_heading: "CEO of CRY-Child Rights and You",
    meta: []
  },
  {
    image_url: "https://cdn.glitch.com/1db8d091-7a7f-4d80-a4fe-2ae6168bd7a9%2F3.jpg?v=1583061218103",
    description: "Dola Mohapatra is currently the Executive Director of Rise Against Hunger India, an international hunger relief organization that envisions a hunger-free world. He was responsible for establishing the organization in India and developing programme strategies for the country operations. In a short span of about 5 years, Rise Against Hunger India has been able to mobilize nearly 45,000 volunteers from over 50 corporate groups across the country and with their support nearly 10 million meals have been packaged and served to vulnerable groups.",
    name: "Dola Mohapatra",
    sub_heading: "Executive Director of Rise Against Hunger India",
    meta: []
  },
  {
    image_url: "https://cdn.glitch.com/1db8d091-7a7f-4d80-a4fe-2ae6168bd7a9%2F8.jpg?v=1583061220196",
    description: "Thalappil Pradeep is an Institute Professor and Professor of chemistry in the Department of Chemistry at the Indian Institute of Technology Madras. In 2020, he received the Padma Shri award for his distinguished work in the field of Science and Technology. He has also received the Shanti Swarup Bhatnagar Prize for Science and Technology in 2008 by Council of Scientific and Industrial Research.",
    name: "Prof. Thalappil Pradeep",
    sub_heading: "Padma Shri Awardee<br />Professor, IIT Madras",
    meta: []
  },
  {
    image_url: "https://cdn.glitch.com/1db8d091-7a7f-4d80-a4fe-2ae6168bd7a9%2FIMG_2322_cropped-min.jpg?v=1583154641020",
    description: "Dr. P.P.Anilkumar, Professor and Head, Department of Architecture and Planning, NIT Calicut has about 30 years of teaching and research experience in the field of Urban Planning and Architecture. He is the author of the book ‘Introduction to Smart Cities’ published by Pearson Education which is the pioneering reference on Smart Cities. He has published widely, won awards and writes popular articles on Urban Planning related topics in dailies and magazines and has travelled wide.",
    name: "Dr. P.P.Anilkumar",
    sub_heading: "Prof and HOD of Architecture and Planning, NIT Calicut",
    meta: []
  }
];

speakerData.forEach( spkData => document.querySelector(".speaker-list").appendChild(makeLecture(spkData)) );