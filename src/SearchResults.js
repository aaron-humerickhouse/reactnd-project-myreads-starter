import React from 'react'
import * as customPropTypes from './types'
import PropTypes from 'prop-types'
import BookList from './BookList'

class SearchResults extends React.Component {
  render() {
    return(
      <div className="search-books-results">
        <BookList books={this.props.searchResults}  />
      </div>
    )
  }
}

SearchResults.propTypes = {
  searchResults: PropTypes.any.isRequired
  // searchResults: PropTypes.oneOf([
  //   PropTypes.arrayOf(customPropTypes.bookPropType),
  //   PropTypes.shape({
  //     error: PropTypes.string,
  //     items: PropTypes.array
  //   })
  // ]).isRequired
}

export default SearchResults
