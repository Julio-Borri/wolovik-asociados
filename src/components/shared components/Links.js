import React from 'react';
import { StyledLinks, } from './styledComponents';

function Links(props) {

  return (
    <StyledLinks
      href={props.url} 
      className="nav-link py-3"
    >
      {props.text}
    </StyledLinks>
  )
}

export default Links

