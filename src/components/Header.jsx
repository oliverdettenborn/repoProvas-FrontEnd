import React from 'react';
import styled from 'styled-components';


export default function Header() {
  return (
    <Container>
      <Title>
        RepoPr
        <Image src='/favicon.svg' alt="" />
        vas
      </Title>
      <Description>
        Um auxilio nos seus estudos, através do compartilhamento das provas da faculdade de forma anônima.
      </Description>
    </Container>
  )
}

const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${props => props.theme.fontTitle};
  text-shadow: ${props => props.theme.shadow.text};
`;

const Description = styled.p`
  font-family: ${props => props.theme.fontPrimary};
  text-shadow: ${props => props.theme.shadow.text};
  font-size: ${props => props.theme.fontSizes.descriptions};
  font-style: italic;
  text-align: center;
  margin-top: 25px;
`;

const Container = styled.header`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  font-size: ${props => props.theme.fontSizes.large};
`;

const Image = styled.img`
  height: ${props => props.theme.fontSizes.small};
  margin: 0 3px 0 5px;
`;

