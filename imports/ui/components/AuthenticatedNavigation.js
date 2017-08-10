import React from 'react';
import { browserHistory } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';

const handleLogout = () => Meteor.logout(() => browserHistory.push('/login'));

const userName = () => {
  const user = Meteor.user();
  const name = user && user.profile ? user.profile.name : '';
  return user ? `${name.first} ${name.last}` : '';
};

const AuthenticatedNavigation = () => (
  <div>
    <Nav>
      <LinkContainer to="/subscription">
        <NavItem eventKey={ 2 } href="/subscription">Abonnement</NavItem>
      </LinkContainer>
    </Nav>
    <Nav>
      <LinkContainer to="/documents">
        <NavItem eventKey={ 3 } href="/categories">Catégories</NavItem>
      </LinkContainer>
    </Nav>
    <Nav pullRight>
      <NavDropdown eventKey={ 4 } title={ userName() } id="basic-nav-dropdown">
        <LinkContainer to="/subscription">
          <MenuItem eventKey={ 4.1 } href="/profile">Mon compte</MenuItem>
        </LinkContainer>
        <MenuItem eventKey={ 4.2 } onClick={ handleLogout }>Logout</MenuItem>
      </NavDropdown>
    </Nav>
  </div>
);

export default AuthenticatedNavigation;
