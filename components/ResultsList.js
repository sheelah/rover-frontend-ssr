import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading.js';
import ResultsListItem from './ResultsListItem';

class ResultsList extends Component {
  render() {
    const { results, isLoading, haveSearched } = this.props;

    if (isLoading) {
      return (
        <main className='search-results'>
          <div className='wrapper wrapper--icon'>
            <Loading />
          </div>
        </main>
      );
    }

    if (!isLoading && haveSearched && results.length  === 0) {
      // No matches were found
      return (
        <main className='search-results'>
          <div className='wrapper'>
            <p className="error--no-results">
              Sorry - no matches were found! Try changing your search options.
            </p>
          </div>
        </main>
      );
    }

    return (
      <main className='search-results'>
        <div className='wrapper'>
          <ul className='search-results__list'>
            {results.map(item => {
              return <ResultsListItem key={item.person_opk}
                person={item} />;
            })}
          </ul>
        </div>
      </main>
    );
  }
}

ResultsList.propTypes = {
  results: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  haveSearched: PropTypes.bool.isRequired
};

export default ResultsList;
