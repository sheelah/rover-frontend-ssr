import PropTypes from 'prop-types';
import React from 'react';
import Logo from './Logo';

const Header = () => {
  return (
    <header className="global-header">
      <div className='wrapper'>
        <Logo />
      </div>
    </header>
  );
};

Header.propTypes = {
};

export default Header;
