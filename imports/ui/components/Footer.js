import React from 'react';
import { Link } from 'react-router';

const Footer = () => (
    <footer className='globalFooter withCards'>

  <section className="globalFooterCards">
    <div className="container-xl">
        <a
  className="common-Link globalFooterCard card-sigma"
  href="/sigma"
  data-analytics-action="sigma"
  data-analytics-source="card_link"
>
  <svg viewBox="0 0 130 130">
  <circle className="hover-fillLight" cx="65" cy="65" r="55" fill="#beb0f4"/>
  <path d="M51.2 65h32.1c0-2.4-1.8-4.6-4.3-4.9C63.3 58 51.2 44.5 51.2 28.3V16.6c-14.1 4-25.7 13.9-31.8 26.9-.4 1-.4 2.4.2 3.5 6.3 10.7 18.2 18 31.6 18z" fill="#FFF"/>
  <path d="M83.3 65c0 2.4-1.8 4.6-4.3 4.9-15.7 2.1-27.8 15.6-27.8 31.8v11.8c4.4 1.2 9 2 13.8 2 7.3 0 14.4-1.7 20.8-4.4 1.4-.6 2.1-1.8 2.1-3.4V97.1c0-13.8 10.1-25.2 23.4-27.2 2.4-.3 4.1-2.4 4.1-4.9v-.2l-32.1.2z" fill="#FFF"/>
  <path className="hover-fillDark" d="M115.4 64.8c0-2.4-1.8-4.4-4.1-4.9-13.3-1.8-23.4-13.3-23.4-27V15.1c-7-3.2-14.7-5-22.9-5-4.7 0-9.3.6-13.8 1.7v16.6C51.2 44.6 63.3 58 79 60.2c2.4.3 4.3 2.4 4.3 4.9l32.1-.3c0 .2 0 .2 0 0z" fill="#7356b6"/>
  <path className="hover-fillDark" d="M18.7 84.9c-.9 1.8-1.7 3.7-2.3 5.7 7 13.6 19.7 23.8 34.8 27.8v-16.6C51.2 85.6 63.3 72.2 79 70c2.4-.3 4.3-2.4 4.3-4.9H51.2c-14.2-.1-26.4 8-32.5 19.8z" fill="#7356b6"/>
</svg>
  <h2 className="common-Uppercase common-Link--arrow">Découvrez nos plans</h2>
  <p className="common-BodyText">Il est possible pour vous de choisir le montant que vous désirez dépenser par mois sur votre cadeau surprise. Nous offrons des rabais avantageux lorsque vous vous abonnez pour plus de 3 mois.</p>
</a>

  <a
  className="common-Link globalFooterCard card-documentation"
  href="/docs"
  data-analytics-action="documentation"
  data-analytics-source="card_link"
>
  <svg viewBox="0 0 130 130">
  <path className="hover-fillDark" fill="#9251AC" d="M113 112H61.36c-2.224 0-4.466-1.574-5.27-3.277C54.005 104.313 46.457 102 37 102H5a5 5 0 0 1-5-5V25a5 5 0 0 1 5-5h33c11.045 0 20 4.477 20 10v37h60v40a5 5 0 0 1-5 5z"/>
  <path className="hover-fillLight" fill="#F6A4EB" d="M121.993 93c0 6-12.363 10.997-27.384 10.997h-3.464v.01h-23.61c-1.823 0-5.27.637-6.82 1.627-.59.377-1.285.544-1.893.195a1.632 1.632 0 0 1-.817-1.416l.003-74.91c0-4.14 4.815-7.5 10.755-7.5h10.51c.075-.002.148-.008.224-.008h13.17c8.922 0 20.682-2.238 25.62-5.573 1.587-1.072 3.702-.09 3.702 1.82 0 0 .007 67.756 0 74.756z"/>
  <path stroke="#FFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" d="M80.5 86.5h26m-26-10h26m-26-17h26m-26-10h26m-26-10h26"/>
  <path stroke="#FFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" d="M68.992 78.007l3.516 3.494-3.516 3.496m0-43.99l3.516 3.495-3.516 3.496"/>
</svg>
  <h2 className="common-Uppercase common-Link--arrow">Explorez nos produits</h2>
  <p className="common-BodyText">Votre cadeau sera toujours une surprise! Il est toutefois possible pour vous d'avoir un aperçu de ce qui pourrait se trouver dans votre prochaine { SITE_NAME }.</p>
</a>


    </div>
  </section>

    <article className='globalFooterCTA'>
  <div className='container-lg'>

    <div className='content'>
      <h1 className='title'>
        <span className='subtitle'>Prêt(e) à débuter ? </span>
        Vous n'avez qu'à vous créer un compte!
      </h1>
    </div>

    <div className='common-ButtonGroup buttons'>
      <Link className="common-Button common-Button--default" to="/signup" role="button">S'inscrire</Link>
      <Link className="common-Button" to="/signup" role="button">Inscrire un ami</Link>
    </div>

  </div>
</article>



  <article className='globalFooterNav'>
  <div className='container-lg'>

    <ul className="metaNav">

        <li className="select language">
          <a className="rootLink item-language"><svg width="13" height="13"><path d="M8.079,9.837L6.116,12.3A0.654,0.654,0,0,1,5,11.841V9.852C2.488,9.351,1,7.6,1,5.5,1,3.015,3.087,1,6.5,1S12,3.015,12,5.5A4.5,4.5,0,0,1,8.079,9.837Z"/></svg>English</a>
        </li>

      <li className="space"></li>
      <li className="copyright">&copy; { SITE_NAME }</li>
    </ul>

    <div className="siteNav">
      <div className="column">
        <h4>Produits</h4>
          <ul>
            <li><a href="https://stripe.com/payments">Paiements</a></li>
            <li><a href="https://stripe.com/subscriptions">Abonnements</a></li>
          </ul>
      </div>
      <div className="column">
        <h4>Entreprise</h4>
        <ul>
          <li><a href="https://stripe.com/about">A propos</a></li>
        </ul>
      </div>
      <div className="column">
        <h4>Ressources</h4>
        <ul>
          <li><a href="https://stripe.com/contact">FAQ</a></li>
          <li><a href="https://stripe.com/contact">Contact</a></li>
        </ul>
      </div>
    </div>

  </div>
</article>


</footer>
);

export default Footer;
