// Particle Creation
function createParticles() {
    const container = document.getElementById('particles');
    if (container) {
        for (let i = 0; i < 100; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.width = particle.style.height = `${Math.random() * 3 + 2}px`;
            particle.style.animationDelay = `${Math.random() * 10}s`;
            container.appendChild(particle);
        }
    }
}

// Mouse Move Interaction (3D Effect)
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.card');
    const x = (window.innerWidth / 2 - e.pageX) / 50;
    const y = (window.innerHeight / 2 - e.pageY) / 50;

    cards.forEach(card => {
        card.style.transform = `
            perspective(1000px) 
            rotateY(${x}deg) 
            rotateX(${-y}deg)
        `;
    });
});

// Intersection Observer for Animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.1 });

// Apply observer to all cards
document.querySelectorAll('.card').forEach(el => observer.observe(el));

// Initialize particles on page load
window.addEventListener('load', createParticles);

// Hamburger Menu Toggle
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".menu-toggle"); // Corrected class
    const navLinks = document.querySelector(".nav-links");

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", function () {
            navLinks.classList.toggle("show");
        });
    }
});
