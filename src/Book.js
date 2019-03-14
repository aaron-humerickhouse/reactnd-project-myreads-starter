import React from 'react'
import PropTypes from 'prop-types'

import Menu from './Menu';
import * as customPropTypes from './types';
import * as constants from './constants';

class Book extends React.Component {
  state = {
    shelf: ''
  }

  setShelf = () => {
    let shelf

    if(this.bookInShelf(this.props.shelves.read)) {
      console.log(`${this.props.book.title} is in read shelf`)
      shelf = constants.READ
    } else if(this.bookInShelf(this.props.shelves.wantToRead)) {
      console.log(`${this.props.book.title} is in want to read shelf`)
      shelf = constants.WANT_TO_READ
    } else if(this.bookInShelf(this.props.shelves.currentlyReading)) {
      console.log(`${this.props.book.title} is in currently reading shelf`)
      shelf = constants.CURRENTLY_READING
    }

    this.setState(() => ({
      shelf: shelf
    }))
  }

  componentDidMount = () => {
    this.setShelf()
  }

  bookInShelf = (shelf) => {
    console.log(shelf)
    console.log(this.props.book.id)
    return shelf.filter(id => this.props.book.id === id).length > 0
  }

  render() {
    const { book } = this.props

    return(
      <div className="book">
        <div className="book-top">
          {
            (book.imageLinks && book.imageLinks.smallThumbnail) ?
              <div className="book-cover" style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${book.imageLinks.smallThumbnail})`
              }} />
              :
              <div className="book-cover" style={{
                width: 128,
                height: 193,
                textAlign: "center",
                padding: "70px 0"
              }}>
                No Cover Available
              </div>
          }
          <Menu
            addBookToShelf={this.props.addBookToShelf}
            shelf={this.state.shelf}
            book={book}
            updateSuccessMessage={this.props.updateSuccessMessage}
          />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {
            book.authors && (
              book.authors
                .map(author => <span key={author}>{author}</span>)
                .reduce((acc, x) => acc === null ? [x] : [acc, (<br key={x} />), x], null)
            )
          }
        </div>
      </div>
    )
  }
}

Book.propTypes = {
  book: customPropTypes.bookPropType.isRequired,
  updateSuccessMessage: PropTypes.func,
  shelves: PropTypes.object,
  addBookToShelf: PropTypes.func.isRequired
}

export default Book
