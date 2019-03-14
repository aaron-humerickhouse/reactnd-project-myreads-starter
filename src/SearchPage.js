import React from 'react'
import PropTypes from 'prop-types'

import SearchBar from './SearchBar'
import SearchResults from './SearchResults'
import * as BooksApi from './BooksAPI'

class SearchPage extends React.Component {
  state = {
    query: '',
    searchResults: []
  }

  updateSearchResults(query) {
    BooksApi.search(query)
    .then((books) => {
      if(Array.isArray(books)) {
        this.setState(() => ({
          searchResults: books
        }))
        this.props.updateErrorMessage('')

      } else {
        this.props.updateErrorMessage('No Results found')
        this.clearSearchResults()
      }
    })
  }

  clearSearchResults() {
    this.setState(() => ({
      searchResults: []
    }))
  }

  hasErrorMessage = () => (
    this.props.errorMessage !== ''
  )

  hasSuccessMessage = () => (
    this.props.successMessage !== ''
  )

  updateSuccessMessage = (message) => {
    this.props.updateSuccessMessage(message)
    this.updateSearchResults(this.state.query)
  }

  updateQuery = (query) => {
    this.setState(() => ({
      query: query
    }))
  }

  render() {
    this.updateSearchResults = this.updateSearchResults.bind(this)
    this.clearSearchResults = this.clearSearchResults.bind(this)

    return(
      <div>
        <SearchBar
          updateSearchResults={this.updateSearchResults}
          clearSearchResults={this.clearSearchResults}
          updateQuery={this.updateQuery}
          />
        {
          this.hasSuccessMessage() && (
            <div className="success">
              {this.props.successMessage}
            </div>

          )
        }
        {
          this.hasErrorMessage() ? (
            <div className="error">
              {this.props.errorMessage}
            </div>
          ) : (
            <SearchResults
              searchResults={this.state.searchResults}
              updateSuccessMessage={this.updateSuccessMessage}
              shelves={this.props.shelves}
              addBookToShelf={this.props.addBookToShelf}
            />
          )
        }
      </div>
    )
  }
}

SearchPage.propTypes = {
  updateSuccessMessage: PropTypes.func.isRequired,
  successMessage: PropTypes.string.isRequired,
  updateErrorMessage: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired,
  shelves: PropTypes.object.isRequired,
  addBookToShelf: PropTypes.func.isRequired
}

export default SearchPage
