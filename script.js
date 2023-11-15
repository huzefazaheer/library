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
const form = document.querySelector("form");
const booknameinput = document.querySelector("#bookname");
const bookauthorinput = document.querySelector("#bookauthor");
const bookpagesinput = document.querySelector("#bookpages");

let isModalShown = false;
function toggleModal() {
  if (!isModalShown) {
    modal.style.display = "block";
    isModalShown = true;
  } else {
    modal.style.display = "none";
    isModalShown = false;
  }
}

function clearForm() {
  bookauthorinput.value = "";
  booknameinput.value = "";
  bookpagesinput.value = "";
}

form.addEventListener("submit", () => {
  let authorname = bookauthorinput.value;
  let bookname = booknameinput.value;
  let pageno = bookpagesinput.value;
  book = new Book(authorname, bookname, pageno);
  addBookToLibrary(book);
  clearLibrary();
  displayLibrary();
  toggleModal();
});

btn_addbook.addEventListener("click", () => {
  toggleModal();
});

document.addEventListener("click", (e) => {
  if (e.target == modal) {
    toggleModal();
  }
});

gameOfThrones = new Book("George R. R. Martin", "A Game of Thrones", 694);
addBookToLibrary(gameOfThrones);
displayLibrary();
