import React from 'react';

const Primary = () => (
<section id="primary">
    <section id="complete-toolkit" className="container-lg">
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
          The complete toolkit for internet business
        </span>
      </h2>
      <p className="common-BodyText">
        Stripe builds the most powerful and flexible tools for internet commerce. Whether you’re creating a subscription service, an on-demand marketplace, an e-commerce store, or a crowdfunding platform, Stripe’s meticulously-designed APIs and unmatched functionality help you create the best possible product for your users. Hundreds of thousands of the world’s most innovative technology companies are scaling faster and more efficiently by building their businesses on Stripe.
      </p>
      <a className="common-BodyText common-Link common-Link--arrow" href="/customers">
        Discover how businesses use Stripe
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
        Developers first
      </h2>
      <p className="common-BodyText">
        We believe that payments is a problem rooted in code, not finance. We obsessively seek out elegant, composable abstractions that enable robust, scalable, flexible integrations. Because we eliminate needless complexity and extraneous details, you can get up and running with Stripe in just a couple of minutes.
      </p>
      <section id="notebook" className="container-lg">
        <nav>
          <select>
            <option value="payments">Payments</option>
            <option value="customers">Customers</option>
            <option value="subscriptions">Subscriptions</option>
            <option value="reporting">Reporting</option>
          </select>
          <span id="api-method-selection"></span>
          <ul>
            <li>
              <button className="common-BodyText common-Link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 14"><path fill="#6772E5" fill-rule="evenodd" d="M0 3a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3zm0 1h13v2H0V4z"/></svg>
                Payments
              </button>
                          </li>
            <li>
              <button className="common-BodyText common-Link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 14"><path fill="#6772E5" d="M12.5 11.75c0-1.24-2.69-2.25-6-2.25s-6 1-6 2.25c0 .46.37.9 1.01 1.25h9.98c.64-.36 1.01-.79 1.01-1.25zM6.5 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/></svg>
                Customers
              </button>
                          </li>
            <li>
              <button className="common-BodyText common-Link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 14"><path fill="#6772E5" d="M6.3 6.3l1.4 1.4L11.5 4 7.7.3 6.3 1.7 7.58 3H6.5a5.5 5.5 0 1 0 5.48 5H9.96A3.5 3.5 0 1 1 6.5 5h1.09l-1.3 1.3z"/></svg>
                Subscriptions
              </button>
                        </li>
            <li>
              <button className="common-BodyText common-Link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 14"><path fill="#6772E5" d="M0 6.5c0-.27.22-.5.5-.5h2c.28 0 .5.23.5.5v6a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-6zm5-5c0-.28.22-.5.5-.5h2c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-11zm5 2.01a.5.5 0 0 1 .5-.51h2c.28 0 .5.23.5.51v8.98a.5.5 0 0 1-.5.51h-2a.5.5 0 0 1-.5-.51V3.51z"/></svg>
                Reporting
              </button>
            </li>
          </ul>
          <a href="/docs/api" className="common-BodyText common-Link common-Link--arrow">
            Full API reference
          </a>
        </nav>
        <div id="editor">
          <pre><span className="custom-line-numbers"></span><code className="language-javascript"></code></pre>
        </div>
      </section>
    </section>
  </section>
);

export default Primary;
