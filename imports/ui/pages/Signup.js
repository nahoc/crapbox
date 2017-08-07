import React from 'react';
import { Row, Col, FormGroup, ControlLabel, Button, Alert } from 'react-bootstrap';
import Plans from '../components/Plans';
import Card from '../components/Card';
import handleSignup from '../../modules/signup';

class Signup extends React.Component {
  componentDidMount() {
    handleSignup({ component: this });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="Signup">
        <Row>
          <Col xs={ 12 } sm={ 8 } /*smOffset={ 2 }*/ md={ 6 } /*mdOffset={ 3 }*/>
            <h4 className="page-header">S'abonner à {SITE_NAME}</h4>
            <form
              ref={ form => (this.signupForm = form) }
              onSubmit={ this.handleSubmit }
            >
              <Row>
                <Col xs={ 6 } sm={ 6 }>
                  <FormGroup>
                    <ControlLabel>Prénom</ControlLabel>
                    <input
                      type="text"
                      ref={firstName => (this.firstName = firstName)}
                      name="firstName"
                      placeholder="First Name"
                      className="form-control"
                    />
                  </FormGroup>
                </Col>
                <Col xs={ 6 } sm={ 6 }>
                  <FormGroup>
                    <ControlLabel>Nom de famille</ControlLabel>
                    <input
                      type="text"
                      ref={lastName => (this.lastName = lastName)}
                      name="lastName"
                      placeholder="Last Name"
                      className="form-control"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <ControlLabel>Adresse courriel</ControlLabel>
                <input
                  type="email"
                  ref={emailAddress => (this.emailAddress = emailAddress)}
                  name="emailAddress"
                  placeholder="Email Address"
                  className="form-control"
                />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Mot de passe</ControlLabel>
                <input
                  type="password"
                  ref={password => (this.password = password)}
                  name="password"
                  placeholder="Password"
                  className="form-control"
                />
              </FormGroup>
              <h4 className="page-header">Paiement</h4>
              <Row>
                <Col xs={ 12 }>
                  <Alert bsStyle="info">
                    <strong>Veuillez choisir un abonnement</strong>. Les colis surprises sont envoyés le 15 de chaque mois. Possibilité d'annuler en tout temps.
                  </Alert>
                  <Plans />
                </Col>
              </Row>
              <Row>
                <Col xs={ 12 }>
                  <Card ref={card => (this.card = card)} />
                </Col>
              </Row>
              <Button type="submit" bsStyle="success" block>S'abonner!</Button>
            </form>
          </Col>
        </Row>
        <div className="half-page background-signup"></div>
      </div>
    );
  }
}

export default Signup;
