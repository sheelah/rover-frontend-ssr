import DatePicker from 'react-datepicker';
import React, { Component } from 'react';
import helpers from '../lib/helpers';
import PropTypes from 'prop-types';
import reactDatePickerStyles from 'react-datepicker/dist/react-datepicker.css';

class FilterByDate extends Component {
  constructor() {
    super();
    this.handleDateChangeStart = this.handleDateChangeStart.bind(this);
    this.handleDateChangeEnd = this.handleDateChangeEnd.bind(this);
  }

  handleDateChangeStart(date) {
    this.props.handleDateFilterStart(date);
  }

  handleDateChangeEnd(date) {
    this.props.handleDateFilterEnd(date);
  }

  render() {
    return (
      <div>
        <style global jsx>
          {reactDatePickerStyles}
        </style>
        <fieldset>
          <legend>By Date</legend>
          <label>Start date
          <DatePicker
            selected={this.props.startDate}
            selectsStart
            startDate={this.props.startDate}
            endDate={this.props.endDate}
            minDate={helpers.getTomorrow()}
            onChange={this.handleDateChangeStart}
          />
          </label>
          <label>End date
          <DatePicker
            selected={this.props.endDate}
            selectsEnd
            startDate={this.props.startDate}
            endDate={this.props.endDate}
            minDate={helpers.getTomorrow()}
            onChange={this.handleDateChangeEnd}
          />
          </label>
        </fieldset>
      </div>
    );
  }
}

FilterByDate.propTypes = {
  startDate: PropTypes.object,
  endDate: PropTypes.object,
  handleDateFilterStart: PropTypes.func.isRequired,
  handleDateFilterEnd: PropTypes.func.isRequired
};

export default FilterByDate;
