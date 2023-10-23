"use strict";

const input = document.querySelector(".verification-area__input");
const ctaButton = document.querySelector(".verification-area__cta");
const emailInContent = document.querySelector(".newsletter-about__info--email");
const newsletterSuccesPopup = document.querySelector(".newsletter-succes");
const newsletter = document.querySelector(".newsletter-body");
const errorInfo = document.querySelector(".label-area__requierd");
const dissMissCTA = document.querySelector(".newsletter-succes-body__cta");
const emailForValidation = document.getElementById("email");

ctaButton.addEventListener("click", e => {
  const validateEmail = function () {
    e.preventDefault();
    const isValid = function () {
        let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
         const active = regex.test();
         return active
      };
      isValid();
    if (input.value === isValid()) {
      newsletterSuccesPopup.style.display = "flex";
      errorInfo.style.visibility = "hidden";
      newsletter.style.display = "none";
      emailInContent.innetText = emailForValidation;
    } else if (input.value === "") {
      errorInfo.style.visibility = "visible";
    }
  };

  const backToMain = function () {
    if (dissMissCTA) {
      newsletterSuccesPopup.style.display = "none";
      newsletter.style.display = "grid";
    }
  };
  dissMissCTA.addEventListener("click", backToMain);
  validateEmail();
});