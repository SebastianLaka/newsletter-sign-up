'use strict';

const input = document.querySelector(".verification-area__input")
const ctaButton = document.querySelector('.verification-area__cta')
ctaButton.addEventListener('click', ()=>{
    if(input.value === ''){
        const errorInfo = document.querySelector('.label-area__requierd')
        errorInfo.style.visibility = 'visible';
    } 
})