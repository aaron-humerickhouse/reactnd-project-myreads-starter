import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

import Header from './Header'
import BookShelf from './BookShelf'
import * as BooksApi from './BooksAPI'

import * as Constants from './constants'

class HomePage extends React.Component {
  state = {
    allBooks: []
  }

  componentDidMount() {
    this.getBooks()
  }

  getBooks = () => {
    BooksApi.getAll()
      .then((books) => {
        this.setState(() => ({
          allBooks: books
        }))

        books.forEach(book => {
          this.props.addBookToShelf(book, book.shelf)
        })
      })
  }

  updateSuccessMessage = (message) => {
    this.props.updateSuccessMessage(message)
    this.getBooks()
  }

  filterBooks = (shelf) => (
    this.state.allBooks.filter( book => book.shelf === shelf)
  )

  hasSuccessMessage = () => (
    this.props.successMessage !== ''
  )

  render() {
    return(
      <div>
        <Header title="My Reads"/>
        <div className="list-books-content">
          {this.hasSuccessMessage() && (
            <div className="success" style={{
              padding: "20px 10px 20px"
            }}>
              {this.props.successMessage}
            </div>
          )}
          <BookShelf
            books={this.filterBooks(Constants.CURRENTLY_READING)} title="Currently Reading"
            updateSuccessMessage={this.updateSuccessMessage}
            shelves={this.props.shelves}
            addBookToShelf={this.props.addBookToShelf}
          />
          <BookShelf
            books={this.filterBooks(Constants.WANT_TO_READ)} title="Want to Read"
            updateSuccessMessage={this.updateSuccessMessage}
            shelves={this.props.shelves}
            addBookToShelf={this.props.addBookToShelf}
          />
          <BookShelf
            books={this.filterBooks(Constants.READ)} title="READ"
            updateSuccessMessage={this.updateSuccessMessage}
            shelves={this.props.shelves}
            addBookToShelf={this.props.addBookToShelf}
          />
        </div>
        <div className="open-search">
          <Link to="/search" >
            <button />
          </Link>
        </div>
      </div>
    )
  }
}

HomePage.propTypes = {
  successMessage: PropTypes.string.isRequired,
  updateSuccessMessage: PropTypes.func.isRequired,
  addBookToShelf: PropTypes.func.isRequired,
  shelves: PropTypes.object
}

export default HomePage
