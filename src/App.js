import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import HomePage from './HomePage'
import SearchPage from './SearchPage'
import * as constants from './constants'
import * as BooksApi from './BooksAPI'

class BooksApp extends React.Component {
  state = {
    successMessage: '',
    errorMessage: '',
    shelves: {
      read: [],
      wantToRead: [],
      currentlyReading: []
    },
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
          this.addBookToShelf(book, book.shelf)
        })
      })
  }

  updateSuccessMessage = (message) => {
    this.setState(() => ({
      successMessage: message
    }))

    setTimeout(() => {
      this.setState(() => ({
        successMessage: ''
      }))
    }, 3000)
  }

  updateErrorMessage = (message) => {
    this.setState(() => ({
      errorMessage: message
    }))
  }

  addBookToShelf = (book, shelf) => {
    let read = this.state.shelves.read
    let wantToRead = this.state.shelves.wantToRead
    let currentlyReading = this.state.shelves.currentlyReading

    switch(shelf) {
      case constants.READ:
        read = [...read, book.id]
        wantToRead = wantToRead.filter(id => id !== book.id)
        currentlyReading = currentlyReading.filter(id => id !== book.id)
        break;
      case constants.WANT_TO_READ:
        wantToRead = [...wantToRead, book.id]
        currentlyReading = currentlyReading.filter(id => id !== book.id)
        read = read.filter(id => id !== book.id)
        break;
      case constants.CURRENTLY_READING:
        currentlyReading = [...currentlyReading, book.id]
        wantToRead = wantToRead.filter(id => id !== book.id)
        read = read.filter(id => id !== book.id)
        break;
      default:
        throw new Error('Shelf does not exit')
    }

    this.setState((oldState) => ({
      shelves: {
        read: read,
        wantToRead: wantToRead,
        currentlyReading: currentlyReading,
      }
    }))
  }

  render() {
    return (
      <div>
        <Route exact path="/" render={() =>
          <HomePage
            updateSuccessMessage={this.updateSuccessMessage} successMessage={this.state.successMessage}
            updateErrorMessage={this.updateErrorMessage} errorMessage={this.state.errorMessage}
            shelves={this.state.shelves} addBookToShelf={this.addBookToShelf}
            allBooks={this.state.allBooks} getBooks={this.getBooks}
          />
        }/>
        <Route path="/search" render={() =>
          <SearchPage
            updateSuccessMessage={this.updateSuccessMessage}  successMessage={this.state.successMessage}
            updateErrorMessage={this.updateErrorMessage} errorMessage={this.state.errorMessage}
            shelves={this.state.shelves} addBookToShelf={this.addBookToShelf}
          />
        }/>
      </div>
    )
  }
}

export default BooksApp
