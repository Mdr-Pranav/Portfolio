// Initialize AOS with consistent settings
AOS.init({
    once: false,  // Whether animation should happen only once - while scrolling down
    mirror: false, // Whether elements should animate out while scrolling past them
    offset: 120,  // Offset (in px) from the original trigger point
    duration: 800, // Default duration for all animations
    easing: 'ease-in-out' // Default easing function
});

// Apply animations to project page elements
document.addEventListener('DOMContentLoaded', function() {
    // Hero section animations
    const heroTitle = document.querySelector('.project-hero h1');
    const heroDescription = document.querySelector('.project-hero p');
    const heroTags = document.querySelectorAll('.project-hero .project-tags');
    
    if (heroTitle) {
        heroTitle.setAttribute('data-aos', 'fade-up');
        heroTitle.setAttribute('data-aos-duration', '800');
    }
    
    if (heroDescription) {
        heroDescription.setAttribute('data-aos', 'fade-up');
        heroDescription.setAttribute('data-aos-duration', '800');
        heroDescription.setAttribute('data-aos-delay', '200');
    }
    
    heroTags.forEach((tagGroup, index) => {
        tagGroup.setAttribute('data-aos', 'fade-up');
        tagGroup.setAttribute('data-aos-duration', '800');
        tagGroup.setAttribute('data-aos-delay', (300 + (index * 100)).toString());
    });

    // Project content animations
    const projectImages = document.querySelectorAll('.project-image-large');
    const projectSections = document.querySelectorAll('.project-details > h2');
    const projectParagraphs = document.querySelectorAll('.project-details > p');
    const projectLists = document.querySelectorAll('.project-details > ul');
    const projectNav = document.querySelector('.project-nav');
    const featureList = document.querySelectorAll('.feature-list li');
    const challengeSolutions = document.querySelectorAll('.challenge-solution');

    // Apply animations to project images
    projectImages.forEach((img, index) => {
        img.setAttribute('data-aos', 'fade-up');
        img.setAttribute('data-aos-duration', '800');
        img.setAttribute('data-aos-delay', (index * 100).toString());
    });

    // Apply animations to section headings
    projectSections.forEach((section, index) => {
        section.setAttribute('data-aos', 'fade-up');
        section.setAttribute('data-aos-duration', '800');
        section.setAttribute('data-aos-delay', (index * 100).toString());
    });

    // Apply animations to paragraphs
    projectParagraphs.forEach((p, index) => {
        p.setAttribute('data-aos', 'fade-up');
        p.setAttribute('data-aos-duration', '800');
        p.setAttribute('data-aos-delay', (index * 100).toString());
    });

    // Apply animations to lists
    projectLists.forEach((list, index) => {
        list.setAttribute('data-aos', 'fade-up');
        list.setAttribute('data-aos-duration', '800');
        list.setAttribute('data-aos-delay', (index * 100).toString());
    });

    // Apply animations to feature list items
    featureList.forEach((item, index) => {
        item.setAttribute('data-aos', 'fade-up');
        item.setAttribute('data-aos-duration', '800');
        item.setAttribute('data-aos-delay', (index * 100).toString());
    });

    // Apply animations to challenge-solution pairs
    challengeSolutions.forEach((pair, index) => {
        pair.setAttribute('data-aos', 'fade-up');
        pair.setAttribute('data-aos-duration', '800');
        pair.setAttribute('data-aos-delay', (index * 100).toString());
    });

    // Apply animation to navigation
    if (projectNav) {
        projectNav.setAttribute('data-aos', 'fade-up');
        projectNav.setAttribute('data-aos-duration', '800');
        projectNav.setAttribute('data-aos-delay', '200');
    }
}); 