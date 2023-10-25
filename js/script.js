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
  e.preventDefault();
  const validateEmail = function () {
    const isValid = function (email) {
        const regex = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@[*[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+]*/;
         regex.test(email)
      };
      isValid(email);

    if (input.value ===  'email@company.com') {
      newsletterSuccesPopup.style.display = "flex";
      errorInfo.style.visibility = "hidden";
      newsletter.style.display = "none";
      emailInContent.innetText = emailForValidation;
    } else if (input.value === "") {
      errorInfo.classList.add('show-error')
    }
  };
  validateEmail();

  const backToMain = function () {
    if (dissMissCTA) {
      newsletterSuccesPopup.style.display = "none";
      newsletter.style.display = "grid";
    }
  };
  dissMissCTA.addEventListener("click", backToMain);
});