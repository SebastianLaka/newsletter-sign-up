"use strict";

const newsletter = document.querySelector(".newsletter-body");
console.log(newsletter);
const input = document.querySelector(".verification-area__input");
const ctaButton = document.querySelector(".verification-area__cta");
const emailInContent = document.querySelector(".newsletter-about__info--email");
const newsletterSuccesPopup = document.querySelector(".newsletter-succes");
const errorInfo = document.querySelector(".label-area__requierd");
console.log(newsletterSuccesPopup);
const dissMissCTA = document.querySelector(".newsletter-succes-body__cta");

ctaButton.addEventListener("click", () => {
 
  // const isValid = function (email) {
  //   const regex = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@[*[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+]*/;
  //    regex.test(email)
  // };
  // isValid(email);
  const showError = function(){
    errorInfo.classList.add('show-error')
  }
  const showPopup = function(){
    newsletterSuccesPopup.classList.add('show-newsletter-succes')
    newsletter.classList.add('hidden')
    errorInfo.classList.remove('show-error')
  }
  const validateEmail = function() {
    if (input.value === 'email@company.com') {
      showPopup();
    }else{
      showError();
    }
  };
  validateEmail();
  const backToMain = function() {
    newsletter.classList.remove('hidden')
    newsletterSuccesPopup.classList.remove('show-newsletter-succes')
  };
  dissMissCTA.addEventListener("click", backToMain);
});