// Script to apply animations to all project page elements
document.addEventListener('DOMContentLoaded', function() {
    // Apply animations to the content elements if AOS library is available
    if (typeof AOS !== 'undefined') {
        // Apply animations to hero section elements
        applyAnimation('.project-hero h1', 'fade-up', 800);
        applyAnimation('.project-hero p', 'fade-up', 800, 200);
        applyAnimation('.project-hero .project-tags', 'fade-up', 800, 300);
        
        // Apply animations to main content elements
        applyAnimation('.project-image-large', 'fade-up', 800);
        applyAnimation('.project-details h2', 'fade-up', 800);
        applyAnimation('.project-details h3', 'fade-up', 800, 100);
        applyAnimation('.project-details > p', 'fade-up', 800, 100);
        
        // Apply staggered animations to lists and special elements
        applyStaggeredAnimation('.feature-list li', 'fade-up', 800, 100);
        applyStaggeredAnimation('.challenge-solution', 'fade-up', 800, 100);
        applyStaggeredAnimation('.project-details > ul > li', 'fade-up', 800, 100);
        applyStaggeredAnimation('.project-details > ol > li', 'fade-up', 800, 100);
        
        // Apply animation to navigation
        applyAnimation('.project-nav', 'fade-up', 800);
        
        // Initialize AOS with desired settings
        AOS.init({
            once: false,         // Whether animation should happen only once
            mirror: false,       // Whether elements should animate out while scrolling past them
            offset: 120,         // Offset (in px) from the original trigger point
            duration: 800,       // Default duration
            easing: 'ease-in-out' // Default easing function
        });
    }
    
    // Helper function to apply animation to elements
    function applyAnimation(selector, animation, duration, delay = 0) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
            if (!el.hasAttribute('data-aos')) {
                el.setAttribute('data-aos', animation);
                el.setAttribute('data-aos-duration', duration);
                if (delay) {
                    el.setAttribute('data-aos-delay', delay);
                }
            }
        });
    }
    
    // Helper function to apply staggered animations
    function applyStaggeredAnimation(selector, animation, duration, baseDelay) {
        const elements = document.querySelectorAll(selector);
        elements.forEach((el, index) => {
            if (!el.hasAttribute('data-aos')) {
                el.setAttribute('data-aos', animation);
                el.setAttribute('data-aos-duration', duration);
                const staggeredDelay = baseDelay + (index * 100);
                el.setAttribute('data-aos-delay', staggeredDelay);
            }
        });
    }
}); 