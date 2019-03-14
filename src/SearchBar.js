import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

class SearchBar extends React.Component {

  updateQuery = (query) => {
    this.props.updateQuery(query)
  }

  handleChange = (event) => {
    event.preventDefault()
    const value = event.target.value
    this.updateQuery(value)

    if(value === '') {
      this.props.clearSearchResults()
    } else {
      this.props.updateSearchResults(value)
    }
  }

  render() {
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.props.query}
              onChange={this.handleChange}
            />
          </div>
        </div>
      </div>
    )
  }
}
SearchBar.propTypes = {
  updateSearchResults: PropTypes.func.isRequired,
  clearSearchResults: PropTypes.func.isRequired,
  updateQuery: PropTypes.func.isRequired
}
export default SearchBar
