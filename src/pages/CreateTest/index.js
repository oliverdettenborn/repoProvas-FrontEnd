import React from 'react';
import styled from 'styled-components';
import { Nav } from '../../components';
import FormToSendTest from './FormToSendTest';

export default function CreateTest() {
  return (
    <Container>
      <Nav />
      <FormToSendTest />
    </Container>
  )
}

const Container = styled.main`
  margin-top: 150px;
`;