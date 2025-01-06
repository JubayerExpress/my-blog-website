// Function to update the book grid
function updateBookGrid(books) {
  bookGrid.innerHTML = ''; // Clear the existing grid

  books.forEach(book => {
    const card = document.createElement('div');
    card.classList.add('book-card');

    // Book image
    const imgWrapper = document.createElement('div');
    imgWrapper.classList.add('book-img-wrapper');
    const img = document.createElement('img');
    img.src = book.image;
    img.alt = book.title;
    img.classList.add('book-img');
    imgWrapper.appendChild(img);

    // Book content container
    const contentWrapper = document.createElement('div');
    contentWrapper.classList.add('book-content');

    // Title of the book
    const title = document.createElement('h3');
    title.textContent = book.title;
    contentWrapper.appendChild(title);

    // Author link
    const authorLink = document.createElement('a');
    authorLink.href = book.authorPage;
    authorLink.textContent = book.author;
    authorLink.classList.add('author-link');
    contentWrapper.appendChild(authorLink);

    // Genre of the book
    const genre = document.createElement('p');
    genre.textContent = `Genre: ${book.genre}`;
    genre.classList.add('book-genre');
    contentWrapper.appendChild(genre);

    // Buttons for more actions
    const buttonWrapper = document.createElement('div');
    buttonWrapper.classList.add('button-wrapper');

    const readMoreBtn = document.createElement('a');
    readMoreBtn.href = `book-details.html?id=${book.id}`;
    readMoreBtn.classList.add('btn', 'read-more-btn');
    readMoreBtn.textContent = 'Read More';

    const readSummaryBtn = document.createElement('a');
    readSummaryBtn.href = `summary.html?book=${book.id}`;
    readSummaryBtn.classList.add('btn', 'read-summary-btn');
    readSummaryBtn.textContent = 'Read Summary';

    buttonWrapper.appendChild(readMoreBtn);
    buttonWrapper.appendChild(readSummaryBtn);
    contentWrapper.appendChild(buttonWrapper);

    // Append the image and content wrapper to the card
    card.appendChild(imgWrapper);
    card.appendChild(contentWrapper);

    // Append the card to the grid
    bookGrid.appendChild(card);
  });
}
