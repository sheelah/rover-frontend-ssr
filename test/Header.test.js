import React from 'react';
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme';
import Header from '../components/Header.js';

it('Renders header with correct class', () => {
  const component = shallow(
    <Header />
  );
  expect(component.find('header').hasClass('global-header')).toEqual(true);
});
