import React from 'react';
import { Link } from 'react-router';
import { Row, Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import handleLogin from '../../modules/login';

export default class Login extends React.Component {
  componentWillMount() {
    // classe pour faire la navigation d'une autre couleur'
    document.body.classList.add('bodyLogin');
  }

  componentDidMount() {
    handleLogin({ component: this });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="Login">
      <div className="container">
        <Row>
          <Col xs={ 12 } sm={ 6 } md={ 4 }>
            <h4 className="page-header">Se connecter</h4>
            <form
              ref={ form => (this.loginForm = form) }
              className="login"
              onSubmit={ this.handleSubmit }
            >
              <FormGroup>
                <ControlLabel>Adresse courriel</ControlLabel>
                <FormControl
                  type="email"
                  ref="emailAddress"
                  name="emailAddress"
                  placeholder="Email Address"
                />
              </FormGroup>
              <FormGroup>
                <ControlLabel>
                  <span className="pull-left">Mot de passe</span>
                  <Link className="pull-right" to="/recover-password">Mot de passe oublié?</Link>
                </ControlLabel>
                <FormControl
                  type="password"
                  ref="password"
                  name="password"
                  placeholder="Password"
                />
              </FormGroup>
              <Button type="submit" bsStyle="success">Se connecter</Button>
            </form>
          </Col>
        </Row>
        </div>
      </div>
    );
  }
}
