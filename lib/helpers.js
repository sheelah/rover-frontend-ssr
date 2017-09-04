import moment from 'moment';

/* Helper functions */

const helpers = {
  getTomorrow() {
    return moment().add(1, 'days');
  },

  get7DaysFromTomorrow() {
    return moment().add(8, 'days')
  },

  parseDateOptions(startDate, endDate) {
    // Disregard dates if we're missing a start or end date
    if (!startDate || !endDate) {
      return [null, null];
    }

    const start = startDate.format('YYYY-MM-DD');
    const end = endDate.format('YYYY-MM-DD');
    return [start, end];
  },

  parsePriceOptions(minPrice, maxPrice) {
    const min = parseInt(minPrice, 10) || null;
    const max = parseInt(maxPrice, 10) || null;
    return [min, max];
  },

  uriEncodeParams(options) {
    const encode = encodeURIComponent;
    const params = (Object.keys(options)
      .map(option => `${encode(option)}=${encode(options[option])}`)
      .join('&')
    );
    return params;
  },

  getBaseQueryParams() {
    const options = {
      service_type: 'overnight-boarding',
      minlng: '-118.54377075195316',
      maxlng: '-118.37622924804691',
      minlat: '34.08719048997361',
      maxlat: '34.23974059722458'
    };
    return options;
  },

  getFullQueryParams(dateOptions, priceOptions) {
    const [minDate, maxDate] = dateOptions;
    const [minPrice, maxPrice] = priceOptions;
    const baseOptions = this.getBaseQueryParams();

    // Include base query params and add in price options
    let options = Object.assign({}, baseOptions);

    if (minPrice) {
      options = Object.assign({}, options, { minprice: minPrice });
    }

    if (maxPrice) {
      options = Object.assign({}, options, { maxprice: maxPrice });
    }

    // Add in date options if set
    if (minDate && maxDate) {
      options = Object.assign({}, options, {
        start_date: minDate,
        end_date: maxDate
      });
    }
    return options;
  }
};

export default helpers;
