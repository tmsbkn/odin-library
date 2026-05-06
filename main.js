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
function Book(name, author, pages, read) {
   this.bookID = self.crypto.randomUUID();
   this.name = name.value;
   this.author = author.value;
   this.pages = pages.value;
   this.read = read.value;
   this.info = function () {
      console.log(
         name + ' by ' + author + ', ' + pages + ' pages, ' + read + bookID,
      );
   };
}

buildDeleteButtons();

function buildBookshelf() {
   bookShelf.innerHTML = '';
   myLibrary.forEach((book) => {
      const bookNode = document.createElement('div');
      bookNode.innerHTML = `
      <span class="book-title">${book.name}</span>
      <cite class="book-author">${book.author}</cite>
      <span class="book-pages">${book.pages} Pages</span>
      <div id="${book.bookID}" class="delete">X</div>
      `;
      if (book.read === 'read') {
         bookNode.classList.add('read');
      }
      bookNode.classList.add('book');
      bookShelf.append(bookNode);
   });
   buildDeleteButtons();
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
         deleteBook(e.id);
      });
   });
}
