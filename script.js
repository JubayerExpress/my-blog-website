const books = [
    {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        year: 1925,
        cover: 'https://example.com/gatsby.jpg',
        summary: 'A story about the mysterious Jay Gatsby and his unrequited love for Daisy Buchanan.'
    },
    {
        title: '1984',
        author: 'George Orwell',
        year: 1949,
        cover: 'https://example.com/1984.jpg',
        summary: 'A dystopian novel set in a totalitarian regime where surveillance and control are pervasive.'
    },
    // Add more books here
];

const bookContainer = document.getElementById('book-container');
const sortSelect = document.getElementById('sort');
let filteredBooks = [...books];

function displayBooks() {
    bookContainer.innerHTML = '';

    filteredBooks.forEach(book => {
        const card = document.createElement('div');
        card.classList.add('book-card');

        const bookImg = document.createElement('img');
        bookImg.src = book.cover;
        card.appendChild(bookImg);

        const bookTitle = document.createElement('h3');
        bookTitle.textContent = book.title;
        card.appendChild(bookTitle);

        const bookAuthor = document.createElement('p');
        bookAuthor.textContent = `by ${book.author}`;
        card.appendChild(bookAuthor);

        const summaryBtn = document.createElement('button');
        summaryBtn.textContent = 'Read Summary';
        summaryBtn.classList.add('summary-btn');
        card.appendChild(summaryBtn);

        summaryBtn.addEventListener('click', () => showSummaryModal(book.summary));

        bookContainer.appendChild(card);
    });
}

function showSummaryModal(summary) {
    const modal = document.createElement('div');
    modal.classList.add('summary-modal');

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    const modalText = document.createElement('p');
    modalText.textContent = summary;
    modalContent.appendChild(modalText);

    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'Close';
    closeBtn.classList.add('close-btn');
    modalContent.appendChild(closeBtn);

    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    closeBtn.addEventListener('click', () => {
        modal.remove();
    });
}

sortSelect.addEventListener('change', () => {
    const sortBy = sortSelect.value;

    if (sortBy === 'title') {
        filteredBooks.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === 'author') {
        filteredBooks.sort((a, b) => a.author.localeCompare(b.author));
    } else if (sortBy === 'year') {
        filteredBooks.sort((a, b) => a.year - b.year);
    }

    displayBooks();
});

displayBooks();
