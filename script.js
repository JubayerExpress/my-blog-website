const genreFilter = document.getElementById('genreFilter');
const sortOption = document.getElementById('sortOption');
const bookGrid = document.querySelector('.book-grid');

// Sample book data (replace with your actual data)
const books = [
    { 
        id: 1, 
        title: "The Lord of the Rings", 
        author: "J.R.R. Tolkien", 
        genre: "Fantasy", 
        image: "images/book1.jpg", 
        summary: "A long and complex epic...", 
        authorPage: "author-details.html?id=1" 
    },
    { 
        id: 2, 
        title: "To Kill a Mockingbird", 
        author: "Harper Lee", 
        genre: "Fiction", 
        image: "images/book2.jpg", 
        summary: "A classic novel about racial injustice...", 
        authorPage: "author-details.html?id=2" 
    },
    { 
        id: 3, 
        title: "1984", 
        author: "George Orwell", 
        genre: "Science Fiction", 
        image: "images/book3.jpg", 
        summary: "A dystopian novel about totalitarian control...", 
        authorPage: "author-details.html?id=3" 
    },
    { 
        id: 4, 
        title: "Pride and Prejudice", 
        author: "Jane Austen", 
        genre: "Romance", 
        image: "images/book4.jpg", 
        summary: "A timeless story of love and social class...", 
        authorPage: "author-details.html?id=4" 
    },
    { 
        id: 5, 
        title: "The Catcher in the Rye", 
        author: "J.D. Salinger", 
        genre: "Fiction", 
        image: "images/book5.jpg", 
        summary: "A coming-of-age story about alienation...", 
        authorPage: "author-details.html?id=5" 
    },
    { 
        id: 6, 
        title: "The Hobbit", 
        author: "J.R.R. Tolkien", 
        genre: "Fantasy", 
        image: "images/book6.jpg", 
        summary: "A classic adventure story...", 
        authorPage: "author-details.html?id=1" 
    },
    { 
        id: 7, 
        title: "The Alchemist", 
        author: "Paulo Coelho", 
        genre: "Fiction", 
        image: "images/book7.jpg", 
        summary: "A philosophical novel about following your dreams...", 
        authorPage: "author-details.html?id=6" 
    },
    { 
        id: 8, 
        title: "The Picture of Dorian Gray", 
        author: "Oscar Wilde", 
        genre: "Gothic", 
        image: "images/book8.jpg", 
        summary: "A chilling story about the dangers of vanity...", 
        authorPage: "author-details.html?id=7" 
    },
    { 
        id: 9, 
        title: "The Adventures of Huckleberry Finn", 
        author: "Mark Twain", 
        genre: "Adventure", 
        image: "images/book9.jpg", 
        summary: "A classic American novel about freedom and friendship...", 
        authorPage: "author-details.html?id=8" 
    },
    { 
        id: 10, 
        title: "The Count of Monte Cristo", 
        author: "Alexandre Dumas", 
        genre: "Adventure", 
        image: "images/book10.jpg", 
        summary: "A tale of revenge and redemption...", 
        authorPage: "author-details.html?id=9" 
    },
    { 
        id: 11, 
        title: "Moby Dick", 
        author: "Herman Melville", 
        genre: "Adventure", 
        image: "images/book11.jpg", 
        summary: "A classic tale of obsession and the sea...", 
        authorPage: "author-details.html?id=10" 
    },
    { 
        id: 12, 
        title: "The Great Gatsby", 
        author: "F. Scott Fitzgerald", 
        genre: "Fiction", 
        image: "images/book12.jpg", 
        summary: "A poignant exploration of the American Dream...", 
        authorPage: "author-details.html?id=11" 
    },
    { 
        id: 13, 
        title: "Wuthering Heights", 
        author: "Emily Brontë", 
        genre: "Gothic", 
        image: "images/book13.jpg", 
        summary: "A passionate and tragic love story...", 
        authorPage: "author-details.html?id=12" 
    },
    { 
        id: 14, 
        title: "The Catcher in the Rye", 
        author: "J.D. Salinger", 
        genre: "Fiction", 
        image: "images/book14.jpg", 
        summary: "A coming-of-age story about alienation...", 
        authorPage: "author-details.html?id=13" 
    },
    { 
        id: 15, 
        title: "The Hobbit", 
        author: "J.R.R. Tolkien", 
        genre: "Fantasy", 
        image: "images/book15.jpg", 
        summary: "A classic adventure story...", 
        authorPage: "author-details.html?id=14" 
    },
    { 
        id: 16, 
        title: "The Alchemist", 
        author: "Paulo Coelho", 
        genre: "Fiction", 
        image: "images/book16.jpg", 
        summary: "A philosophical novel about following your dreams...", 
        authorPage: "author-details.html?id=15" 
    },
    { 
        id: 17, 
        title: "The Picture of Dorian Gray", 
        author: "Oscar Wilde", 
        genre: "Gothic", 
        image: "images/book17.jpg", 
        summary: "A chilling story about the dangers of vanity...", 
        authorPage: "author-details.html?id=16" 
    },
    { 
        id: 18, 
        title: "The Adventures of Huckleberry Finn", 
        author: "Mark Twain", 
        genre: "Adventure", 
        image: "images/book18.jpg", 
        summary: "A classic American novel about freedom and friendship...", 
        authorPage: "author-details.html?id=17" 
    },
    { 
        id: 19, 
        title: "The Count of Monte Cristo", 
        author: "Alexandre Dumas", 
        genre: "Adventure", 
        image: "images/book19.jpg", 
        summary: "A tale of revenge and redemption...", 
        authorPage: "author-details.html?id=18" 
    },
    { 
        id: 20, 
        title: "Moby Dick", 
        author: "Herman Melville", 
        genre: "Adventure", 
        image: "images/book20.jpg", 
        summary: "A classic tale of obsession and the sea...", 
        authorPage: "author-details.html?id=19" 
    },
    { 
        id: 21, 
        title: "The Great Gatsby", 
        author: "F. Scott Fitzgerald", 
        genre: "Fiction", 
        image: "images/book21.jpg", 
        summary: "A poignant exploration of the American Dream...", 
        authorPage: "author-details.html?id=20" 
    },
    { 
        id: 22, 
        title: "Wuthering Heights", 
        author: "Emily Brontë", 
        genre: "Gothic", 
        image: "images/book22.jpg", 
        summary: "A passionate and tragic love story...", 
        authorPage: "author-details.html?id=21" 
    },
    { 
        id: 2, 
        title: "To Kill a Mockingbird", 
        author: "Harper Lee", 
        genre: "Fiction", 
        image: "images/book2.jpg", 
        summary: "A classic novel about racial injustice...", 
        authorPage: "author-details.html?id=2" 
    },
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

        const authorLink = document.createElement('a');
        authorLink.href = book.authorPage;
        authorLink.textContent = book.author;

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
        card.appendChild(authorLink); 
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
