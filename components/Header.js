import PropTypes from 'prop-types';
import React from 'react';
import Logo from './Logo';

const Header = () => {
  return (
    <header className="global-header">
      <Logo />
    </header>
  );
};

Header.propTypes = {
};

export default Header;
