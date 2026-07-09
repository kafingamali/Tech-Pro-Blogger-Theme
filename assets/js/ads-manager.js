/* TECH PRO ADS MANAGER */

document.addEventListener("DOMContentLoaded", function(){

  const ads = document.querySelectorAll(".tp-ad");

  ads.forEach(function(ad){

    if(ad.innerText.includes("728x90")){
      ad.innerHTML = `
        <div class="tp-ad-inner">
          <strong>ADSTERRA 728x90</strong>
          <small>Area iklan header / bawah artikel</small>
        </div>
      `;
    }

    if(ad.innerText.includes("300x250")){
      ad.innerHTML = `
        <div class="tp-ad-inner">
          <strong>ADSTERRA 300x250</strong>
          <small>Area iklan sidebar</small>
        </div>
      `;
    }

  });

});
