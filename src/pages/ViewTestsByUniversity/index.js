import React, { useContext } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import FormContext from '../../context/FormContext';
import { device } from '../../assets/mediaQuery';

import { Nav } from '../../components';
import BoxSubject from './BoxSubject';

export default function CreateTest() {
  const { idUniversity } = useParams();
  const { listSubjects } = useContext(FormContext);

  return (
    <Container>
      <Nav />
      {
        listSubjects
          .filter(sub => sub.idUniversity === +idUniversity)
          .map(sub => 
            <BoxSubject 
              key={sub.id}
              idSubject={sub.id}
              name={sub.name}
            />
          )
      }
    </Container>
  )
}

const Container = styled.main`
  width: 95%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  margin: 120px auto 0 auto;

  @media (${device.tablet}){
    width: 70%;
  }
`;
