import Head from 'next/head';
import React, {Component} from 'react';
import config from '../config';
import getResults from '../api';
import Header from '../components/Header';
import helpers from '../helpers';
import ResultsList from '../components/ResultsList';

class App extends Component {
  static async getInitialProps() {
    const startDate = helpers.getTomorrow();
    const endDate = helpers.get7DaysFromTomorrow();
    const dateOptions = helpers.parseDateOptions(startDate, endDate);
    const minPrice = '20';
    const maxPrice = '100';
    const priceOptions = helpers.parsePriceOptions(minPrice, maxPrice);
    const haveSearched = false;
    const params = helpers.setQueryParams(dateOptions, priceOptions);

    const results = await getResults(config.rover_api_url, params);
    return {
      results: results,
      haveSearched: true,
      startDate: startDate,
      endDate: endDate,
      minPrice: minPrice,
      maxPrice: maxPrice
    };
  }

  render() {
    return (
      <div className='content'>
        <Head>
          <title>Rover - Home</title>
          <meta charSet='utf-8' />
          <meta
            name='viewport'
            content='initial-scale=1.0, width=device-width' />
        </Head>
        <Header />
         <ResultsList
          results={this.props.results}
          haveSearched={this.props.haveSearched}
        />
      </div>
    );
  }
}

export default App;
