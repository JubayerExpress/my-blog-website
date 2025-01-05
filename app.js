// app.js - JavaScript for Advanced Interactivity

// Scroll to Top Button
const scrollToTopButton = document.querySelector('.scroll-to-top');

// Show the button after scrolling 200px
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

// Scroll to Top functionality
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Toggle Navigation Menu for Mobile
const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Dynamic Hover Effect for Blog Titles
document.querySelectorAll('.blog-card').forEach(blog => {
    blog.addEventListener('mouseover', () => {
        const blogTitle = blog.querySelector('.blog-info h3');
        blogTitle.style.color = '#ff6347';  // Highlight title
    });
    
    blog.addEventListener('mouseout', () => {
        const blogTitle = blog.querySelector('.blog-info h3');
        blogTitle.style.color = '';  // Reset title color
    });
});
