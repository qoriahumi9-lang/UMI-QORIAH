// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when a nav link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const htmlElement = document.documentElement;

// Check for saved user preference
const savedMode = localStorage.getItem('darkMode');
if (savedMode === 'light') {
    htmlElement.style.filter = 'invert(1) hue-rotate(180deg)';
} else {
    localStorage.setItem('darkMode', 'dark');
}

darkModeToggle.addEventListener('click', () => {
    const currentMode = localStorage.getItem('darkMode');
    
    if (currentMode === 'dark') {
        htmlElement.style.filter = 'invert(1) hue-rotate(180deg)';
        localStorage.setItem('darkMode', 'light');
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        htmlElement.style.filter = 'none';
        localStorage.setItem('darkMode', 'dark');
        darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll animation for sections
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.6s ease-out';
    observer.observe(section);
});

// CTA Button Animation
const ctaButton = document.querySelector('.cta-button');
ctaButton.addEventListener('click', () => {
    const projectsSection = document.getElementById('projects');
    projectsSection.scrollIntoView({ behavior: 'smooth' });
});

console.log('Portfolio loaded successfully!');