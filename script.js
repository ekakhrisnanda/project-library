const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

const theDip = new Book('The Dip', 'Seth Godin', 93, 'Have read');
const range = new Book('Range', 'David Epstein', 390, 'Haven"t read yet');
addBookToLibrary(theDip);
addBookToLibrary(range);
