// GSAP Logo Animation - Cyberpunk Hacker Scramble
document.addEventListener("DOMContentLoaded", () => {
    const logoText = document.querySelector(".logo-text");
    const logoBracket = document.querySelector(".logo-bracket");
    const logoSlash = document.querySelector(".logo-slash");

    const finalName = "Youssef Errachid";
    const chars = "!<>-_\\\\/[]{}—=+*^?#";
    
    // Initial setup: Reserve space for the text
    logoText.style.width = "auto";
    logoText.style.opacity = "1";
    logoText.textContent = "\u00A0".repeat(finalName.length);
    
    // Calculate width to position brackets in the center initially
    const centerOffset = logoText.offsetWidth / 2;
    gsap.set(logoBracket, { x: centerOffset, opacity: 0 });
    gsap.set(logoSlash, { x: -centerOffset, opacity: 0 });

    // Core scramble logic
    const scrambleText = (element, targetText, duration = 1000) => {
        let startTime = Date.now();
        clearInterval(element.scrambleInterval);
        
        element.scrambleInterval = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            element.innerText = targetText
                .split("")
                .map((letter, index) => {
                    if (letter === " ") return " ";
                    if (index < targetText.length * progress) {
                        return letter; // Reveal actual letter
                    }
                    // Random hacker char
                    return chars[Math.floor(Math.random() * chars.length)];
                })
                .join("");
            
            if (progress >= 1) {
                clearInterval(element.scrambleInterval);
                element.innerText = targetText;
            }
        }, 30);
    };

    const tl = gsap.timeline({ delay: 0.2 });
    
    // 1. Brackets fade in from the center and slide apart
    tl.to([logoBracket, logoSlash], { 
        x: 0, 
        opacity: 1, 
        duration: 1, 
        ease: "expo.out"
    });
    
    // 2. Start scrambling slightly after brackets begin moving
    setTimeout(() => {
        scrambleText(logoText, finalName, 1200);
    }, 300);
      
    // Hover animation - Glitch & Scramble interaction
    const logo = document.getElementById("main-logo");
    logo.addEventListener("mouseenter", () => {
        gsap.to(logoBracket, { color: "var(--text-light)", scale: 1.1, x: -4, duration: 0.3 });
        gsap.to(logoSlash, { color: "var(--text-light)", scale: 1.1, x: 4, duration: 0.3 });
        gsap.to(logoText, { color: "var(--accent)", duration: 0.3 });
        
        // Trigger a fast scramble on hover
        scrambleText(logoText, finalName, 500);
    });
    
    logo.addEventListener("mouseleave", () => {
        gsap.to(logoBracket, { color: "var(--accent)", scale: 1, x: 0, duration: 0.3 });
        gsap.to(logoSlash, { color: "var(--accent)", scale: 1, x: 0, duration: 0.3 });
        gsap.to(logoText, { color: "var(--text-light)", duration: 0.3 });
        
        // Instantly resolve if mouse leaves during scramble
        clearInterval(logoText.scrambleInterval);
        logoText.innerText = finalName;
    });
});

// Custom Cursor
const cursorDot = document.getElementById('cursor-dot');
const cursorOutline = document.getElementById('cursor-outline');

window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // Adding slight delay for outline
    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});

// Hide cursor when leaving window
document.addEventListener('mouseleave', () => {
    cursorDot.style.display = 'none';
    cursorOutline.style.display = 'none';
});
document.addEventListener('mouseenter', () => {
    cursorDot.style.display = 'block';
    cursorOutline.style.display = 'block';
});

// Current Year for Footer
document.getElementById('year').textContent = new Date().getFullYear();

// Navbar Scroll Effect & Active Links
const navbar = document.getElementById('navbar');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 10px 30px -10px rgba(2, 12, 27, 0.7)';
        navbar.style.height = '70px';
    } else {
        navbar.style.boxShadow = 'none';
        navbar.style.height = '80px';
    }

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Mobile Menu
const hamburger = document.getElementById('hamburger');
const navLinksMenu = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinksMenu.classList.toggle('nav-active');
    const icon = hamburger.querySelector('i');
    if(navLinksMenu.classList.contains('nav-active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinksMenu.classList.remove('nav-active');
        hamburger.querySelector('i').classList.remove('fa-times');
        hamburger.querySelector('i').classList.add('fa-bars');
    });
});

// Scroll Reveal Animations
function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
    }
}
window.addEventListener('scroll', reveal);
reveal(); // Trigger on load

// Typewriter Effect
const phrases = [
    "Building Digital Solutions.",
    "Crafting Robust Applications.",
    "Evolving Full-Stack Dev.",
    "Passionate Problem Solver."
];
let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;

function loop() {
    isEnd = false;
    document.getElementById('typewriter').innerHTML = currentPhrase.join('');

    if (i < phrases.length) {
        if (!isDeleting && j <= phrases[i].length) {
            currentPhrase.push(phrases[i][j]);
            j++;
        }

        if (isDeleting && j <= phrases[i].length) {
            currentPhrase.pop(phrases[i][j]);
            j--;
        }

        if (j == phrases[i].length) {
            isEnd = true;
            isDeleting = true;
        }

        if (isDeleting && j === 0) {
            currentPhrase = [];
            isDeleting = false;
            i++;
            if (i == phrases.length) { i = 0; }
        }
    }
    const spedUp = Math.random() * (80 - 50) + 50;
    const normalSpeed = Math.random() * (200 - 100) + 100;
    const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed;
    setTimeout(loop, time);
}
loop();

// Project Filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        projects.forEach(project => {
            if (filterValue === 'all' || project.getAttribute('data-cat') === filterValue) {
                project.style.display = 'flex';
                project.style.animation = 'none';
                requestAnimationFrame(() => {
                    project.style.animation = '';
                    project.classList.add('active');
                });
            } else {
                project.style.display = 'none';
            }
        });
    });
});

// Show More / Show Less toggle (delegated — avoids whitespace textContent bug)
document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-toggle="true"]');
    if (!btn) return;
    const content = btn.closest('.project-content');
    if (!content) return;
    const isExpanded = content.classList.toggle('expanded');
    btn.textContent = isExpanded ? 'Show less' : 'Show more';
});

// Copy to Clipboard
const copyBtn = document.getElementById('copy-btn');
if (copyBtn) {
    const emailText = document.getElementById('email-text').innerText;
    const toast = document.getElementById('toast');

    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(emailText).then(() => {
            toast.classList.add('show');
            copyBtn.innerHTML = '<i class="fas fa-check"></i>';
            setTimeout(() => {
                toast.classList.remove('show');
                copyBtn.innerHTML = '<i class="far fa-copy"></i>';
            }, 2000);
        });
    });
}

// Contact Form Submission
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const submitBtn = contactForm.querySelector('.submit-btn');
        const originalBtnText = submitBtn.innerHTML;
        
        // Show loading state
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin" style="margin-left: 10px;"></i>';
        
        // Simulate email sending
        setTimeout(() => {
            // Status update
            formStatus.textContent = 'Thank you! Your message has been sent successfully.';
            formStatus.className = 'form-status success';
            
            // Reset form
            contactForm.reset();
            
            // Restore button
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
            
            // Clear status after 5 seconds
            setTimeout(() => {
                formStatus.style.opacity = '0';
                setTimeout(() => {
                    formStatus.textContent = '';
                    formStatus.className = 'form-status';
                    formStatus.style.opacity = '1';
                }, 300);
            }, 5000);
            
        }, 1500);
    });
}
