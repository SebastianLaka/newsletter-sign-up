"use strict";

const newsletter = document.querySelector(".newsletter-body");
console.log(newsletter);
const input = document.querySelector(".verification-area__input");
const ctaButton = document.querySelector(".verification-area__cta");
const emailInContent = document.querySelector(".newsletter-about__info--email");
const newsletterSuccesPopup = document.querySelector(".newsletter-succes");
console.log(newsletterSuccesPopup);
const errorInfo = document.querySelector(".label-area__requierd");
const dissMissCTA = document.querySelector(".newsletter-succes-body__cta");

ctaButton.addEventListener("click", () => {
 
  // const isValid = function (email) {
  //   const regex = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@[*[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+]*/;
  //    regex.test(email)
  // };
  // isValid(email);
  const showPopup = function(){
    newsletterSuccesPopup.classList.add('show-newsletter-succes')
    newsletter.classList.add('newsletter-hide')
    errorInfo.classList.remove('show-error')
  }
  const validateEmail = function () {
    if (input.value ===  'email@company.com') {
      showPopup();
    }else{
      errorInfo.classList.add('show-error')
    }
  };
  validateEmail();

  const backToMain = function () {
    // if (dissMissCTA) {
    //   newsletterSuccesPopup.style.display = "none";
    //   newsletter.style.display = "grid";
    // }
    newsletterSuccesPopup.classList.remove('show-newsletter-succes')
  };
  dissMissCTA.addEventListener("click", backToMain);
  
});