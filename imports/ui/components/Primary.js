import React from 'react';

const Primary = () => (
<section id="primary">
    <section id="complete-toolkit" className="container">
      <div className="video-position">
      <div className="video-container">
        <iframe src="https://www.youtube.com/embed/yRWY9UogMJA" frameBorder="0" width="560" height="315"></iframe>
      </div>
      </div>
      <h2 className="common-UppercaseTitle">
        <svg className="heading-icon">
          <circle fill="#B9F4BC" cx="33" cy="33" r="33"/>
          <path d="M15.7 45.3c-.7-2-.7-3.3-.7-8v-8.7c0-4.6 0-6 .7-8 .8-2.2 2.7-4 5-5 2-.6 3.3-.6 8-.6h8.7c4.6 0 6 0 8 .7 2.2.8 4 2.7 5 5 .6 2 .6 3.3.6 8v8.7c0 4.6 0 6-.7 8-.8 2.2-2.7 4-5 5-2 .6-3.3.6-8 .6h-8.7c-4.6 0-6 0-8-.7-2.2-.8-4-2.7-5-5z" fill="#6ED69A"/>
          <g>
            <rect fill="#B9F4BC" x="23" y="27" width="20" height="2" rx="1"/>
            <circle fill="#1BB978" cx="27" cy="28" r="4"/>
          </g>
          <g>
            <rect fill="#1BB978" x="23" y="37" width="20" height="2" rx="1"/>
            <circle fill="#1BB978" cx="39" cy="38" r="4"/>
          </g>
        </svg>
        <span>
          Vous aimez les bonnes surprises?
        </span>
      </h2>
      <p className="common-BodyText">
        Avec { SITE_NAME }, vous choisissez le montant que vous voulez investir chaque mois et on s'occupe de choisir un cadeau pour vous! Lorsque vous créer votre compte, il est possible de choisir les catégories de produits qui vous intéressent le plus ou bien de faire 100% confiance au hasard.
      </p>
      <a className="common-BodyText common-Link common-Link--arrow" href="/customers">
        Découvrez comment nos services fonctionnent
      </a>
    </section>

    <section id="developers-first">
      <div id="programming-languages"></div>
      <h2 className="common-UppercaseTitle">
        <svg className="heading-icon">
          <circle fill="#B9F4BC" cx="33" cy="33" r="33"/>
          <path d="M38.4 15l1-3h1l1.2 3c.2.2.5.2.7.3l2.2-2.5 1 .4-.2 3.3c.2 0 .3.2.5.4l3-1.5.7.7-1.4 3 .5.5h3.3l.4.8-2.5 2.2c0 .2 0 .5.2.7l3 1v1l-3 1.2-.3.8 2.5 2-.4 1-3.3-.2-.4.7 1.5 2.8-.7.7-3-1.4c0 .2-.4.4-.6.5l.2 3.3-1 .4-2-2.5c-.3 0-.6 0-1 .2l-1 3h-1l-1-3c-.2-.2-.5-.2-.8-.3l-2 2.5-1-.4.2-3.3-.7-.4-2.8 1.5-.7-.7 1.4-3c-.2 0-.4-.4-.5-.6l-3.3.2-.4-1 2.5-2c0-.3 0-.6-.2-1l-3-1v-1l3-1c.2-.2.2-.4.3-.7l-2.5-2.2.4-1 3.3.2c0-.2.2-.3.4-.5l-1.5-3 .7-.7 3 1.4.5-.5v-3.3l.8-.4 2.2 2.5s.5 0 .7-.2z" fill="#6ED69A"/>
          <circle fill="#B9F4BC" cx="40" cy="25" r="2"/>
          <path d="M21.6 26.8L19 25l-1.3 1 1.4 3c0 .2-.3.4-.5.6l-3-.8-1 1.4 2.4 2.3-.4.8-3.2.3-.3 1.6 3 1.4v.8l-3 1.4.4 1.6 3.2.3c0 .3.2.5.3.8l-2.4 2.3.8 1.4 3-.8.7.6-1.3 3 1.3 1 2.6-1.8c.3 0 .5.3.8.4l-.3 3.2 1.6.6 2-2.7c.2 0 .5 0 .7.2l1 3h1.5l1-3c0-.2.4-.2.7-.3l2 2.7 1.4-.6-.4-3.2c.3 0 .5-.3.8-.4L37 49l1.3-1-1.4-3c0-.2.3-.4.5-.6l3 .8 1-1.4-2.4-2.3.4-.8 3.2-.3.3-1.6-3-1.4v-.8l3-1.4-.4-1.6-3.2-.3c0-.3-.2-.5-.3-.8l2.4-2.3-.8-1.4-3 .8-.7-.6 1.3-3-1.3-1-2.6 1.8c-.3 0-.5-.3-.8-.4l.3-3.2-1.6-.6-2 2.7c-.2 0-.5 0-.7-.2l-1-3h-1.5l-1 3c0 .2-.4.2-.7.3l-2-2.7-1.4.6.4 3.2c-.3 0-.5.3-.8.4z" fill="#1BB978"/>
          <circle fill="#B9F4BC" cx="28" cy="37" r="3"/>
        </svg>
        Notre garanti
      </h2>
      <p className="common-BodyText">
        Nous sommes un entreprise Québecoise qui a à coeur votre satisfaction. C'est pourquoi ne nous vous enverrons que des produits neufs et de qualité. Il est possible pour vous d'annuler votre abonnement en tout temps et nous sommes toujours disponibles pour répondre à vos questions par courriel.
      </p>
      <br/>
      <br/>
    </section>
  </section>
);

export default Primary;
