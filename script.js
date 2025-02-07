const cardWrapper = document.querySelector('.card-wrapper');
const showDialogButton = document.querySelector('.show-dialog');
const closeDialogButton = document.querySelector('img[src="window-close.svg"');
const addBookDialog = document.querySelector('dialog');
const form = document.querySelector('form');

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
    cardWrapper.innerHTML= '';

    myLibrary.forEach((book) => {
        const card = `
            <div class="card">
                <h2>${book.title}</h2>
                <h3>${book.author}</h3>
                <h4>${book.pages} pages</h4>
                <p>Read Status: ${book.read}</p>
                <div class="card-button">
                    <button type="button">Change Read</button>
                    <button type="button">Remove</button>
                </div>
            </div>
        `;

        cardWrapper.innerHTML += card;
    }); 
}

displayBook();

function addNewBook() {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const obj = Object.fromEntries(formData);
        console.log(myLibrary);
        addBookToLibrary(obj.title, obj.author, parseFloat(obj.pages), obj.read);

        displayBook();
        form.reset();
        addBookDialog.close();
    });
}

addNewBook();

showDialogButton.addEventListener('click', () => {
    addBookDialog.showModal();
});

closeDialogButton.addEventListener('click', () => {
    addBookDialog.close();
});

// create a button for delete the object of a book
// create a container containing 2 buttons, read and remove in html
// add event listener to remove button triggered by click
// loop through myLibrary and use book and index as arguments
// add data attributes: data-index='[i]'
// if data-index === i splice(i, 1)