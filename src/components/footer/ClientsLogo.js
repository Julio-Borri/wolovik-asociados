import React from 'react';
import styled from 'styled-components';

export default function ClientsLogo(props) {
  return (
    <ClientsImg src={props.item.img} alt="Logos de Empresas" />
  )
}

const ClientsImg = styled.img`
  width: 150px;
  display: inline-block;
  padding: 0 15px;
  filter: grayscale(100%);
  :hover{
    filter: grayscale(0%);
    transform: scale(1.1);
    transition: filter 1s, transform 1s;
  }
`