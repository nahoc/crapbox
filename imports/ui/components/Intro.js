import React from 'react';
import { Alert, ListGroup, ListGroupItem, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router';

const Intro = () => (
  <section id="intro">
      <div className="container-lg">
          <a className="announcement" href="/blog/hong-kong">
            <span className="new-pill">New</span>
            <span className="message">
                Stripe in Hong Kong + Alipay and WeChat Pay globally.
            </span>
          </a>

        <h1>
          The new standard in online payments
        </h1>
        <p className="common-BodyText">
          Stripe is the best software platform for running an internet business. We handle billions of dollars every year for forward-thinking businesses around the world.
        </p>
          <ul>
            <li>
              <Link className="common-Button" to="/signup" role="button">S'inscrire</Link>
            </li>
            <li>
              <Link className="common-Button" to="/signup" role="button">Inscrire un ami</Link>
            </li>
          </ul>
      </div>
    </section>
);

export default Intro;
