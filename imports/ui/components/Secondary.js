import React from 'react';

const Secondary = () => (
<section id="secondary">
    <div className="cols container-lg">
      <section id="always-improving">
        <h2 className="common-Uppercase">
          <svg className="heading-icon">
            <circle fill="#B9F4BC" cx="33" cy="33" r="33"/>
            <path d="M20 24c0-1.7 1-2.3 2.5-1.3l13 8.6c1.4 1 1.4 2.4 0 3.4l-13 8.6c-1.4 1-2.5.4-2.5-1.3V24" fill="rgb(110, 214, 154)"/>
            <path d="M20 24c0-1.7 1-2.3 2.5-1.3l13 8.6c1.4 1 1.4 2.4 0 3.4l-13 8.6c-1.4 1-2.5.4-2.5-1.3V24" transform="translate(12)" fill="rgb(27, 185, 120)"/>
          </svg>
          Always improving
        </h2>
        <p className="common-BodyText">
          Stripe is an always-improving toolchain that gains new features every month. Our world-class engineering team constantly iterates upon every facet of the Stripe stack. And from Apple Pay to Bitcoin, building on Stripe means you get early access to the latest technologies.
        </p>
        <a className="common-BodyText common-Link common-Link--arrow" href="/payments">
          Learn about Stripe's products
        </a>
      </section>

      <section id="global-scale">
        <h2 className="common-Uppercase">
          <svg className="heading-icon">
            <circle fill="#B9F4BC" cx="33" cy="33" r="33"/>
            <rect fill="none" stroke="#6ED69A" strokeWidth="2" x="22" y="22" width="22" height="22" rx="1"/>
            <path d="M22.8,34.8 C21.3,33.3 20,33.8 20,36 L20,44 C20,45.1 20.9,46 22,46 L30,46 C32.2,46 32.7,44.7 31.2,43.2 L29,41 L41,29 L43.2,31.2 C44.7,32.7 46,32.2 46,30 L46,22 C46,20.9 45.1,20 44,20 L36,20 C33.8,20 33.3,21.3 34.8,22.8 L37,25 L25,37 L22.8,34.8" stroke="#B9F4BC" strokeWidth="2" fill="#1BB978"/>
          </svg>
          Global scale
        </h2>
        <p className="common-BodyText">
          We help power 100,000+ businesses in 100+ countries and across nearly every industry. Headquartered in San Francisco, Stripe has 9 global offices and hundreds of people working to help transform how modern businesses are built and run.
        </p>
        <a className="common-BodyText common-Link common-Link--arrow" href="/about">
          More about us
        </a>
      </section>
    </div>
</section>
);

export default Secondary;
