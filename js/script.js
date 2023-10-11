'use strict';

const input = document.querySelector(".verification-area__input")
const ctaButton = document.querySelector('.verification-area__cta')
const newsletterSuccesPopup = document.querySelector('.newsletter-succes')
const emailInContent = document.querySelector('.newsletter-about__info--email')
console.log(newsletterSuccesPopup, emailInContent);
ctaButton.addEventListener('click', ()=>{
    
    
    let regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    const validateEmail = function(){
    if(input.value === ''){
        const errorInfo = document.querySelector('.label-area__requierd')
        errorInfo.style.visibility = 'visible';
    } 
}
validateEmail();
})