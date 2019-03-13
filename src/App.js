import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import HomePage from './HomePage'
import SearchPage from './SearchPage'

class BooksApp extends React.Component {
  state = {

  }

  render() {
    return (
      <div>
        <Route exact path="/" component={HomePage} />
        <Route path="/search" component={SearchPage} />
      </div>
    )
  }
}

export default BooksApp
