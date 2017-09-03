import PropTypes from 'prop-types';
import React from 'react';
import Logo from './Logo';

const Header = () => {
  return (
    <header className="global-header">
      <Logo />
      <h1>Find an Overnight Dog Sitter</h1>
    </header>
  );
};

Header.propTypes = {
};

export default Header;
