import styled from 'styled-components';
import { Navbar, Nav, Container, } from 'react-bootstrap';

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
  color: ${props => props.color || "var(--mainBlue)"};;
  font-family: 'Times New Roman', 'TimesNewRoman',Times,'Baskerville',Georgia,serif; 
  font-size: ${props => props.largeHeight};
  @media screen and (max-width: 992px) {
    font-size: ${props => props.normalHeight};
  };
  @media screen and (max-width: 600px) {
    font-size: ${props => props.smallHeight};
  };
`

export const ParagraphFooter = styled.p`
  color: white;
  font-size: 12px;
  line-height: 14px;
`

export const HeaderContainer = styled(Container)`
  height: 250px;
  @media screen and (max-width: 992px) {
    height: 200px;
  };
  @media screen and (max-width: 600px) {
    height: 170px;
  };
`

export const ContainerPictureHome = styled(Container)`
  height: 400px;
  background: linear-gradient(to bottom, white, rgba(127, 127, 213, 0.6), rgba(134, 168, 231, 0.6)), url(${props => props.bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
