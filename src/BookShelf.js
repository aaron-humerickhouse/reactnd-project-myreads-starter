import React from 'react'
import PropType from 'prop-types'
import BookList from './BookList'
import * as customPropTypes from './types'

class BookShelf extends React.Component {
  render() {
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <BookList books={this.props.books} updateSuccessMessage={this.props.updateSuccessMessage} />
        </div>
      </div>
    )
  }
}

BookList.propTypes = {
  books: PropType.arrayOf(customPropTypes.bookPropType).isRequired,
  title: PropType.string,
  updateSuccessMessage: PropType.func
}

export default BookShelf
