'use strict';

const input = document.querySelector(".verification-area__input")
const ctaButton = document.querySelector('.verification-area__cta')
ctaButton.addEventListener('click', ()=>{
    const errorInfo = document.querySelector('.label-area__requierd')
    console.log(errorInfo);
})