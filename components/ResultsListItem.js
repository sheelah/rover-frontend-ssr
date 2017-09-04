import React from 'react';
import PropTypes from 'prop-types';

const ResultsListItem = ({ person }) => {
  const personDetails = person.person_summary;

  return (
    <li>
      <a href={personDetails.web_url}>
        <img
          src={personDetails.default_image.small}
          alt={person.person_name}
          className='person__image'
        />
      </a>
      <div className='person__details'>
        <span className='person__name'>{person.person_name}</span>
        <span className='person__location'>{person.city}</span>
        <span className='person__brief'>{person.title}</span>
        <span className='person__rating'>
          Average rating: {person.ratings_average}
        </span>
        <span className='person__price'>${person.price}/night</span>
      </div>
    </li>
  );
};

ResultsListItem.propTypes = {
  person: PropTypes.object.isRequired
};

export default ResultsListItem;
