import Head from 'next/head';
import React, {Component} from 'react';
import config from '../config';
import getResults from '../lib/api';
import FilterableForm from '../components/FilterableForm';
import Header from '../components/Header';
import helpers from '../lib/helpers';
import ResultsList from '../components/ResultsList';
import stylesheet from 'styles/base.scss';

class App extends Component {
  static async getInitialProps() {
    // Set up initial data in prep for server-side rendering
    const haveSearched = false;
    const params = helpers.uriEncodeParams(helpers.getBaseQueryParams());

    const results = await getResults(config.rover_api_url, params);
    return {
      results: results,
      haveSearched: true
    };
  }

  constructor(props) {
    super(props);

    // Populate initial state based on props
    this.state = {
      results: props.results,
      isLoading: false,
      haveSearched: props.haveSearched,
      startDate: null,
      endDate: null,
      minPrice: '',
      maxPrice: ''
    };
    this.handleDateFilterStart = this.handleDateFilterStart.bind(this);
    this.handleDateFilterEnd = this.handleDateFilterEnd.bind(this);
    this.handlePriceFilterMin = this.handlePriceFilterMin.bind(this);
    this.handlePriceFilterMax = this.handlePriceFilterMax.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleDateFilterStart(startDate) {
    this.setState({ startDate });
  }

  handleDateFilterEnd(endDate) {
    this.setState({ endDate });
  }

  handlePriceFilterMin(minPrice) {
    this.setState({ minPrice });
  }

  handlePriceFilterMax(maxPrice) {
    this.setState({ maxPrice });
  }

  async handleSearch() {
    const { startDate, endDate, minPrice, maxPrice } = this.state;
    this.setState({
      results: [],
      isLoading: true
    });

    // Prep query params for API search based on filters
    const dateOptions = helpers.parseDateOptions(startDate, endDate);
    const priceOptions = helpers.parsePriceOptions(minPrice, maxPrice);

    const params = helpers.getFullQueryParams(dateOptions, priceOptions);
    const encodedParams = helpers.uriEncodeParams(params);

    const results = await getResults(config.rover_api_url, encodedParams);
    this.setState({
      results: results,
      isLoading: false,
      haveSearched: true
    });
  }

  render() {
    const { startDate, endDate, minPrice, maxPrice } = this.state;
    const { results, isLoading, haveSearched } = this.state;
    return (
      <div>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <Head>
          <title>Rover - Home</title>
          <meta charSet='utf-8' />
          <meta
            name='viewport'
            content='initial-scale=1.0, width=device-width'
          />
          <link
            href="https://fonts.googleapis.com/css?family=Lato:300,400,700"
            rel="stylesheet"
          />
        </Head>
        <Header />
        <div className='content'>
          <FilterableForm
            startDate={startDate}
            endDate={endDate}
            handleDateFilterStart={this.handleDateFilterStart}
            handleDateFilterEnd={this.handleDateFilterEnd}
            minPrice={minPrice}
            maxPrice={maxPrice}
            handlePriceFilterMin={this.handlePriceFilterMin}
            handlePriceFilterMax={this.handlePriceFilterMax}
            handleSearch={this.handleSearch}
          />
          <ResultsList
            results={results}
            isLoading={isLoading}
            haveSearched={haveSearched}
          />
        </div>
      </div>
    );
  }
}

export default App;
