import Head from 'next/head';
import React, {Component} from 'react';
import config from '../config';
import { getPerson } from '../lib/api';
import Header from '../components/Header';
import Loading from '../components/Loading.js';
import stylesheet from 'styles/base.scss';

class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      profile: {},
      isLoading: true
    };
  }

  async componentDidMount() {
    const user = await getPerson(config.rover_people_url, this.props.url.query.id);
    const profile = Object.assign({}, user)
    this.setState({
      profile,
      isLoading: false
    });
  } 

  render() {
    const { profile, isLoading } = this.state;

    let result = (
      <div className='sitter-profile'>
        <Loading />
      </div>
    );

    if (!isLoading) {
      result = (
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
    }

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

export default Profile;