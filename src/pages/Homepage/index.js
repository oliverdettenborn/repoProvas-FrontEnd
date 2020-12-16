import React from 'react';
import styled from 'styled-components';
import { Header } from '../../components';
import MenuButtons from './MenuButtons';

export default function Homepage() {
  return (
    <Container maxWidth="sm">
      <Header />
      <MenuButtons />
    </Container>
  )
}

const Container = styled.section`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.primary};
`;
