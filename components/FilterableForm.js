import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FilterByDate from './FilterByDate';
import FilterByPrice from './FilterByPrice';

class FilterableForm extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleSearch();
  }

  render() {
    return (
      <section className='search-container'>
        <h2>Overnight Boarding Options</h2>
        <form className='search-form' onSubmit={this.handleSubmit}>
          <FilterByDate
            startDate={this.props.startDate}
            endDate={this.props.endDate}
            handleDateFilterStart={this.props.handleDateFilterStart}
            handleDateFilterEnd={this.props.handleDateFilterEnd}
          />
          <FilterByPrice
            minPrice={this.props.minPrice}
            maxPrice={this.props.maxPrice}
            handlePriceFilterMin={this.props.handlePriceFilterMin}
            handlePriceFilterMax={this.props.handlePriceFilterMax}
          />
          <input
            type='submit'
            value='Find a Sitter'
            onClick={this.props.doSearch}
          />
        </form>
      </section>
    );
  }
}

FilterableForm.PropTypes = {
  startDate: PropTypes.object,
  endDate: PropTypes.object,
  handleDateFilterStart: PropTypes.func.isRequired,
  handleDateFilterEnd: PropTypes.func.isRequired,
  minPrice: PropTypes.string,
  maxPrice: PropTypes.string,
  handlePriceFilterMin: PropTypes.func.isRequired,
  handlePriceFilterMax: PropTypes.func.isRequired
}

export default FilterableForm;
