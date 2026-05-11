const title = document.getElementById('bookNameInput');
const author = document.getElementById('bookAuthorInput');
const pages = document.getElementById('bookPagesInput');
const read = document.getElementById('bookReadInput');

const myLibrary = [];

const addBookBtn = document.getElementById('addBookBtn');
addBookBtn.addEventListener('click', () => {
   if (addBookForm.style.display == 'flex') {
      addBookForm.style.display = 'none';
   } else {
      addBookForm.style.display = 'flex';
   }
});

const submit = document.querySelector('form');
const bookShelf = document.getElementById('app');

class Book {
   constructor(name, author, pages, read) {
      this.bookID = self.crypto.randomUUID();
      this.name = name.value;
      this.author = author.value;
      this.pages = pages.value;
      this.read = read.value;
   }
   info() {
      return (
         this.name +
         ' by ' +
         this.author +
         ', ' +
         this.pages +
         ' pages, ' +
         this.read +
         this.bookID
      );
   }
}

buildDeleteButtons();

function buildBookshelf() {
   bookShelf.innerHTML = '';
   myLibrary.forEach((book) => {
      const bookNode = document.createElement('div');
      if (book.read === 'read') {
         bookNode.innerHTML = `
      <span class="book-title">${book.name}</span>
      <cite class="book-author">${book.author}</cite>
      <span class="book-pages">${book.pages} Pages</span>
      <span data-bookIndex="${book.bookID}" class="book-status read">Read</span>
      <div data-bookIndex="${book.bookID}" class="delete">X</div>
      `;
      } else {
         bookNode.innerHTML = `
      <span class="book-title">${book.name}</span>
      <cite class="book-author">${book.author}</cite>
      <span class="book-pages">${book.pages} Pages</span>
      <span data-bookIndex="${book.bookID}" class="book-status">Unread</span>
      <div data-bookIndex="${book.bookID}" class="delete">X</div>
      `;
      }
      bookNode.classList.add('book');
      bookShelf.append(bookNode);
   });
   buildDeleteButtons();
   buildReadButtons();
}

function addBookToLibrary() {
   newBook = new Book(title, author, pages, read);
   myLibrary.push(newBook);
   console.log(myLibrary);
}

function clearForm() {
   title.value = '';
   author.value = '';
   pages.value = '';
}

submit.addEventListener('submit', (e) => {
   e.preventDefault();
   addBookToLibrary();
   buildBookshelf();
   clearForm();
});

function deleteBook(id) {
   let bookToDelete = myLibrary.findIndex((obj) => {
      return obj.bookID == id;
   });
   myLibrary.splice(bookToDelete, 1);
   buildBookshelf();
}

function buildDeleteButtons() {
   var deleteButton = document.querySelectorAll('.delete');
   deleteButton.forEach((button) => {
      button.addEventListener('click', (e) => {
         deleteBook(e.target.getAttribute('data-bookIndex'));
      });
   });
}

function changeStatus(id) {
   let bookToUpdate = myLibrary.findIndex((obj) => {
      return obj.bookID == id;
   });
   if (myLibrary[bookToUpdate].read === 'read') {
      myLibrary[bookToUpdate].read = 'unread';
   } else {
      myLibrary[bookToUpdate].read = 'read';
   }
   buildBookshelf();
}

function buildReadButtons() {
   var readButton = document.querySelectorAll('.book-status');
   readButton.forEach((button) => {
      button.addEventListener('click', (e) => {
         changeStatus(e.target.getAttribute('data-bookIndex'));
      });
   });
}
