import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ResultsListItem from './ResultsListItem';

class ResultsList extends Component {
  render() {
    const { results, haveSearched } = this.props;

    if (haveSearched && results.length  === 0) {
      // No matches were found
      return (
        <main className='search-results'>
          <p className="error--no-results">
            Sorry - no matches were found! Try changing your search options.
          </p>
        </main>
      );
    }

    return (
      <main className='search-results'>
        <ul className='search-results__list'>
          {results.map(item => {
            return <ResultsListItem key={item.person_opk}
              person={item} />;
          })}
        </ul>
      </main>
    );
  }
}

ResultsList.propTypes = {
  results: PropTypes.array.isRequired,
  haveSearched: PropTypes.bool.isRequired
};

export default ResultsList;
