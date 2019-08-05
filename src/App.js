import React from 'react';
import './App.css';
import { withTranslation } from 'react-i18next';
import { Switch, Route, } from 'react-router-dom';
import NavbarW from './components/NavbarW';
import Home from './components/home/Home';
import Home2 from './components/home/Home2';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer/Footer';
import Lawyers from './components/lawyers/Lawyers';
import PracticeAreas from './components/practiceAreas/PracticeAreas';
import Newsletter from './components/newsletter/Newsletter';
import Contact from './components/contact/Contact';

function App({ t }) {
  return (
    <React.Fragment>
      <NavbarW />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/2" exact component={Home2} />
        <Route path="/lawyers" component={Lawyers} />
        <Route path="/legal-practice-areas" component={PracticeAreas} />
        <Route path="/newsletter" component={Newsletter} />
        <Route path="/react/estudiowolovik/cargarNewsletters" component={Newsletter} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default withTranslation('translations')(App);
