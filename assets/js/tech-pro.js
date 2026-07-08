/* ===================================================
   TECH PRO BLOGGER THEME
   Version 1.0
=================================================== */

document.addEventListener("DOMContentLoaded",()=>{

/*==============================
    STICKY HEADER
==============================*/

const header=document.querySelector(".tp-header");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.style.boxShadow="0 15px 40px rgba(0,0,0,.35)";
header.style.background="rgba(7,17,31,.95)";

}else{

header.style.boxShadow="none";
header.style.background="rgba(7,17,31,.88)";

}

});


/*==============================
      DARK MODE
==============================*/

const darkBtn=document.querySelector(".tp-action button:last-child");

darkBtn.onclick=function(){

document.body.classList.toggle("light-mode");

localStorage.setItem(
"theme",
document.body.classList.contains("light-mode")
?
"light"
:
"dark"
);

}

if(localStorage.getItem("theme")=="light"){

document.body.classList.add("light-mode");

}


/*==============================
      SEARCH
==============================*/

const searchBtn=document.querySelector(".tp-action button:first-child");

searchBtn.onclick=function(){

alert("Fitur Search akan dibuat pada Tahap berikutnya.");

}


/*==============================
      CARD HOVER
==============================*/

document.querySelectorAll(".tp-post").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-6px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});


/*==============================
     HERO BUTTON
==============================*/

const hero=document.querySelector(".tp-btn");

hero.onclick=function(e){

e.preventDefault();

window.scroll({

top:650,

behavior:"smooth"

});

}


/*==============================
     BACK TO TOP
==============================*/

const topBtn=document.createElement("button");

topBtn.innerHTML="▲";

topBtn.className="tp-top";

document.body.appendChild(topBtn);

topBtn.onclick=function(){

window.scroll({

top:0,

behavior:"smooth"

});

}

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.opacity="1";
topBtn.style.pointerEvents="auto";

}else{

topBtn.style.opacity="0";
topBtn.style.pointerEvents="none";

}

});

});

/*==============================
      HERO SLIDER
==============================*/

const slides = document.querySelectorAll(".tp-slide");
const slideButtons = document.querySelectorAll(".tp-small-card[data-slide]");
let currentSlide = 0;

function showSlide(index){
  slides.forEach(slide => slide.classList.remove("active"));
  slideButtons.forEach(btn => btn.classList.remove("active"));

  slides[index].classList.add("active");

  const btn = document.querySelector('.tp-small-card[data-slide="'+index+'"]');
  if(btn){
    btn.classList.add("active");
  }

  currentSlide = index;
}

slideButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    showSlide(Number(btn.dataset.slide));
  });
});

setInterval(() => {
  let next = currentSlide + 1;
  if(next >= slides.length){
    next = 0;
  }
  showSlide(next);
}, 4500);

/*==============================
      PROGRESS BAR
==============================*/

const progressBar = document.getElementById("tpProgress");

window.addEventListener("scroll",()=>{

  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

  if(progressBar){
    progressBar.style.width = progress + "%";
  }

});


/*==============================
      SEARCH POPUP
==============================*/

const searchPopup = document.getElementById("tpSearchPopup");
const searchClose = document.getElementById("tpSearchClose");
const searchInput = document.getElementById("tpSearchInput");

searchBtn.onclick=function(){

  searchPopup.classList.add("active");

  setTimeout(()=>{
    searchInput.focus();
  },200);

}

searchClose.onclick=function(){

  searchPopup.classList.remove("active");

}

searchPopup.addEventListener("click",(e)=>{

  if(e.target === searchPopup){
    searchPopup.classList.remove("active");
  }

});

searchInput.addEventListener("keydown",(e)=>{

  if(e.key === "Enter"){

    const keyword = searchInput.value.trim();

    if(keyword.length > 0){
      window.location.href = "https://www.kafingamali.my.id/search?q=" + encodeURIComponent(keyword);
    }

  }

});

/*==============================
      MOBILE MENU
==============================*/

const menuBtn = document.getElementById("tpMenuBtn");
const mobileMenu = document.getElementById("tpMobileMenu");

if(menuBtn && mobileMenu){
  menuBtn.onclick = function(){
    mobileMenu.classList.toggle("active");
  }
}

