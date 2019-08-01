import React from 'react';
import { AnchorClean, } from '../shared components/styledComponents';

export default function ListItemLawyers(props) {
  return (
    <React.Fragment>
      <span className="text-secondary"><AnchorClean href={props.item.href}>{props.item.member}</AnchorClean></span><br />
    </React.Fragment>
  )
}


