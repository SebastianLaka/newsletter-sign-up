"use strict";

const newsletter = document.querySelector(".newsletter-body");
const input = document.querySelector(".verification-area__input");
const ctaButton = document.querySelector(".verification-area__cta");
const emailInContent = document.querySelector(".newsletter-about__info--email");

const newsletterSuccesPopup = document.querySelector(".newsletter-succes");
const errorInfo = document.querySelector(".label-area__requierd");
const dissMissCTA = document.querySelector(".newsletter-succes-body__cta");
const emailForValidation = document.getElementById("email");

ctaButton.addEventListener("click", () => {
 
  // const isValid = function (email) {
  //   const regex = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@[*[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+]*/;
  //    regex.test(email)
  // };
  // isValid(email);
  const validateEmail = function () {
    if (input.value ===  'email@company.com') {
      newsletterSuccesPopup.classList.add('show-newsletter-succes')
      errorInfo.classList.remove('show-error')
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
    newsletter.classList.add('newsletter-show')
  };
  dissMissCTA.addEventListener("click", backToMain);
  
});