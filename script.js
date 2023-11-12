const myLibrary = [];

const Book = function (author, name, noOfPages) {
  this.author = author;
  this.name = name;
  this.noOfPages = noOfPages;
};

Book.prototype.getInfo = function () {
  return `${this.name} is written by ${this.author} and has ${this.noOfPages} pages`;
};

function addBookToLibrary(book) {
  myLibrary.push(book);
}
