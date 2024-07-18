const shelf = document.querySelector(".shelf");
const dialog = document.querySelector("dialog");
const form = document.querySelector("#new-card-form");
var books = [];

shelf.addEventListener("click", clickShelf);
form.addEventListener("submit", handleSubmit);

const book1 = new Book("A Normal Title", "Author", 500, true);
const book2 = new Book("A really really really really super duper very incredibly extremely inane amount of long title + another couple words", "Different Author", 500000000, false);
addBook(book1);
addBook(book2);

function clickShelf(e) {
    const classes = e.target.classList;
    if (classes.contains("remove")) {
        removeBook(e.target.parentElement);
    } else if (classes.contains("read-button")) {
        classes.toggle("read");
    } else if (e.target.id === "new-card-button") {
        dialog.showModal();
    }
}

function handleSubmit(e) {
    const title = document.querySelector("#title");
    const author = document.querySelector("#author");
    const pages = document.querySelector("#pages");
    const isRead = document.querySelector("#read");
    
    const book = new Book(title.value, author.value, pages.value, isRead.checked);
    addBook(book);

    form.reset();
}

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBook(book) {
    const bookElement = document.createElement("div");
    const title = document.createElement("div");
    const author = document.createElement("div");
    const pages = document.createElement("div");
    const readButton = document.createElement("button");
    const removeButton = document.createElement("button");

    bookElement.id = books.length;
    bookElement.classList.add("card");
    title.classList.add("title");
    author.classList.add("author");
    pages.classList.add("pages");
    readButton.classList.add("read-button");
    removeButton.classList.add("remove");

    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = book.pages;
    if (book.isRead) {
        readButton.classList.add("read");
    }

    bookElement.appendChild(title);
    bookElement.appendChild(author);
    bookElement.appendChild(pages);
    bookElement.appendChild(readButton);
    bookElement.appendChild(removeButton);

    shelf.appendChild(bookElement);

    books.push(book);
}

function removeBook(bookElement) {
    books.splice(bookElement.id, 1);
    bookElement.remove();
}