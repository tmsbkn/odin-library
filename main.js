const myLibrary = [];

function Book(name, author, pages, read) {
   this.name = name;
   this.author = author;
   this.pages = pages;
   this.read = read;
   this.info = function () {
      console.log(name + ' by ' + author + ', ' + pages + ' pages, ' + read);
   };
}

function addBookToLibrary(name, author, pages, read) {
   book = new Book(name, author, pages, read);
   myLibrary.push(book);
   console.log(myLibrary);
}
