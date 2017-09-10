import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import ResultsList from '../components/ResultsList.js';

describe('No results', () => {
  const results = [];
  const haveSearched = false;
  const isLoading = true;

  it('Renders a loader when a search is active', () => {
    const component = shallow(
      <ResultsList
        results={results}
        isLoading={isLoading}
        haveSearched={haveSearched}
      />
    );
    expect(component.find('.search-results .wrapper--icon')).toHaveLength(1);
  });

  it('Renders correct results list markup', () => {
    const component = renderer.create(
      <ResultsList
          results={results}
          isLoading={isLoading}
          haveSearched={haveSearched}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
