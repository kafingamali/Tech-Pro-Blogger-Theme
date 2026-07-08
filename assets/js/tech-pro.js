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
