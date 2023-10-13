const myLibrary = [];
let id = 0;

function Book(title, author, numOfPages, read, id) {
  this.title = title,
    this.author = author,
    this.numOfPages = numOfPages,
    this.read = read,
    this.id = id,
    this.changeRead = function () {
      return read
    };
};

function addBookToLibrary(title, author, numOfPages, read) {
  const newBook = new Book(title, author, numOfPages, read, id)

  myLibrary.push(newBook)
  addBookToDOM(title, author, numOfPages, read)
};

function removeBook(e) {
  const elementID = +e.target.parentElement.dataset.id;
  e.target.parentElement.remove();
  const libraryIndex = n => n.id === elementID;
  myLibrary.splice(myLibrary.findIndex(libraryIndex), 1)
}

function changeStatus(e) {
  const elementID = +e.target.parentElement.dataset.id;
  const libraryIndex = myLibrary.findIndex(n => n.id === elementID);
  
  // myLibrary[libraryIndex].changeRead();

 e.target.parentElement.children[3].innerText = myLibrary[libraryIndex].read
}

const cards = document.querySelector(".cards");

function addBookToDOM(title, author, numOfPages, read) {
  const newDiv = document.createElement("div");
  newDiv.dataset.id = id;
  id++
  const titleP = document.createElement("p");
  titleP.textContent = title;

  const authorP = document.createElement("p");
  authorP.textContent = author;

  const numOfPagesP = document.createElement("p");
  numOfPagesP.textContent = numOfPages;

  const readP = document.createElement("p");
  readP.textContent = read;

  const changeRead = document.createElement("button");
  changeRead.innerText = "Read";
  changeRead.addEventListener("click", changeStatus);

  const removeButton = document.createElement("button");
  removeButton.innerText = "Remove book";
  removeButton.addEventListener("click", removeBook);

  newDiv.append(titleP, authorP, numOfPagesP, readP, changeRead, removeButton);

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
    addBookToLibrary(title, author, numOfPages, read, id);
    e.preventDefault();
    dialog.close();
    form.reset();
  };
  return;
};

