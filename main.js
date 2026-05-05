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

function addBookToLibrary() {
   newBook = new Book(title, author, pages, read);
   myLibrary.push(newBook);
   console.log(myLibrary);
}

submit.addEventListener('submit', (e) => {
   e.preventDefault();
   addBookToLibrary();
});
