const myLibrary = [  {
  "title": "Harry Potter",
  "author": "JK Rowling",
  "numOfPages": 500,
  "read": true
},
{
  "title": "The time at...",
  "author": "Bob",
  "numOfPages": 250,
  "read": true
},
{
  "title": "Am I a squid?",
  "author": "Thett",
  "numOfPages": 10,
  "read": true
}];

function Book(title, author, numOfPages, read) {
  this.title = title,
  this.author = author,
  this.numOfPages = numOfPages,
  this.read = read
};

function addBookToLibrary(title, author, numOfPages, read) {
  const newBook = new Book(title, author, numOfPages, read)
  myLibrary.push(newBook)
};

const cards = document.querySelector(".cards");

for (let i = 0; i < myLibrary.length; i++) {
  const newDiv = document.createElement("div");
  
  const title = document.createElement("p");

  title.textContent = myLibrary[i].title;
  const author = document.createElement("p");
  author.textContent = myLibrary[i].author;

  const numOfPages = document.createElement("p");
  numOfPages.textContent = myLibrary[i].numOfPages;

  const read = document.createElement("p");
  read.textContent = "read";

  newDiv.append(title, author, numOfPages, read);
  cards.appendChild(newDiv);
}

// The modal code
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
submit.addEventListener("click", (e) => {
  const title = document.querySelector("#title").value
  const author = document.querySelector("#author").value
  const numOfPages = document.querySelector("#numOfPages").value
  const read = document.querySelector("#read").checked

  if(title && author && !isNaN(numOfPages) && numOfPages >= 1 && numOfPages < 99999) {
  e.preventDefault()
  dialog.close()
  form.reset()
  }
  return;
})