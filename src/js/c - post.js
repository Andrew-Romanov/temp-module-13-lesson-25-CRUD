const BASE_URL = 'http://localhost:4040';

const newBook = {
  title: 'Тестовая книга CSS',
  author: 'Я',
  genres: ['CSS'],
  rating: 9,
};

function addBook (book) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  };

  return fetch(`${BASE_URL}/books`, options)
    .then(response => response.json());
};

addBook(newBook)
  .then(book => {
    console.log('Пришёл ответ от бекэнда');
    console.log(book);
});

addBook({
  title: 'Тестовая книга HTML',
  author: 'Я',
  genres: ['HTML'],
  rating: 8,
}).then(book => {
  console.log('Пришёл ответ от бекэнда');
  console.log(book);
});

// function addBook(book) {
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(book),
//   };

//   return fetch(`${BASE_URL}/books`, options).then(res => res.json());
// }

// addBook({
//   title: 'Тестовая книга по CSS',
//   author: 'Я',
//   genres: ['CSS'],
//   rating: 9,
// })
//   .then(renderBook)
//   .catch(error => console.log(error));

// addBook({
//   title: 'Тестовая книга по HTML',
//   author: 'Я',
//   genres: ['HTML'],
//   rating: 7,
// }).then(renderBook);

// function renderBook(book) {
//   console.log('Пришел ответ от бекенда можно рисовать');
//   console.log(book);
// }
