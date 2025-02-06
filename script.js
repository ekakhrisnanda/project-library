const cardWrapper = document.querySelector('.card-wrapper');

const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read) 
    myLibrary.push(book);
}

addBookToLibrary('The Dip', 'Seth Godin', 93, 'No');
addBookToLibrary('Range', 'David Epstein', 390, 'Yes');
addBookToLibrary('The Dip', 'Seth Godin', 93, 'No');
addBookToLibrary('Range', 'David Epstein', 390, 'Yes');
addBookToLibrary('The Dip', 'Seth Godin', 93, 'No');
addBookToLibrary('Range', 'David Epstein', 390, 'Yes');
addBookToLibrary('The Dip', 'Seth Godin', 93, 'No');
addBookToLibrary('Range', 'David Epstein', 390, 'Yes');


function displayBook() {
    myLibrary.forEach((book) => {
        const card = `
            <div class="card">
                <h2>${book.title}</h2>
                <h3>${book.author}</h3>
                <h4>${book.pages} pages</h4>
                <p>Read Status: ${book.read}</p>
            </div>
        `;

        cardWrapper.innerHTML += card;
    }); 
}

displayBook();