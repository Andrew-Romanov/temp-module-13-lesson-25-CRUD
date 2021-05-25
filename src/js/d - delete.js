const BASE_URL = 'http://localhost:4040';

function removeBook(bookId) {
  const url = `${BASE_URL}/books/${bookId}`;

  const options = {
    method: 'DELETE',
  };

  return fetch(url, options).then(res => res.json());
}

// removeBook(32);

// for (id = 17; id <= 31; id++) removeBook(id);

// removeBook(15);
// removeBook(14);

