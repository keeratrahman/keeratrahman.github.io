// main.js - Personal Website Interactivity & Dynamic Content

document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Keerat Rahman’s personal site initialized.');

    // Load background images from data-bg attributes
    applyDynamicBackgrounds();

    // Example: Add interactivity to a button (if present)
    setupButtonInteractions();
});

/**
 * Apply background images to sections with class 'bg-section' using data-bg attribute.
 */
function applyDynamicBackgrounds() {
    const sections = document.querySelectorAll('.bg-section');
    sections.forEach(section => {
        const bg = section.getAttribute('data-bg');
        if (bg) {
            section.style.backgroundImage = `url(${bg})`;
        }
    });
}

/**
 * Set up interactivity for example buttons (expandable for future).
 */
function setupButtonInteractions() {
    const button = document.getElementById('myButton');
    if (button) {
        button.addEventListener('click', () => {
            alert('Button clicked!');
        });
    }
}
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Keerat Rahman’s personal site initialized.');

    applyDynamicBackgrounds();
    setupButtonInteractions();
    setupScrollAnimations(); // ← new
});

/**
 * Scroll-triggered animations using IntersectionObserver
 */
function setupScrollAnimations() {
    const fadeIns = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // animate once
            }
        });
    }, {
        threshold: 0.2
    });

    fadeIns.forEach(el => observer.observe(el));
}
