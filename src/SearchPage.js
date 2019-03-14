import React from 'react'
import PropTypes from 'prop-types'

import SearchBar from './SearchBar'
import SearchResults from './SearchResults'
import * as BooksApi from './BooksAPI'

class SearchPage extends React.Component {
  state = {
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

  render() {
    this.updateSearchResults = this.updateSearchResults.bind(this)
    this.clearSearchResults = this.clearSearchResults.bind(this)

    return(
      <div>
        <SearchBar
          updateSearchResults={this.updateSearchResults}
          clearSearchResults={this.clearSearchResults}
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
              updateSuccessMessage={this.props.updateSuccessMessage}
            />
          )
        }
      </div>
    )
  }
}

SearchPage.propTypes = {
  updateSuccessMessage: PropTypes.func,
  successMessage: PropTypes.string,
  updateErrorMessage: PropTypes.func,
  errorMessage: PropTypes.string
}

export default SearchPage
