// app.js - JavaScript File for Optional Interactivity

// Example 1: Scroll to Top Button
const scrollToTopButton = document.createElement('button');
scrollToTopButton.textContent = 'Back to Top';
scrollToTopButton.classList.add('scroll-to-top');
document.body.appendChild(scrollToTopButton);

// Add event listener to scroll to the top when clicked
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Example 2: Toggle Navigation Menu (If you plan to add a menu later)
const menuButton = document.querySelector('.menu-button');
const navMenu = document.querySelector('.nav-menu');

if (menuButton) {
    menuButton.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Example 3: Dynamic Blog Post Preview (Lazy Load Blog Titles)
document.querySelectorAll('.blog-preview').forEach(blog => {
    blog.addEventListener('mouseover', function() {
        this.querySelector('.blog-title').style.color = '#ff6347'; // Change title color on hover
    });

    blog.addEventListener('mouseout', function() {
        this.querySelector('.blog-title').style.color = ''; // Reset color on mouse out
    });
});
