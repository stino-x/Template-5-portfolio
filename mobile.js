const about = document.querySelector('#about');
const mother = document.querySelector('main');
const section = document.createElement('section');


section.classList.add('section-2');
section.setAttribute('id', 'portfolio');
h2.innerText = bodyS.text;


mother.insertBefore(section, about);

const body = document.body;
const bodyS = [{
    css: `width: 98vw; height: 100vh;`,
    text: 'franck'
}, { css1: 'width: 100%, height: 300px'}]

body.style.cssText = bodyS[0].css; 
