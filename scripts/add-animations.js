// Script to add AOS animations to project pages
document.addEventListener('DOMContentLoaded', function() {
    // Add animation to project hero elements
    const projectHeroElements = {
        'h1': { animation: 'fade-up', duration: 800, delay: 0 },
        'p': { animation: 'fade-up', duration: 800, delay: 200 },
        '.project-tags': { animation: 'fade-up', duration: 800, delay: 300 }
    };
    
    // Add animation to project content elements
    const projectContentElements = {
        '.project-image-large': { animation: 'fade-up', duration: 800, delay: 0 },
        'h2': { animation: 'fade-up', duration: 800, delay: 0 },
        'p': { animation: 'fade-up', duration: 800, delay: 100 },
        '.feature-list li': { animation: 'fade-up', duration: 800, delay: 100, stagger: true },
        '.challenge-solution': { animation: 'fade-up', duration: 800, delay: 100, stagger: true },
        'ul li': { animation: 'fade-up', duration: 800, delay: 100, stagger: true },
        'ol li': { animation: 'fade-up', duration: 800, delay: 100, stagger: true }
    };
    
    // Apply animations to hero section
    const heroSection = document.querySelector('.project-hero');
    if (heroSection) {
        for (const [selector, config] of Object.entries(projectHeroElements)) {
            const elements = heroSection.querySelectorAll(selector);
            elements.forEach(el => {
                el.setAttribute('data-aos', config.animation);
                el.setAttribute('data-aos-duration', config.duration);
                if (config.delay) {
                    el.setAttribute('data-aos-delay', config.delay);
                }
            });
        }
    }
    
    // Apply animations to content section
    const contentSection = document.querySelector('.project-content');
    if (contentSection) {
        for (const [selector, config] of Object.entries(projectContentElements)) {
            const elements = contentSection.querySelectorAll(selector);
            elements.forEach((el, index) => {
                el.setAttribute('data-aos', config.animation);
                el.setAttribute('data-aos-duration', config.duration);
                
                // Apply staggered delay if configured
                if (config.stagger) {
                    const staggerDelay = config.delay + (index * 100);
                    el.setAttribute('data-aos-delay', staggerDelay);
                } else if (config.delay) {
                    el.setAttribute('data-aos-delay', config.delay);
                }
            });
        }
    }
    
    // Initialize AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({
            once: false,
            mirror: false,
            offset: 120
        });
    }
}); 