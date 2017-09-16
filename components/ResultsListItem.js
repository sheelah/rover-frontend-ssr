import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const ResultsListItem = ({ person }) => {
  const personDetails = person.person_summary;
  const profileUrl = personDetails.url;

  return (
    <li>
      <Link href={{ pathname: '/profile', query: { id: person.person_opk }}}>
        <a>
          <img
            src={personDetails.default_image.small}
            alt={person.person_name}
            className='person__image'
          />
        </a>
      </Link>
      <div className='person__details'>
        <span className='person__name'>{person.person_name}</span>
        <span className='person__location'>{person.city}</span>
        <span className='person__brief'>{person.title}</span>
        <span className='person__rating'>
          Average rating: {person.ratings_average}
        </span>
        <span className='person__price'>
          <span className='person__price--dollars'>${person.price}</span>
        /night</span>
      </div>
    </li>
  );
};

ResultsListItem.propTypes = {
  person: PropTypes.object.isRequired
};

export default ResultsListItem;
