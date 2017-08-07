import React from 'react';
import { Link } from 'react-router';
import { Jumbotron } from 'react-bootstrap';

const Index = () => (
  <div className="Index">
    <Jumbotron className="text-center">
      <h2>{SITE_NAME}</h2>
      <p>Un cadeau aléatoire, tous les mois!</p>
      <p><Link className="btn btn-success" to="/signup" role="button">S'inscrire</Link> <Link className="btn btn-default" to="/signup" role="button">Inscrire un ami</Link></p>
    </Jumbotron>

    <div>
      <h3 className="">Comment ça fonctionne?</h3>
    </div>
  </div>
);

export default Index;
