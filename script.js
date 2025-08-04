// Mobile Menu Toggle
function toggleMobileMenu() {
    const navLinks = document.getElementById('nav-links');
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const body = document.body;

    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
    body.classList.toggle('menu-open');
}

// Services Cards Initialization
function initializeServicesCards() {
    const cardsContainer = document.getElementById('cards-container');

    // Service data with placeholder images
    const servicesData = [
        { 
            title: "App Development", 
            name: "Mobile Apps",
            image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=400&fit=crop&crop=center",
            description: "We create innovative mobile applications for iOS and Android platforms that engage users and drive business growth through intuitive design and robust functionality." 
        },
        { 
            title: "Web Development", 
            name: "Web Solutions",
            image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=400&fit=crop&crop=center",
            description: "Custom web development solutions that combine modern design with powerful functionality to create responsive, user-friendly websites that convert visitors into customers." 
        },
        { 
            title: "Graphic Design", 
            name: "Visual Design",
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=400&fit=crop&crop=center",
            description: "Creative graphic design services that bring your brand to life through compelling visual storytelling, from logos and branding to marketing materials and digital assets." 
        },
        { 
            title: "Video Editing", 
            name: "Video Production",
            image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=400&fit=crop&crop=center",
            description: "Professional video editing and production services that transform raw footage into engaging content for marketing, social media, and corporate communications." 
        }
    ];

    const createCard = (data) => {
        const card = document.createElement('div');
        card.className = 'content fade-in';
        card.innerHTML = `
            <span>${data.title}</span>
            <img src="${data.image}" alt="${data.title}" class="card-icon" />
            <div class="card-title">${data.name}</div>
            <p>${data.description}</p>
        `;
        return card;
    };

    const renderCards = (services) => {
        cardsContainer.innerHTML = '';
        
        services.forEach(data => {
            cardsContainer.appendChild(createCard(data));
        });
    };

    // Render the service cards
    renderCards(servicesData);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            const navLinksContainer = document.getElementById('nav-links');
            const menuToggle = document.querySelector('.mobile-menu-toggle');
            const body = document.body;

            navLinksContainer.classList.remove('active');
            menuToggle.classList.remove('active');
            body.classList.remove('menu-open');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (e) {
        const navLinks = document.getElementById('nav-links');
        const menuToggle = document.querySelector('.mobile-menu-toggle');
        const nav = document.querySelector('nav');

        if (!nav.contains(e.target) && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });

    // Handle window resize
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            const navLinks = document.getElementById('nav-links');
            const menuToggle = document.querySelector('.mobile-menu-toggle');
            const body = document.body;

            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
            body.classList.remove('menu-open');
        }
    });

    // Initialize Services Cards
    initializeServicesCards();

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = Math.random() * 0.3 + 's';
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe all elements with fade-in class
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Header background on scroll
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'var(--header-bg)';
        header.style.backdropFilter = 'blur(20px)';
    } else {
        header.style.background = 'var(--header-bg)';
    }
});

// Add loading animation to cards
window.addEventListener('load', function () {
    const cards = document.querySelectorAll('.activity-card, .content');
    cards.forEach((card, index) => {
        card.style.animationDelay = (index * 0.1) + 's';
    });
});

// Additional utility functions
const TechnoVED = {
    // Initialize all components
    init: function() {
        this.setupScrollEffects();
        this.setupParallax();
        this.setupAnimations();
    },

    // Setup scroll-based effects
    setupScrollEffects: function() {
        let ticking = false;

        function updateScrollEffects() {
            const scrolled = window.pageYOffset;
            const parallax = document.querySelectorAll('.geometric-shapes .shape');
            const speed = scrolled * 0.5;

            parallax.forEach((element, index) => {
                const yPos = -(speed / (index + 1));
                element.style.transform = `translateY(${yPos}px)`;
            });

            ticking = false;
        }

        function requestScrollUpdate() {
            if (!ticking) {
                requestAnimationFrame(updateScrollEffects);
                ticking = true;
            }
        }

        window.addEventListener('scroll', requestScrollUpdate);
    },

    // Setup parallax effects
    setupParallax: function() {
        const shapes = document.querySelectorAll('.floating-square');
        
        window.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;

            shapes.forEach((shape, index) => {
                const speed = (index + 1) * 0.05;
                const x = (mouseX - 0.5) * speed * 100;
                const y = (mouseY - 0.5) * speed * 100;
                
                shape.style.transform = `rotate(45deg) translate(${x}px, ${y}px)`;
            });
        });
    },

    // Setup additional animations
    setupAnimations: function() {
        // Add hover effects to service cards
        const serviceCards = document.querySelectorAll('.content');
        
        serviceCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px) scale(1.02)';
            });

            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Add click effects to activity cards
        const activityCards = document.querySelectorAll('.activity-card');
        
        activityCards.forEach(card => {
            card.addEventListener('click', function() {
                // Add a ripple effect
                const ripple = document.createElement('div');
                ripple.style.position = 'absolute';
                ripple.style.borderRadius = '50%';
                ripple.style.background = 'rgba(120, 105, 245, 0.3)';
                ripple.style.transform = 'scale(0)';
                ripple.style.animation = 'ripple 0.6s linear';
                ripple.style.left = '50%';
                ripple.style.top = '50%';
                ripple.style.width = '100px';
                ripple.style.height = '100px';
                ripple.style.marginLeft = '-50px';
                ripple.style.marginTop = '-50px';
                ripple.style.pointerEvents = 'none';

                this.appendChild(ripple);

                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });

        // Add ripple animation keyframes
        const style = document.createElement('style');
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
};

// Initialize TechnoVED utilities when page loads
window.addEventListener('load', () => {
    TechnoVED.init();
});

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { TechnoVED, toggleMobileMenu, initializeServicesCards };
}
