import React from 'react';
import './App.css';
import { withTranslation } from 'react-i18next';
import { Switch, Route, } from 'react-router-dom';
import NavbarW from './components/NavbarW';
import Home from './components/home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App({ t }) {
  
  return (
    <React.Fragment>
      <NavbarW />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </React.Fragment>



  );
}

export default withTranslation('translations')(App);
