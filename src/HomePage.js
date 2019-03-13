import React from 'react'
import Header from './Header'
import BookShelf from './BookShelf'
import * as BooksApi from './BooksAPI'
import {Link} from 'react-router-dom'
const CURRENTLY_READING = 'currentlyReading';
const WANT_TO_READ = 'wantToRead';
const READ = 'read';

class HomePage extends React.Component {
  state = {
    allBooks: [
      {id:'book1', title: 'title1'},
      {id:'book2', title: 'title2'}
    ]
  }

  componentDidMount() {
    BooksApi.getAll()
      .then((books) => {
        console.log(books)
        this.setState(() => ({
          allBooks: books
        }))
      })
  }

  filterBooks = (shelf) => (
    this.state.allBooks.filter( book => book.shelf === shelf)
  )

  render() {
    return(
      <div>
        <Header title="My Reads"/>
        <div className="list-books-content">
          <BookShelf books={this.filterBooks(CURRENTLY_READING)} title="Currently Reading" />
          <BookShelf books={this.filterBooks(WANT_TO_READ)} title="Want to Read" />
          <BookShelf books={this.filterBooks(READ)} title="READ" />
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

export default HomePage
