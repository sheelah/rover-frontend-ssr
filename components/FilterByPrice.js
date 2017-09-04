import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FilterByPrice extends Component {
   constructor() {
    super();
    this.handlePriceChange = this.handlePriceChange.bind(this);
  }

  handlePriceChange(event) {
    if (event.target.name === 'minPrice') {
      this.props.handlePriceFilterMin(event.target.value);
    } else {
      this.props.handlePriceFilterMax(event.target.value);
    }
  }

  render() {
    return (
      <fieldset>
        <legend>By Price</legend>
        <label>Minimum price
          <input
            type='number'
            step='5'
            name='minPrice'
            value={this.props.minPrice}
            onChange={this.handlePriceChange}
          />
        </label>
        <label>Maximum price
          <input
            type='number'
            step='5'
            name='maxPrice'
            value={this.props.maxPrice}
            onChange={this.handlePriceChange}
          />
        </label>
      </fieldset>
    );
  }
}

FilterByPrice.propTypes = {
  minPrice: PropTypes.string,
  maxPrice: PropTypes.string,
  handlePriceFilterMin: PropTypes.func.isRequired,
  handlePriceFilterMax: PropTypes.func.isRequired
};

export default FilterByPrice;
