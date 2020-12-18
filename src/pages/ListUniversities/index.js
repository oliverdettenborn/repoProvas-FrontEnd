import React, { useContext } from 'react';
import styled from 'styled-components';
import { Nav, Spinner } from '../../components';
import FormContext from '../../context/FormContext';
import BoxUniversity from './BoxUniversity';
import { device } from '../../assets/mediaQuery';

export default function ListUniversities() {
  const { listUniversities, loading } = useContext(FormContext);
  

  return (
    <Container maxWidth="sm">
      <Nav />
      <Description>
        Escolha uma universidade para visualizar as provas:
      </Description>
      <BoxList>
        {loading 
          ? <Spinner width='25%' />
          : listUniversities.map(u => 
            <BoxUniversity 
              key={u.id}
              name={u.initial}
              idUniversity={u.id}
            />
          )
        }
      </BoxList>
    </Container>
  )
}

const Container = styled.section`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 120px auto 0 auto;
`;

const Description = styled.p`
  font-family: ${props => props.theme.fontPrimary};
  text-shadow: ${props => props.theme.shadow.text};
  font-size: ${props => props.theme.fontSizes.small};
  font-style: italic;
  text-align: center;
  margin-top: 25px;

  @media (${device.tablet}){
    font-size: ${props => props.theme.fontSizes.medium};
  }
`;

const BoxList = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 25px;
`;