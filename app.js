// app.js - JavaScript File for Optional Interactivity

// Example 1: Scroll to Top Button
const scrollToTopButton = document.querySelector('.scroll-to-top');

// Show or hide the button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

// Add event listener to scroll to the top when clicked
scrollToTopButton.addEventListener('click', () =>
