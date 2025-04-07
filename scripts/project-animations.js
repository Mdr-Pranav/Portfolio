// Script to add animations to project page elements
document.addEventListener('DOMContentLoaded', function() {
    // Apply animations to hero section elements
    applyAnimation('.project-hero h1', 'fade-up', 800);
    applyAnimation('.project-hero p', 'fade-up', 800, 200);
    applyAnimation('.project-hero .project-tags', 'fade-up', 800, 300);
    
    // Apply animations to content section elements
    applyAnimation('.project-image-large', 'fade-up', 800);
    applyAnimation('.project-details h2', 'fade-up', 800);
    applyAnimation('.project-details > p', 'fade-up', 800, 100);
    
    // Apply staggered animations to lists
    applyStaggeredAnimation('.feature-list li', 'fade-up', 800, 100);
    applyStaggeredAnimation('.challenge-solution', 'fade-up', 800, 100);
    applyStaggeredAnimation('.project-details > ul > li', 'fade-up', 800, 100);
    applyStaggeredAnimation('.project-details > ol > li', 'fade-up', 800, 100);
    
    // Initialize AOS
    AOS.init({
        once: false,
        mirror: false,
        offset: 120
    });
    
    // Helper function to apply animation to elements
    function applyAnimation(selector, animation, duration, delay = 0) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
            el.setAttribute('data-aos', animation);
            el.setAttribute('data-aos-duration', duration);
            if (delay) {
                el.setAttribute('data-aos-delay', delay);
            }
        });
    }
    
    // Helper function to apply staggered animations
    function applyStaggeredAnimation(selector, animation, duration, baseDelay) {
        const elements = document.querySelectorAll(selector);
        elements.forEach((el, index) => {
            el.setAttribute('data-aos', animation);
            el.setAttribute('data-aos-duration', duration);
            const staggeredDelay = baseDelay + (index * 100);
            el.setAttribute('data-aos-delay', staggeredDelay);
        });
    }
}); 