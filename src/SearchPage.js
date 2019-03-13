import React from 'react'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'
import * as BooksApi from './BooksAPI'

class SearchPage extends React.Component {
  state = {
    error: '',
    searchResults: []
  }

  updateSearchResults(query) {
    BooksApi.search(query)
    .then((books) => {
      if(Array.isArray(books)) {
        this.setState(() => ({
          searchResults: books,
          error: ''
        }))
      } else {
        this.setState(() => ({
          error: `No Results Found`
        }))
        this.clearSearchResults()
      }
    })
  }

  clearSearchResults() {
    this.setState(() => ({
      searchResults: []
    }))
  }

  hasError = () => (
    this.state.error !== ''
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
          this.hasError() ? (
            <div className="error" style={{
              paddingTop: "80px"
            }}>
              {this.state.error}
            </div>
          ) : (
            <SearchResults
              searchResults={this.state.searchResults}
            />
          )
        }
      </div>
    )
  }
}

export default SearchPage
