document.querySelector('.nav-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
});

ScrollReveal().reveal('.showcase', { delay: 400 });
ScrollReveal().reveal('.cards', { delay: 1000 });
ScrollReveal().reveal('.devicons', { delay: 700 });