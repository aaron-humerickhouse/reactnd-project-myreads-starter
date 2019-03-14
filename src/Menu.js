import React from 'react'
import PropTypes from 'prop-types'

import * as Constants from './constants'
import * as CustomPropTypes from './types'
import * as BooksApi from './BooksAPI'

class Menu extends React.Component {
  state = {
    success: ''
  }
  handleSelect = (event) => {
    event.preventDefault()

    const shelf = event.target.value
    this.updateBook(this.props.book, shelf)
  }

  getActionMessage = (book, shelf) => {
    let message
    switch (shelf) {
      case Constants.CURRENTLY_READING:
        message = 'added to the Currently Reading shelf'
        break;
      case Constants.WANT_TO_READ:
        message = 'added to the Want to Read shelf'
        break;
      case Constants.READ:
        message = 'added to the Read shelf'
        break;
      default:
        message = "removed from all shelves"
    }
    return `${book.title} ${message}`
  }

  updateBook = (book, shelf) => {
    BooksApi.update(book, shelf)
      .then(() => {
        this.props.updateSuccessMessage(this.getActionMessage(book, shelf))
      })
    this.props.addBookToShelf(book, shelf)
  }

  render() {
    return(
      <div className="book-shelf-changer">
        <select value={this.props.book.shelf || this.props.shelf || Constants.NONE} onChange={this.handleSelect}>
          <option value="move" disabled>Move to...</option>
          <option value={Constants.CURRENTLY_READING}>Currently Reading</option>
          <option value={Constants.WANT_TO_READ}>Want to Read</option>
          <option value={Constants.READ}>Read</option>
          <option value={Constants.NONE}>None</option>
        </select>
      </div>
    )
  }
}

Menu.propTypes = {
  book: CustomPropTypes.bookPropType.isRequired,
  updateSuccessMessage: PropTypes.func,
  shelf: PropTypes.string,
  addBookToShelf: PropTypes.func.isRequired
}

export default Menu;
