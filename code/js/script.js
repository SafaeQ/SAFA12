 
const btnMenu = document.querySelector('.btn-rond');
const nav = document.querySelector('.menu-bar');
const close = document.querySelector('.close-menu-btn')





btnMenu.addEventListener('click', ()=>{


    nav.classList.add('show-nav');

});

close.addEventListener('click', ()=>{


    nav.classList.remove('show-nav');

});




