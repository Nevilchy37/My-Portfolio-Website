document.addEventListener('DOMContentLoaded', () => {
    // Inject current year into footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // --------- SCROLL REVEAL ANIMATIONS ---------
    const revealElements = document.querySelectorAll('.reveal');
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: stop observing once revealed
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });
    
    // Auto-reveal the hero elements immediately upon load
    setTimeout(() => {
        const initialElements = document.querySelectorAll('.hero-section, .floating-nav');
        initialElements.forEach(el => el.classList.add('active'));
    }, 100);
});
