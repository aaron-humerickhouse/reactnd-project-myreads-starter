import React from 'react'
import PropTypes from 'prop-types'
import BookList from './BookList'
import * as customPropTypes from './types'

class BookShelf extends React.Component {
  render() {
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <BookList
            shelves={this.props.shelves}
            books={this.props.books}
            updateSuccessMessage={this.props.updateSuccessMessage}
            addBookToShelf={this.props.addBookToShelf}
          />
        </div>
      </div>
    )
  }
}

BookList.propTypes = {
  books: PropTypes.arrayOf(customPropTypes.bookPropType).isRequired,
  title: PropTypes.string,
  updateSuccessMessage: PropTypes.func,
  shelves: PropTypes.object.isRequired,
  addBookToShelf: PropTypes.func.isRequired
}

export default BookShelf
