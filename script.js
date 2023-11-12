const myLibrary = [];

function Book(author, name, noOfPages) {
  this.author = author;
  this.name = name;
  this.noOfPages = noOfPages;
}

Book.prototype.getInfo = function () {
  return `${this.name} is written by ${this.author} and has ${this.noOfPages} pages`;
};

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayLibrary() {
  myLibrary.forEach((book) => {
    const bookHTML = document.createElement("div");
    bookHTML.innerHTML = `${book.name} </br> ${book.author} </br> ${book.noOfPages}`;
    library.appendChild(bookHTML);
  });
}

const library = document.querySelector(".library");
