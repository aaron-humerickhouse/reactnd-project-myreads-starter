import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'
import * as customPropTypes from './types'

class BookList extends React.Component {
  render() {
    return(
      <ol className="books-grid">
        {
          Array.isArray(this.props.books) && (
            this.props.books.map(book => (
              <li key={book.id}>
                <Book book={book} updateSuccessMessage={this.props.updateSuccessMessage} />
              </li>
            ))
          )
        }
      </ol>
    )
  }
}

BookList.propTypes = {
  // books: PropTypes.oneOf([
  //   PropTypes.arrayOf(customPropTypes.bookPropType),
  //   PropTypes.shape({
  //     error: PropTypes.string,
  //     items: PropTypes.array
  //   })
  // ]).isRequired,
  books: PropTypes.any.isRequired,
  updateSuccessMessage: PropTypes.func
}

export default BookList
