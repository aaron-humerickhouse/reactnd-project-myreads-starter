import React from 'react';
import PropTypes from 'prop-types';
import * as customPropTypes from './types';
import BookList from './BookList';

const SearchResults = ({
  searchResults,
  shelves,
  updateSuccessMessage,
  addBookToShelf,
}) => (
  <div className="search-books-results">
    <BookList
      books={searchResults}
      shelves={shelves}
      updateSuccessMessage={updateSuccessMessage}
      addBookToShelf={addBookToShelf}
    />
  </div>
);

SearchResults.propTypes = {
  searchResults: PropTypes.oneOfType([
    PropTypes.arrayOf(customPropTypes.bookPropType),
    PropTypes.shape({
      error: PropTypes.string,
      items: PropTypes.array,
    }),
  ]).isRequired,
  updateSuccessMessage: PropTypes.func,
  shelves: PropTypes.object.isRequired,
  addBookToShelf: PropTypes.func.isRequired,
};

export default SearchResults;
