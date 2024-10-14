const bar = document.querySelector('.bar');
const navLinks = document.querySelector('.navbar');


bar.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});