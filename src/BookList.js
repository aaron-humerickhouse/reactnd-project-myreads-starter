import React from 'react';
import PropTypes from 'prop-types';

import Book from './Book';
import * as customPropTypes from './types';

const BookList = ({
  books,
  addBookToShelf,
  updateSuccessMessage,
  shelves,
}) => (
  <ol className="books-grid">
    {
      Array.isArray(books) && (
        books.map(book => (
          <li key={book.id}>
            <Book
              addBookToShelf={addBookToShelf}
              shelves={shelves}
              book={book}
              updateSuccessMessage={updateSuccessMessage}
            />
          </li>
        ))
      )
    }
  </ol>
);


BookList.propTypes = {
  books: PropTypes.oneOfType([
    PropTypes.arrayOf(customPropTypes.bookPropType),
    PropTypes.shape({
      error: PropTypes.string,
      items: PropTypes.array,
    }),
  ]).isRequired,
  updateSuccessMessage: PropTypes.func,
  shelves: PropTypes.object,
  addBookToShelf: PropTypes.func.isRequired,
};

export default BookList;
