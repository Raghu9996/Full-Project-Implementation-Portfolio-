
        // Loader
        window.addEventListener('load', () => {
            setTimeout(() => {
                document.getElementById('loader').classList.add('hidden');
            }, 500);
        });

        // Mobile menu toggle
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.getElementById('navLinks');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Smooth scrolling and active nav
        const navLinksAll = document.querySelectorAll('.nav-link');
        
        navLinksAll.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(link.getAttribute('href'));
                const offset = 80;
                const targetPosition = target.offsetTop - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Update active state
                navLinksAll.forEach(l => l.classList.remove('active'));
                link.classList.add('active');

                // Close mobile menu
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        // Navbar scroll effect
        const navbar = document.getElementById('navbar');
        let lastScroll = 0;

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }

            // Update active section
            const sections = document.querySelectorAll('section');
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                const sectionBottom = sectionTop + section.offsetHeight;
                
                if (currentScroll >= sectionTop && currentScroll < sectionBottom) {
                    const correspondingLink = document.querySelector(`.nav-link[href="#${section.id}"]`);
                    if (correspondingLink) {
                        navLinksAll.forEach(l => l.classList.remove('active'));
                        correspondingLink.classList.add('active');
                    }
                }
            });

            lastScroll = currentScroll;
        });

        // Scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Form submission
        const contactForm = document.getElementById('contactForm');
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Here you would normally send the data to a server
            console.log('Form submitted:', data);
            
            // Show success message
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });

        // Add some interactive effects
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('click', function() {
                // You could open a modal or navigate to project details
                console.log('Project clicked');
            });
        });

        // Parallax effect for hero section
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = document.querySelector('.hero-image');
            if (parallax) {
                const speed = 0.5;
                parallax.style.transform = `translateY(${scrolled * speed}px) rotate(5deg)`;
            }
        });


// Animate progress bars when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Animate skill bars
    setTimeout(() => {
        document.querySelectorAll('.progress-value').forEach(progress => {
            progress.style.width = progress.getAttribute('data-width');
        });
    }, 500);
    
    // Scroll animations for skills section
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Animate skill bars when in view
                if (entry.target.classList.contains('skills-card')) {
                    const skillBars = entry.target.querySelectorAll('.progress-value');
                    skillBars.forEach(progress => {
                        progress.style.width = progress.getAttribute('data-width');
                    });
                }
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
});