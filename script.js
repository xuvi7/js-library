const shelf = document.querySelector(".shelf");
const books = [];
const bookCache = [];

function Book(author, title, pages, isRead) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary() {
    const book = new Book();
    bookCache.push(book);
    updateShelf();
}

function updateShelf() {
    for (const book of bookCache) {
        if (book in books) {
            removeBook(book);
        } else {
            createBook(book);
        }
    }
}

function createBook(book) {
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
    readButton.classList.add("read");
    removeButton.classList.add("remove");

    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = book.pages;
    // figure out read logic

    bookElement.appendChild(title);
    bookElement.appendChild(author);
    bookElement.appendChild(pages);
    bookElement.appendChild(readButton);
    bookElement.appendChild(removeButton);

    shelf.appendChild(bookElement);
}

function removeBook(book) {
    return;
}