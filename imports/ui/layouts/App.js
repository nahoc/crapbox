import React from 'react';
import { Grid } from 'react-bootstrap';
import AppNavigation from '../containers/AppNavigation.js';

const App = ({ children }) => (
  <div>
    <AppNavigation />
    { children }
  </div>
);

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
