import Head from 'next/head';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import config from '../config';
import { getPerson } from '../lib/api';
import Header from '../components/Header';
import stylesheet from 'styles/base.scss';

class Profile extends Component {
  static async getInitialProps({ query: { id } }) {
    const profile = await getPerson(config.rover_people_url, id);
    return {
      profile
    };
  }

  render() {
    const { profile } = this.props;

    const result = (
      <div className='sitter-profile'>
        <h1>{profile.first_name}</h1>
        <img
          src={profile.default_image.medium}
          alt={profile.first_name}
          className='sitter-profile__image' />
        <span className='sitter-profile__reviews'>
          {profile.reviews_count} Reviews
        </span>
      </div>
    );

    return (
      <div>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <Head>
          <title>Rover - Sitter Profile</title>
          <meta charSet='utf-8' />
          <meta
            name='viewport'
            content='initial-scale=1.0, width=device-width'
          />
          <link
            href="https://fonts.googleapis.com/css?family=Lato:300,400,700"
            rel="stylesheet"
          />
        </Head>
        <Header />
        <div className='content'>
          {result}
        </div>
      </div>
    );
  };
}

Profile.propTypes = {
  profile: PropTypes.object.isRequired
};

export default Profile;
