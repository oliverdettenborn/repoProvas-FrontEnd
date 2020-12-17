import React from 'react';
import styled from 'styled-components';
import { Header } from '../../components';
import MenuButtons from './MenuButtons';

export default function Homepage() {
  return (
    <Container maxWidth="sm">
      <Header>
        <Description>
          Um auxilio nos seus estudos, através do compartilhamento das provas da faculdade de forma anônima.
        </Description>
      </Header>
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

const Description = styled.p`
  font-family: ${props => props.theme.fontPrimary};
  text-shadow: ${props => props.theme.shadow.text};
  font-size: ${props => props.theme.fontSizes.descriptions};
  font-style: italic;
  text-align: center;
  margin-top: 25px;
`;
