import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import { _ } from 'meteor/underscore';
import { Jumbotron } from 'react-bootstrap';
import Stripes from '../components/Stripes';
import Intro from '../components/Intro';
import AppIllustrations from '../components/AppIllustrations';
import Primary from '../components/Primary';
import Secondary from '../components/Secondary';

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className="globalContent">
    <main>
      <header>
        <Stripes/>
        <Intro/>
      </header>
      <AppIllustrations/>
      <Primary/>
      <Secondary/>
    </main>
    </div>);
  }
}

export default Index;
