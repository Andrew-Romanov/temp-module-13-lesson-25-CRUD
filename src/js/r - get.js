const BASE_URL = 'http://localhost:4040';

function fetchBooks() {
  return fetch(`${BASE_URL}/books`)
  .then(response => response.json())
  .then(console.log);
};

function fetchBookById(bookId) {
  return fetch(`${BASE_URL}/books/${bookId}`)
  .then(response => response.json())
  .then(console.log);
};

fetchBooks();
fetchBookById(2);
fetchBookById(4);
