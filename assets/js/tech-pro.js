/* TECH PRO BLOGGER THEME - CLEAN VERSION */
document.addEventListener("DOMContentLoaded", function(){

  const header = document.querySelector(".tp-header");
  const searchBtn = document.getElementById("tpSearchBtn");
  const darkBtn = document.getElementById("tpDarkBtn");
  const menuBtn = document.getElementById("tpMenuBtn");
  const mobileMenu = document.getElementById("tpMobileMenu");
  const searchPopup = document.getElementById("tpSearchPopup");
  const searchClose = document.getElementById("tpSearchClose");
  const searchInput = document.getElementById("tpSearchInput");
  const progressBar = document.getElementById("tpProgress");

  function updateScrollEffects(){
    if(header){
      if(window.scrollY > 80){
        header.style.boxShadow = "0 15px 40px rgba(0,0,0,.35)";
        header.style.background = "rgba(7,17,31,.95)";
      }else{
        header.style.boxShadow = "none";
        header.style.background = "rgba(7,17,31,.88)";
      }
    }

    if(progressBar){
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressBar.style.width = progress + "%";
    }
  }

  window.addEventListener("scroll", updateScrollEffects);
  updateScrollEffects();

  if(localStorage.getItem("theme") === "light"){
    document.body.classList.add("light-mode");
  }

  if(darkBtn){
    darkBtn.addEventListener("click", function(){
      document.body.classList.toggle("light-mode");
      localStorage.setItem("theme", document.body.classList.contains("light-mode") ? "light" : "dark");
    });
  }

  if(menuBtn && mobileMenu){
    menuBtn.addEventListener("click", function(e){
      e.preventDefault();
      mobileMenu.classList.toggle("active");
    });

    mobileMenu.querySelectorAll("a").forEach(function(link){
      link.addEventListener("click", function(){
        mobileMenu.classList.remove("active");
      });
    });
  }

  if(searchBtn && searchPopup && searchInput){
    searchBtn.addEventListener("click", function(e){
      e.preventDefault();
      searchPopup.classList.add("active");
      setTimeout(function(){ searchInput.focus(); }, 200);
    });
  }

  if(searchClose && searchPopup){
    searchClose.addEventListener("click", function(){
      searchPopup.classList.remove("active");
    });
  }

  if(searchPopup){
    searchPopup.addEventListener("click", function(e){
      if(e.target === searchPopup){
        searchPopup.classList.remove("active");
      }
    });
  }

  if(searchInput){
    searchInput.addEventListener("keydown", function(e){
      if(e.key === "Enter"){
        const keyword = searchInput.value.trim();
        if(keyword.length > 0){
          window.location.href = "https://www.kafingamali.my.id/search?q=" + encodeURIComponent(keyword);
        }
      }
    });
  }

  const slides = document.querySelectorAll(".tp-slide");
  const slideButtons = document.querySelectorAll(".tp-small-card[data-slide]");
  let currentSlide = 0;

  function showSlide(index){
    if(!slides.length || !slides[index]) return;

    slides.forEach(function(slide){
      slide.classList.remove("active");
    });

    slideButtons.forEach(function(btn){
      btn.classList.remove("active");
    });

    slides[index].classList.add("active");

    const btn = document.querySelector('.tp-small-card[data-slide="' + index + '"]');
    if(btn) btn.classList.add("active");

    currentSlide = index;
  }

  slideButtons.forEach(function(btn){
    btn.addEventListener("click", function(){
      showSlide(Number(btn.dataset.slide));
    });
  });

  if(slides.length){
    setInterval(function(){
      let next = currentSlide + 1;
      if(next >= slides.length) next = 0;
      showSlide(next);
    }, 4500);
  }

  document.querySelectorAll(".tp-post").forEach(function(card){
    card.addEventListener("mouseenter", function(){
      card.style.transform = "translateY(-6px)";
    });
    card.addEventListener("mouseleave", function(){
      card.style.transform = "translateY(0)";
    });
  });

  const topBtn = document.createElement("button");
  topBtn.innerHTML = "▲";
  topBtn.className = "tp-top";
  document.body.appendChild(topBtn);

  topBtn.addEventListener("click", function(){
    window.scroll({ top:0, behavior:"smooth" });
  });

  window.addEventListener("scroll", function(){
    if(window.scrollY > 400){
      topBtn.style.opacity = "1";
      topBtn.style.pointerEvents = "auto";
    }else{
      topBtn.style.opacity = "0";
      topBtn.style.pointerEvents = "none";
    }
  });

});
