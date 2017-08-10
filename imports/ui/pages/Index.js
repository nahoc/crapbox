import React from 'react';
import Stripes from '../components/Stripes';
import Intro from '../components/Intro';
import AppIllustrations from '../components/AppIllustrations';
import Primary from '../components/Primary';
import Secondary from '../components/Secondary';
import Footer from '../components/Footer';

class Index extends React.Component {
  componentWillMount() {
    document.body.classList.remove('bodySub','bodyLogin','bodySignup','bodyRecover');
  }

  render() {
    return (
    <div className="globalContent">
    <main>
      <header>
        <Stripes/>
        <Intro/>
      </header>
      <AppIllustrations/>
      <Primary/>
      <Secondary/>
    </main>
    <Footer/>
    </div>
    );
  }
}

export default Index;
