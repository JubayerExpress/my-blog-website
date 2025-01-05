// app.js - JavaScript File for Optional Interactivity

// 1. Scroll to Top Button with Smooth Animation
const scrollToTopButton = document.createElement('button');
scrollToTopButton.textContent = '↑'; // Use an arrow symbol for better visual cue
scrollToTopButton.classList.add('scroll-to-top');
document.body.appendChild(scrollToTopButton);

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// 2. Toggle Navigation Menu with Smooth Transition
const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    // Add a smooth slide-in/out effect for the menu
    navLinks.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    navLinks.style.opacity = navLinks.classList.contains('active') ? 1 : 0;
    navLinks.style.transform = navLinks.classList.contains('active') ? 'translateY(0)' : 'translateY(-20px)'; 
});

// 3. Dynamic Blog Post Preview with Subtle Hover Effects
document.querySelectorAll('.blog-preview').forEach(blog => {
    blog.addEventListener('mouseover', () => {
        blog.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)'; // Increase shadow on hover
        blog.querySelector('.blog-title').style.color = '#ff6347'; // Change title color on hover
    });

    blog.addEventListener('mouseout', () => {
        blog.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)'; // Reset shadow
        blog.querySelector('.blog-title').style.color = ''; // Reset title color
    });
});

// 4. Optional: Image Lazy Loading (Improve performance)
const images = document.querySelectorAll('img');
const lazyLoadThreshold = 200; // Distance from viewport before loading

function lazyLoad() {
    images.forEach(img => {
        if (
            img.getBoundingClientRect().top <= window.innerHeight + lazyLoadThreshold && 
            !img.classList.contains('loaded')
        ) {
            img.src = img.dataset.src; 
            img.classList.add('loaded');
        }
    });
}

window.addEventListener('scroll', lazyLoad);
lazyLoad(); 

// 5. Optional: Smooth Page Transitions (If using a library like GSAP)
// ... (Add GSAP or similar library and implement smooth page transitions) 

// 6. Optional: Interactive Elements (e.g., Accordions, Modals, etc.)
// ... (Add JavaScript for interactive elements as needed)
