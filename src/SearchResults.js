import React from 'react'
import * as customPropTypes from './types'
import PropType from 'prop-types'
import BookList from './BookList'

class SearchResults extends React.Component {

  render() {
    return(
      <div className="search-books-results">
        <BookList books={this.props.searchResults} updateSuccessMessage={this.props.updateSuccessMessage} />
      </div>
    )
  }
}

SearchResults.propTypes = {
  searchResults: PropType.oneOfType([
    PropType.arrayOf(customPropTypes.bookPropType),
    PropType.shape({
      error: PropType.string,
      items: PropType.array
    })
  ]).isRequired,
  updateSuccessMessage: PropType.func
}

export default SearchResults
