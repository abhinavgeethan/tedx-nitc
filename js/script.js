let headerElem=document.querySelector("header"),menuBtnElem=document.querySelector("header .menu-btn"),navElem=document.querySelector("nav");const fixedScrollValue=20;let isScrolled=!1,isMenuActive=!1;function showNav(){navElem.classList.add("active"),menuBtnElem.classList.add("active"),setTimeout(()=>{navElem.style.opacity=1},20)}function hideNav(){navElem.style.opacity="",menuBtnElem.classList.remove("active"),setTimeout(()=>{navElem.classList.remove("active")},300)}menuBtnElem.addEventListener("click",()=>{isMenuActive?(isMenuActive=!1,hideNav()):(isMenuActive=!0,showNav())}),navElem.addEventListener("click",e=>{e.target==navElem&&(isMenuActive=!1,hideNav())}),document.addEventListener("scroll",e=>{let t=window.pageYOffset;isScrolled&&t<20?(isScrolled=!1,headerElem.style.transform="translateY(20px)",headerElem.style.backgroundColor="#00000000",headerElem.style.position="absolute",document.querySelector("main").style.marginTop=""):!isScrolled&&t>=20&&(isScrolled=!0,document.querySelector("main").style.marginTop="90px",headerElem.style.transform="translateY(0px)",headerElem.style.backgroundColor="#090909",headerElem.style.position="fixed")}),window.addEventListener("load",()=>{setTimeout(()=>{let e=document.querySelector(".loading"),t=e.querySelector(".ball"),l=e.querySelector(".stroker");l.style.animation="none",l.style.strokeDashoffset=0,t.style.transform="scale(3)",setTimeout(()=>{l.style.fill="#E60000",setTimeout(()=>{document.body.style.overflowY="auto",e.style.opacity=0,setTimeout(()=>{e.style.display="none"},500)},700)},700)},700)});