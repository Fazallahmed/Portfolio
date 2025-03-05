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

// Responsive Mobile Menu
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    if (menuToggle && menu) {
        menuToggle.addEventListener("click", function (event) {
            event.stopPropagation();
            menu.classList.toggle("active");

            // Ensure body overflow is handled to prevent background scrolling
            document.body.classList.toggle("menu-open", menu.classList.contains("active"));
        });

        document.addEventListener("click", function (event) {
            if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
                menu.classList.remove("active");
                document.body.classList.remove("menu-open");
            }
        });

        menu.addEventListener("click", function (event) {
            event.stopPropagation();
        });

    } else {
        console.error("Menu or Menu Toggle button not found!");
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-btn"); // Button for menu
    const navLinks = document.querySelector(".nav-links"); // The menu items

    menuBtn.addEventListener("click", function () {
        navLinks.classList.toggle("active"); // Toggle class on click
    });
});
