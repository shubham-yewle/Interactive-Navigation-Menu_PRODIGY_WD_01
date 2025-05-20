// Change navbar style when scrolling  js
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {   // when scrolling  50px in window
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});