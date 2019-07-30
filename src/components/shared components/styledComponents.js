import styled from 'styled-components';
import { Navbar, Nav, } from 'react-bootstrap';

export const NavToggle = styled(Navbar.Toggle)`
:focus { outline: none !important; };
:hover { border: 1px solid white !important; };
`

export const StyledLinks = styled(Nav.Link)`
  color: var(--navbarLink) !important;
  margin-left: 8px;
  :hover{
    color: black !important;
  };
  :active{
    color: black !important;
  };
`

export const ImgResponsive = styled.img`
  height: ${props => props.largeHeight};
  @media screen and (max-width: 992px) {
    height: ${props => props.normalHeight};
  };
  @media screen and (max-width: 600px) {
    height: ${props => props.smallHeight};
  };
`

export const TextResponsive = styled.h3`
  color: var(--mainBlue);
  font-family: 'Times New Roman', 'TimesNewRoman',Times,'Baskerville',Georgia,serif; 
  font-size: ${props => props.largeHeight};
  @media screen and (max-width: 992px) {
    font-size: ${props => props.normalHeight};
  };
  @media screen and (max-width: 600px) {
    font-size: ${props => props.smallHeight};
  };
`
