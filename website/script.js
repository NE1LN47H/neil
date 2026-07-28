const toggleButton = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (toggleButton && navLinks) {
    toggleButton.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('active');
        toggleButton.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            toggleButton.setAttribute('aria-expanded', 'false');
        });
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('active');
            toggleButton.setAttribute('aria-expanded', 'false');
        }
    });
}
