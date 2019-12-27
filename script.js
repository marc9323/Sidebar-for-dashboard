document.querySelector('.hamburger-menu').addEventListener('click', ()=> {
    // add class if doesn't exist, remove if it does, toggle it
    document.querySelector('.container').classList.toggle('change');
});

document.querySelector('.nav-list').addEventListener('click', (e)=> {
    // parent element of the clicked element
    const el = e.target.parentElement;
   // console.log(el);
   if(el.classList[0] == 'nav-link'){
       el.nextElementSibling.classList.toggle('change');
       el.classList.toggle('change');
   }
});