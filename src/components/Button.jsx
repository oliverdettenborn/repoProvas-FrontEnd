import React from 'react';
import styled from 'styled-components';

export default function Button(props) {
  return (
    <Container
      {...props}
      disabled={props.disabledButton}
    >
      {props.children}
    </Container>
  )
}

const Container = styled.button`
  width: ${props => props.width};
  height: ${props => props.height};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${props => props.disabled ? props.theme.colors.disabled: props.theme.colors[props.background]};
  color: ${props => props.theme.colors[props.color]};
  box-shadow: ${props => props.theme.shadow.box};
  text-shadow: ${props => props.theme.shadow.text};
  font-size: ${props => props.theme.fontSizes.small};
  border-radius: ${props => props.theme.border.radius};
  padding: 1%;
  margin: 10px 0;
`;