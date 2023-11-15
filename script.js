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

function clearLibrary() {
  library.innerHTML = "";
}

const library = document.querySelector(".library");
const btn_addbook = document.querySelector("#addbook");
const modal = document.querySelector(".modal");
const btn_submit = document.querySelector("#btnsubmit");
const form = document.querySelector("form");

function toggleModal() {
  let isModalShown = false;

  if (!isModalShown) {
    modal.style.display = "block";
    isModalShown = true;
  } else {
    modal.style.display = "none";
    isModalShown = false;
  }
}

btn_addbook.addEventListener("click", () => {
  toggleModal();
});

btn_submit.addEventListener("click", () => {
  let authorname = prompt("enter author");
  let bookname = prompt("enter book name");
  let pageno = prompt("enter no of pages");
  book = new Book(authorname, bookname, pageno);
  addBookToLibrary(book);
  clearLibrary();
  displayLibrary();
});

document.addEventListener("click", (e) => {
  if (e.target == modal) {
    toggleModal();
  }
});
