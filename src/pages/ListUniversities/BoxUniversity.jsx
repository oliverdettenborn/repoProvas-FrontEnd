import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { device } from '../../assets/mediaQuery';

export default function BoxUniversity(props) {
  return (
    <Link to={`/visualizar-provas/${props.idUniversity}`}>
      <Container>
        {props.name}
      </Container>
    </Link>
  )
}

const Container = styled.div`
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  background-color: ${props => props.theme.colors.secondary};
  font-family: ${props => props.theme.fontPrimary};
  text-shadow: ${props => props.theme.shadow.text};
  box-shadow: ${props => props.theme.shadow.box};
  font-size: ${props => props.theme.fontSizes.medium};
  border-radius: ${props => props.theme.border.radius};
  text-align: center;
  margin: 15px;
  opacity: 1;

  &:hover{
    opacity: 0.75;
  }

  @media (${device.tablet}){
    width: 180px;
    height: 180px;
    font-size: ${props => props.theme.fontSizes.medium};
  }
`;