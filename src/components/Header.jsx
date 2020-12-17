import React from 'react';
import styled from 'styled-components';


export default function Header(props) {
  return (
    <Container>
      <Title>
        RepoPr
        <Image src='/favicon.svg' alt="" />
        vas
      </Title>
      {props.children}
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

