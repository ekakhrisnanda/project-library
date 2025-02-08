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

    myLibrary.forEach((book, index) => {
        const card = document.createElement('div');
        card.dataset.index = index;
        card.classList.add('card');

        const h2 = document.createElement('h2');
        h2.textContent = `${book.title}`;
        card.appendChild(h2);

        const h3 = document.createElement('h3');
        h3.textContent = `${book.author}`;
        card.appendChild(h3);

        const h4 = document.createElement('h4');
        h4.textContent = `${book.pages} pages`;
        card.appendChild(h4);

        const p = document.createElement('p');
        p.textContent = `Read Status: ${book.read}`;
        card.appendChild(p);

        const cardButton = document.createElement('div');
        cardButton.classList.add('card-button');
        card.appendChild(cardButton);

        const readButton = document.createElement('button');
        readButton.type = 'button';
        readButton.classList.add('read-button');
        readButton.textContent = 'Change Read'
        // readButton.onclick = changeRead;
        readButton.setAttribute('data-index', index);
        cardButton.appendChild(readButton);

        const removeButton = document.createElement('button');
        removeButton.type = 'button';
        removeButton.classList.add('remove-button');
        removeButton.textContent = 'Remove Book'
        removeButton.dataset.index = index;
        removeButton.onclick = removeBook;
        cardButton.appendChild(removeButton);

        cardWrapper.appendChild(card);
    });
}

displayBook();

function removeBook() {    
    if(this.dataset.index) {
        myLibrary.splice(this.dataset.index, 1);
        displayBook();
    }
}

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