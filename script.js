// DOM Elements (for interacting with the HTML)
const genreFilter = document.getElementById('genreFilter'); // Selects the genre filter dropdown
const sortOption = document.getElementById('sortOption'); // Selects the sort option dropdown
const bookGrid = document.querySelector('.book-grid'); // Selects the book grid container

// Sample book data (replace with your actual data)
const books = [
    // List of book objects with properties such as id, title, author, genre, image, etc.
];

// Function to filter and sort books
function filterAndSortBooks() {
  const selectedGenre = genreFilter.value; // Get the selected genre from the filter
  const selectedSort = sortOption.value; // Get the selected sorting option

  let filteredBooks = books.slice(); // Create a copy of the books array to avoid modifying original data

  if (selectedGenre !== 'all') {
    filteredBooks = filteredBooks.filter(book => book.genre === selectedGenre); // Filter books by genre
  }

  if (selectedSort === 'title') {
    filteredBooks.sort((a, b) => a.title.localeCompare(b.title)); // Sort books by title
  } else if (selectedSort === 'author') {
    filteredBooks.sort((a, b) => a.author.localeCompare(b.author)); // Sort books by author
  } else if (selectedSort === 'recent') {
    // Sort books by date if a date property exists (you would need to modify the book objects)
    filteredBooks.sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  // Update the UI with filtered and sorted books
  updateBookGrid(filteredBooks);
}

// Function to update the book grid with book cards
function updateBookGrid(books) {
  bookGrid.innerHTML = ''; // Clear the existing book grid content

  books.forEach(book => {
    // Create a new book card with details such as image, title, author, and genre
    const card = document.createElement('div');
    card.classList.add('book-card'); // Add a class for styling

    const img = document.createElement('img'); // Image element for book cover
    img.src = book.image;
    img.alt = book.title;

    const title = document.createElement('h3'); // Title element
    title.textContent = book.title;

    const authorLink = document.createElement('a'); // Author link element
    authorLink.href = book.authorPage;
    authorLink.textContent = book.author;

    const genre = document.createElement('p'); // Genre text element
    genre.textContent = `Genre: ${book.genre}`;

    const readMoreBtn = document.createElement('a'); // "Read More" button
    readMoreBtn.href = `book-details.html?id=${book.id}`;
    readMoreBtn.classList.add('btn');
    readMoreBtn.textContent = 'Read More';

    const readSummaryBtn = document.createElement('a'); // "Read Summary" button
    readSummaryBtn.href = `summary.html?book=${book.id}`;
    readSummaryBtn.classList.add('btn');
    readSummaryBtn.textContent = 'Read Summary';

    // Append all elements to the card and then the card to the grid
    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(authorLink);
    card.appendChild(genre);
    card.appendChild(readMoreBtn);
    card.appendChild(readSummaryBtn);

    bookGrid.appendChild(card); // Append the card to the grid
  });
}

// Add sorting by recently added (extra option)
sortOption.innerHTML += '<option value="recent">Recently Added</option>';

// Initial load: call the function to display the books
filterAndSortBooks();

// Event listeners: trigger the filtering and sorting when the user selects a genre or sort option
genreFilter.addEventListener('change', filterAndSortBooks);
sortOption.addEventListener('change', filterAndSortBooks);
