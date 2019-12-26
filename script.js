document.querySelector('.hamburger-menu').addEventListener('click', ()=> {
    // add class if doesn't exist, remove if it does, toggle it
    document.querySelector('.container').classList.toggle('change');
});