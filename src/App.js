import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import HomePage from './HomePage'
import SearchPage from './SearchPage'

class BooksApp extends React.Component {
  state = {
    successMessage: '',
    errorMessage: '',
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

  render() {
    return (
      <div>
        <Route exact path="/" render={() =>
          <HomePage
            updateSuccessMessage={this.updateSuccessMessage} successMessage={this.state.successMessage}
            updateErrorMessage={this.updateErrorMessage} errorMessage={this.state.errorMessage}
          />
        }/>
        <Route path="/search" render={() =>
          <SearchPage
            updateSuccessMessage={this.updateSuccessMessage}  successMessage={this.state.successMessage}
            updateErrorMessage={this.updateErrorMessage} errorMessage={this.state.errorMessage}
          />
        }/>
      </div>
    )
  }
}

export default BooksApp
