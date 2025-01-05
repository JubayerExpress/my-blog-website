// Sorting function
const genreSelect = document.getElementById('book-genre');
genreSelect.addEventListener('change', () => {
    const selectedGenre = genreSelect.value;
    const books = document.querySelectorAll('.book-card');
    
    books.forEach(book => {
        if (selectedGenre === "" || book.classList.contains(selectedGenre)) {
            book.style.display = "block";
        } else {
            book.style.display = "none";
        }
    });
});

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
