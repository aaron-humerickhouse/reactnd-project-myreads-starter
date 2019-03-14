import React from 'react';
import PropTypes from 'prop-types';
import BookList from './BookList';
import * as customPropTypes from './types';

const BookShelf = ({
  title,
  shelves,
  books,
  updateSuccessMessage,
  addBookToShelf,
}) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{title}</h2>
    <div className="bookshelf-books">
      <BookList
        shelves={shelves}
        books={books}
        updateSuccessMessage={updateSuccessMessage}
        addBookToShelf={addBookToShelf}
      />
    </div>
  </div>
);

BookShelf.propTypes = {
  books: PropTypes.arrayOf(customPropTypes.bookPropType).isRequired,
  title: PropTypes.string,
  updateSuccessMessage: PropTypes.func,
  shelves: PropTypes.object.isRequired,
  addBookToShelf: PropTypes.func.isRequired,
};

export default BookShelf;
