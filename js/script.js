'use strict';

const ctaButton = document.querySelector(".verification-area__input")

ctaButton.addEventListener('click', ()=>{
    const errorInfo = document.querySelector('.label-area__requierd')
    console.log(errorInfo);
})