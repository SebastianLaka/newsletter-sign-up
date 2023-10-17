'use strict';

const input = document.querySelector(".verification-area__input")
const ctaButton = document.querySelector('.verification-area__cta')
const emailInContent = document.querySelector('.newsletter-about__info--email')
const newsletterSuccesPopup = document.querySelector('.newsletter-succes')
const newsletter = document.querySelector('.newsletter-body')
const errorInfo = document.querySelector('.label-area__requierd')
const dissMissCTA = document.querySelector('.newsletter-succes-body__cta')

ctaButton.addEventListener('click', ()=>{
    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]')
    const validateEmail = function(){
     if(input.value === 'email@company.com'){
            newsletterSuccesPopup.style.display = 'flex';
            errorInfo.style.visibility = 'hidden';
            newsletter.style.display = 'none';        
    }
    else if(input.value === ''){
        errorInfo.style.visibility = 'visible'; 
    }
}
    const backToMain = function(){
        if(dissMissCTA){
            newsletterSuccesPopup.style.display = 'none';
            newsletter.style.display ='grid';
        }
    }
dissMissCTA.addEventListener('click', backToMain)
validateEmail();

})