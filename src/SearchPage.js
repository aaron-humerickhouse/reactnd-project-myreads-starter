import React from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import * as BooksApi from './BooksAPI';

class SearchPage extends React.Component {
  state = {
    query: '',
    searchResults: [],
  }

  hasErrorMessage = () => {
    const { errorMessage } = this.props;
    return errorMessage !== '';
  }

  hasSuccessMessage = () => {
    const { successMessage } = this.props;
    return successMessage !== '';
  }

  updateSuccessMessage = (message) => {
    const { updateSuccessMessage } = this.props;
    const { query } = this.state;

    updateSuccessMessage(message);
    this.updateSearchResults(query);
  }

  updateQuery = (query) => {
    this.setState(() => ({
      query,
    }));
  }

  clearSearchResults() {
    this.setState(() => ({
      searchResults: [],
    }));
  }

  updateSearchResults(query) {
    const { updateErrorMessage } = this.props;
    BooksApi.search(query)
      .then((books) => {
        if (Array.isArray(books)) {
          this.setState(() => ({
            searchResults: books,
          }));
          updateErrorMessage('');
        } else {
          updateErrorMessage('No Results found');
          this.clearSearchResults();
        }
      });
  }

  render() {
    this.updateSearchResults = this.updateSearchResults.bind(this);
    this.clearSearchResults = this.clearSearchResults.bind(this);

    const {
      successMessage,
      errorMessage,
      shelves,
      addBookToShelf,
    } = this.props;
    const { searchResults } = this.state;

    return (
      <div>
        <SearchBar
          updateSearchResults={this.updateSearchResults}
          clearSearchResults={this.clearSearchResults}
          updateQuery={this.updateQuery}
        />
        {
          this.hasSuccessMessage() && (
            <div className="success">
              {successMessage}
            </div>

          )
        }
        {
          this.hasErrorMessage() ? (
            <div className="error">
              {errorMessage}
            </div>
          ) : (
            <SearchResults
              searchResults={searchResults}
              updateSuccessMessage={this.updateSuccessMessage}
              shelves={shelves}
              addBookToShelf={addBookToShelf}
            />
          )
        }
      </div>
    );
  }
}

SearchPage.propTypes = {
  updateSuccessMessage: PropTypes.func.isRequired,
  successMessage: PropTypes.string.isRequired,
  updateErrorMessage: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired,
  shelves: PropTypes.object.isRequired,
  addBookToShelf: PropTypes.func.isRequired,
};

export default SearchPage;
