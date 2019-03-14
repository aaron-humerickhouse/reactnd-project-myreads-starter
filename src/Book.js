import React from 'react'
import PropTypes from 'prop-types'

import Menu from './Menu';
import * as customPropTypes from './types';

class Book extends React.Component {
  render() {
    const { book } = this.props

    return(
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks.smallThumbnail})`
            }}>
          </div>
          <Menu book={book} updateSuccessMessage={this.props.updateSuccessMessage} />
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
  updateSuccessMessage: PropTypes.func
}

export default Book
