const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); 

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Send data to server (replace with your actual server-side code)
    // For example, using Fetch API:
    fetch('/send-email', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
    })
    .then(response => {
        if (response.ok) {
            alert('Message sent successfully!');
            contactForm.reset(); // Clear form fields
        } else {
            alert('Error sending message. Please try again later.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    });
});
// JavaScript for filtering and sorting (replace with your actual data and logic)
const genreFilter = document.getElementById('genreFilter');
const sortOption = document.getElementById('sortOption');
const bookGrid = document.querySelector('.book-grid');

// Sample book data (replace with your actual data)
const books = [
    { id: 1, title: "The Lord of the Rings", author: "J.R.R. Tolkien", genre: "Fantasy", image: "images/book1.jpg" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction", image: "images/book2.jpg" },
    // ... more books
];

// Function to filter and sort books
function filterAndSortBooks() {
    const selectedGenre = genreFilter.value;
    const selectedSort = sortOption.value;

    let filteredBooks = books;

    if (selectedGenre !== 'all') {
        filteredBooks = filteredBooks.filter(book => book.genre === selectedGenre);
    }

    if (selectedSort === 'title') {
        filteredBooks.sort((a, b) => a.title.localeCompare(b.title));
    } else if (selectedSort === 'author') {
        filteredBooks.sort((a, b) => a.author.localeCompare(b.author));
    }

    // Update the UI with filtered and sorted books
    updateBookGrid(filteredBooks);
}

// Function to update the book grid
function updateBookGrid(books) {
    bookGrid.innerHTML = ''; 

    books.forEach(book => {
        const card = document.createElement('div');
        card.classList.add('book-card');

        const img = document.createElement('img');
        img.src = book.image;
        img.alt = book.title;

        const title = document.createElement('h3');
        title.textContent = book.title;

        const author = document.createElement('p');
        author.textContent = `By ${book.author}`;

        const genre = document.createElement('p');
        genre.textContent = `Genre: ${book.genre}`;

        const readMoreBtn = document.createElement('a');
        readMoreBtn.href = `book-details.html?id=${book.id}`;
        readMoreBtn.classList.add('btn');
        readMoreBtn.textContent = 'Read More';

        const readSummaryBtn = document.createElement('a');
        readSummaryBtn.href = `summary.html?book=${book.id}`;
        readSummaryBtn.classList.add('btn');
        readSummaryBtn.textContent = 'Read Summary';

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(genre);
        card.appendChild(readMoreBtn);
        card.appendChild(readSummaryBtn);

        bookGrid.appendChild(card);
    });
}

// Initial load
filterAndSortBooks();

// Event listeners
genreFilter.addEventListener('change', filterAndSortBooks);
sortOption.addEventListener('change', filterAndSortBooks);
