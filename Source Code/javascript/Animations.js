// JavaScript code to trigger line animation when the page loads
window.addEventListener('load', function() {
    document.querySelector('.header-text').classList.add('animate');
});


function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
