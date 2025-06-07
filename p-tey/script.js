document.addEventListener('DOMContentLoaded', () => {
    // --- Smooth Scrolling for Navigation ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // --- Active Navigation Link Styling (Optional but recommended) ---
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.5 // When 50% of the section is visible
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove active class from all links
                navLinks.forEach(link => link.classList.remove('active'));
                // Add active class to the corresponding link
                const targetId = entry.target.id;
                document.querySelector(`.nav-links a[href="#${targetId}"]`).classList.add('active');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });


    // --- Dark Mode Toggle ---
    const darkModeToggle = document.getElementById('dark-mode-switch');
    const body = document.body;

    // Check for user's preferred mode or saved preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light-mode') {
        body.classList.add('light-mode');
        darkModeToggle.checked = false; // Ensure switch matches state
    } else {
        // Default to dark mode if no preference or saved as dark
        body.classList.remove('light-mode');
        darkModeToggle.checked = true; // Ensure switch matches state
    }


    darkModeToggle.addEventListener('change', () => {
        if (darkModeToggle.checked) {
            body.classList.remove('light-mode');
            localStorage.setItem('theme', 'dark-mode');
        } else {
            body.classList.add('light-mode');
            localStorage.setItem('theme', 'light-mode');
        }
    });

    // --- Footer Year Update ---
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // --- Simple Hero Animation (More complex with GSAP or custom canvas) ---
    // For this example, we'll use CSS animations for the hero section
    // and rely on the 'scroll-behavior: smooth' for the rest.
    // If you want more complex JS animations, you'd integrate libraries like
    // particles.js or build custom canvas animations here.
    // For now, the hero content has basic CSS animations defined.

    // Example of a subtle background animation with JS (optional, for .hero-animation-overlay)
    // You could draw a dynamic grid, subtle particles, or connecting lines.
    // This is just a conceptual placeholder; implementing full canvas animation is more complex.
    const heroOverlay = document.querySelector('.hero-animation-overlay');
    if (heroOverlay) {
        // You could add dynamic dots or a subtle flicker here with JS
        // e.g., create and animate small div elements, or use a canvas
        // For a true "gamer" feel, consider a particles.js integration
        // or a custom canvas script that draws connecting lines or a grid.
    }
});