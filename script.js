window.addEventListener('scroll', function() {
    const navbar = document.getElementById('nav-bar');
    const aboutSection = document.getElementById('about');
    const aboutSectionTop = aboutSection.getBoundingClientRect().top;

    if (aboutSectionTop <= 0) {
        navbar.style.position = 'relative';
    } else {
        navbar.style.position = 'fixed';
    }
});