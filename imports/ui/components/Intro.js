import React from 'react';
import { Link } from 'react-router';

const Intro = () => (
  <section id="intro">
      <div className="container">
          <a className="announcement" href="/blog/hong-kong">
            <span className="new-pill">Nouveau</span>
            <span className="message">
                Nous livrons maintenant à travers tout le Québec!
            </span>
          </a>

        <h1>
          Un cadeau surprise, tous les mois!
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
