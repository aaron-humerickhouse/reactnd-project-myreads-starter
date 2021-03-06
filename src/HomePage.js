import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from './Header';
import BookShelf from './BookShelf';

import * as Constants from './constants';
import bookPropType from './types';

class HomePage extends React.Component {
  updateSuccessMessage = (message) => {
    const { updateSuccessMessage, getBooks } = this.props;
    updateSuccessMessage(message);
    getBooks();
  }

  filterBooks = (shelf) => {
    const { allBooks } = this.props;
    return allBooks.filter(book => book.shelf === shelf);
  }

  hasSuccessMessage = () => {
    const { successMessage } = this.props;
    return successMessage !== '';
  }

  render() {
    const { successMessage, shelves, addBookToShelf } = this.props;
    return (
      <div>
        <Header title="My Reads" />
        <div className="list-books-content">
          {this.hasSuccessMessage() && (
            <div
              className="success"
              style={{
                padding: '20px 10px 20px',
              }}
            >
              {successMessage}
            </div>
          )}
          {
            Constants.SHELVES.map(shelf => (
              <BookShelf
                key={shelf.value}
                books={this.filterBooks(shelf.value)}
                title={shelf.title}
                updateSuccessMessage={this.updateSuccessMessage}
                shelves={shelves}
                addBookToShelf={addBookToShelf}
              />
            ))
          }
        </div>
        <div className="open-search">
          <Link to="/search">
            <button type="button" />
          </Link>
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  successMessage: PropTypes.string.isRequired,
  updateSuccessMessage: PropTypes.func.isRequired,
  addBookToShelf: PropTypes.func.isRequired,
  shelves: PropTypes.object,
  allBooks: PropTypes.arrayOf(bookPropType),
  getBooks: PropTypes.func.isRequired,
};

export default HomePage;
