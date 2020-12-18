import React from 'react';
import styled from 'styled-components';

export default function Spinner(props) {
  return (
    <Container background={props.background}>
      <Gif 
        src='/loading.gif'
        width={props.width}
      />
    </Container>
  )
}

const Gif = styled.img`
  width: ${props => props.width};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  background-color: ${props => props.theme.colors[props.background]};
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;