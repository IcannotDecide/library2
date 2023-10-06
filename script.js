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


// Used to append books to the cards div
// const beijing = document.createElement("p");
// beijing.textContent = "wassup beijing";
// cards.appendChild(beijing)