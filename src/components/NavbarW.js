import React from 'react';
import i18n from '../config/i18n';
import { Navbar, Nav, Button, ButtonGroup, } from 'react-bootstrap';
import { NavToggle, } from './shared components/styledComponents';
import { withTranslation } from 'react-i18next';
import Links from './shared components/Links';
import BrandLogo from '../img/WolovikLogo.png';


function NavbarW({ t }) {

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  const listadoLinks = t('links', { returnObjects: true }).map(
    item => <Links url={item.url} text={item.text} />)


  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      style={navStyle}
      variant="light"
      fixed="top"
    >
      <Navbar.Brand href="/" className="mr-5">
        <img src={BrandLogo} alt="Wolovik & Asociados" style={{ height: "20px", }} />
      </Navbar.Brand>
      <NavToggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="m-auto">
          {listadoLinks}
        </Nav>
        <Nav className="ml-auto">
          <ButtonGroup aria-label="Basic example" size="sm" className="d-inline mx-2">
            <Button variant="outline-light" className="text-secondary"
              onClick={() => changeLanguage('es')}>es</Button>
            <Button variant="outline-light" className="text-secondary"
              onClick={() => changeLanguage('en')}>en</Button>
          </ButtonGroup>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

const navStyle = {
  background: "var(--navbarBackground)",
  boxShadow: "0 0 6px 0 black",
}

export default withTranslation('translations')(NavbarW);

