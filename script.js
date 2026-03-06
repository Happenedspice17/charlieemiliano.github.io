document.addEventListener('DOMContentLoaded', () => {
    // Reveal animations on scroll
    const reveals = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    reveals.forEach(reveal => {
        revealObserver.observe(reveal);
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 48, // Subtract nav height
                    behavior: 'smooth'
                });
            }
        });
    });

    // Subtle parallax effect for hero
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroH1 = document.querySelector('.hero h1');
        const heroP = document.querySelector('.hero p');
        
        if (heroH1) {
            heroH1.style.transform = `translateY(${scrolled * 0.3}px)`;
            heroH1.style.opacity = 1 - (scrolled / 500);
        }
        if (heroP) {
            heroP.style.transform = `translateY(${scrolled * 0.2}px)`;
            heroP.style.opacity = 1 - (scrolled / 400);
        }
    });
});
