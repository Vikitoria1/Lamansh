const btn = document.querySelector('.menu-btn');
const inner = document.querySelector('.header__inner');

btn.addEventListener('click', ()=>{
    inner.classList.toggle('menu-open');
});