const hamburger = document.querySelector('.hamburger');
const menuOverlay = document.querySelector('.menu-overlay');
const closeMenu = document.querySelector('.close');

hamburger.addEventListener('click', () => {
    menuOverlay.classList.add('active');
});

closeMenu.addEventListener('click', () => {
    menuOverlay.classList.remove('active');
});
