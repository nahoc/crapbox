import React from 'react';
import { Row, Col, FormGroup, ControlLabel, Button, Alert } from 'react-bootstrap';
import Plans from '../components/Plans';
import Card from '../components/Card';
import handleSignup from '../../modules/signup';

function newScript(src) {
  return new Promise(function(resolve, reject){
    var script = document.createElement('script');
    script.src = src;
    script.addEventListener('load', function () {
      resolve();
    });
    script.addEventListener('error', function (e) {
      reject(e);
    });
    document.body.appendChild(script);
  })
};

const myScript = newScript('http://maps.googleapis.com/maps/api/js?libraries=places&amp;sensor=false&key=AIzaSyDGT-UBzrvOXcxAZkd_d0ihIC-Uhcejc_s');

class Signup extends React.Component {

  componentWillMount() {
    // classe pour faire la navigation d'une autre couleur'
    document.body.classList.add('bodySignup');
  }

  componentDidMount() {
    handleSignup({ component: this });
    const self = this;
    myScript.then(function() {
      self.setState({ 'status': 'done' });
      const options = {
        componentRestrictions: { country: 'ca' }
      };
      const input = document.getElementById('where');
      const autocomplete = new google.maps.places.Autocomplete(input, options);
      google.maps.event.addDomListener(input, 'keydown', function(event) { 
        if (event.keyCode === 13) { 
          event.preventDefault(); 
        }
      }); 
    }).catch(function() {
      self.setState({'status': 'error'});
    })
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
    <div className="Signup">
      <div className="container">
        <Row>
          <Col className="float-center" xs={ 12 } sm={ 8 } /*smOffset={ 2 }*/ md={ 8 } /*mdOffset={ 3 }*/>
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
                      placeholder="Prénom"
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
                      placeholder="Nom de famille"
                      className="form-control"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
              <Col xs={ 6 } sm={ 6 }>
              <FormGroup>
                <ControlLabel>Adresse courriel</ControlLabel>
                <input
                  type="email"
                  ref={emailAddress => (this.emailAddress = emailAddress)}
                  name="emailAddress"
                  placeholder="Adresse courriel"
                  className="form-control"
                />
              </FormGroup>
              </Col>
              <Col xs={ 6 } sm={ 6 }>
              <FormGroup>
                <ControlLabel>Mot de passe</ControlLabel>
                <input
                  type="password"
                  ref={password => (this.password = password)}
                  name="password"
                  placeholder="Most de passe"
                  className="form-control"
                />
              </FormGroup>
              </Col>
              </Row>
              <h4 className="page-header">Adresse de paiement</h4>
              <FormGroup>
                <ControlLabel>Adresse</ControlLabel>
                <input
                  id="where"
                  name="where"
                  className="form-control"
                  placeholder="Adresse"
                />
              </FormGroup>
              <Row>
              <Col xs={ 4 } sm={ 4 }>
              <FormGroup>
                <ControlLabel>Appartement</ControlLabel>
                <input
                  type="text"
                  id="apartment"
                  name="apartment"
                  className="form-control"
                  placeholder="S'il y a lieu"
                />
              </FormGroup>
              </Col>
              <Col xs={ 4 } sm={ 4 }>
              <FormGroup>
                <ControlLabel>Code postal</ControlLabel>
                <input
                  type="text"
                  pattern="[A-Za-z][0-9][A-Za-z] [0-9][A-Za-z][0-9]"
                  id="postalCode"
                  name="postalCode"
                  className="form-control"
                  placeholder="X1X 1X1"
                />
              </FormGroup>
              </Col>
              <Col xs={ 4 } sm={ 4 }>
              <FormGroup>
                <ControlLabel>Téléphone</ControlLabel>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-control"
                  placeholder="(555) 555-5555"
                />
              </FormGroup>
              </Col>
              </Row>
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
        </div>
        <div className="half-page background-signup"></div>
      </div>
    );
  }
}

export default Signup;
