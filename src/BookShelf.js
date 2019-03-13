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
          <BookList books={this.props.books} />
        </div>
      </div>
    )
  }
}

BookList.propTypes = {
  books: PropTypes.arrayOf(customPropTypes.bookPropType).isRequired,
  title: PropTypes.string
}

export default BookShelf
