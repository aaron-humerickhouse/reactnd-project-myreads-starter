import React from 'react';
import PropTypes from 'prop-types';

import Menu from './Menu';
import bookPropType from './types';
import * as constants from './constants';

class Book extends React.Component {
  state = {
    shelf: '',
  }

  setShelf = () => {
    let shelf;

    const { shelves } = this.props;

    if (this.bookInShelf(shelves.read)) {
      shelf = constants.READ;
    } else if (this.bookInShelf(shelves.wantToRead)) {
      shelf = constants.WANT_TO_READ;
    } else if (this.bookInShelf(shelves.currentlyReading)) {
      shelf = constants.CURRENTLY_READING;
    } else {
      shelf = constants.NONE;
    }

    this.setState(() => ({
      shelf: shelf
    }));
  }

  componentDidMount = () => {
    this.setShelf();
  }

  bookInShelf = (shelf) => {
    const { book } = this.props;

    return shelf.filter(id => (
      book.id === id
    )).length > 0;
  }

  render() {
    const { book, addBookToShelf, updateSuccessMessage } = this.props;
    const { shelf } = this.state;

    return (
      <div className="book">
        <div className="book-top">
          {
            (book.imageLinks && book.imageLinks.smallThumbnail)
              ? (
                <div
                  className="book-cover"
                  style={{
                    width: 128,
                    height: 193,
                    backgroundImage: `url(${book.imageLinks.smallThumbnail})`,
                  }}
                />
              )
              : (
                <div
                  className="book-cover"
                  style={{
                    width: 128,
                    height: 193,
                    textAlign: 'center',
                    padding: '70px 0',
                  }}
                >
                No Cover Available
                </div>
              )}
          <Menu
            addBookToShelf={addBookToShelf}
            shelf={shelf}
            book={book}
            updateSuccessMessage={updateSuccessMessage}
          />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {
            book.authors && (
              book.authors
                .map(author => <span key={author}>{author}</span>)
                .reduce((acc, x) => (acc === null ? [x] : [acc, (<br key={x} />), x]), null)
            )
          }
        </div>
      </div>
    );
  }
}

Book.propTypes = {
  book: bookPropType.isRequired,
  updateSuccessMessage: PropTypes.func,
  shelves: PropTypes.object,
  addBookToShelf: PropTypes.func.isRequired,
};

export default Book;
