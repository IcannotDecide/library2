const myLibrary = [];

function Book(title, author, numOfPages, read) {
  this.title = title,
    this.author = author,
    this.numOfPages = numOfPages,
    this.read = read
};

function addBookToLibrary(title, author, numOfPages, read) {
  const newBook = new Book(title, author, numOfPages, read)
  myLibrary.push(newBook)
  addBookToDOM(title, author, numOfPages, read)
};

const cards = document.querySelector(".cards");

function addBookToDOM(title, author, numOfPages, read) {
  const newDiv = document.createElement("div");

  const titleP = document.createElement("p");
  titleP.textContent = title;

  const authorP = document.createElement("p");
  authorP.textContent = author;

  const numOfPagesP = document.createElement("p");
  numOfPagesP.textContent = numOfPages;

  const readP = document.createElement("p");
  readP.textContent = read;

  newDiv.append(titleP, authorP, numOfPagesP, readP);
  cards.appendChild(newDiv);
}

const dialog = document.querySelector("dialog")
const showButton = document.querySelector("#open-btn");
const closeButton = document.querySelector("dialog button");

showButton.addEventListener("click", () => {
  dialog.showModal()
});

closeButton.addEventListener("click", () => {
  dialog.close();
});

const form = document.querySelector("form");
const submit = document.querySelector("#submit");

submit.addEventListener("click", finishForm)

function finishForm(e) {
  const title = document.querySelector("#title").value
  const author = document.querySelector("#author").value
  const numOfPages = document.querySelector("#numOfPages").value
  const read = document.querySelector("#read").checked

  if (title && author && !isNaN(numOfPages) && numOfPages >= 1 && numOfPages < 99999) {
    addBookToLibrary(title, author, numOfPages, read);
    e.preventDefault();
    dialog.close();
    form.reset();
  };
  return;
};