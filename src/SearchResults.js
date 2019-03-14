import React from 'react'
import * as customPropTypes from './types'
import PropTypes from 'prop-types'
import BookList from './BookList'

class SearchResults extends React.Component {

  render() {
    return(
      <div className="search-books-results">
        <BookList
          books={this.props.searchResults}
          shelves={this.props.shelves}
          updateSuccessMessage={this.props.updateSuccessMessage}
          addBookToShelf={this.props.addBookToShelf}
        />
      </div>
    )
  }
}

SearchResults.propTypes = {
  searchResults: PropTypes.oneOfType([
    PropTypes.arrayOf(customPropTypes.bookPropType),
    PropTypes.shape({
      error: PropTypes.string,
      items: PropTypes.array
    })
  ]).isRequired,
  updateSuccessMessage: PropTypes.func,
  shelves: PropTypes.object.isRequired,
  addBookToShelf: PropTypes.func.isRequired
}

export default SearchResults
