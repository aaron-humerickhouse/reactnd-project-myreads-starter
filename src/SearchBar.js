import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  updateQuery = (query) => {
    const { updateQuery } = this.props;
    updateQuery(query);
  }

  handleChange = (event) => {
    const { clearSearchResults, updateSearchResults } = this.props;
    event.preventDefault();
    const { value } = event.target;
    this.updateQuery(value);

    if (value === '') {
      clearSearchResults();
    } else {
      updateSearchResults(value);
    }
  }

  render() {
    const { query } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button type="button" className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={this.handleChange}
            />
          </div>
        </div>
      </div>
    );
  }
}
SearchBar.propTypes = {
  updateSearchResults: PropTypes.func.isRequired,
  clearSearchResults: PropTypes.func.isRequired,
  updateQuery: PropTypes.func.isRequired,
  query: PropTypes.string,
};
export default SearchBar;
