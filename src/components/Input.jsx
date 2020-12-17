import React from 'react';
import styled from 'styled-components';

export default function Input(props) {
  return (
    <StyledInput 
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
      type={props.type}
      required
    />
  )
};

const StyledInput = styled.input`
  background: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.border.radius};
  width: 100%;
  height: 45px;
  font-family: ${props => props.theme.fontPrimary};
  font-size: ${props => props.theme.fontSizes.small};
  line-height: 28px;
  color: ${props => props.theme.colors.black};
  border: none;
  padding-left: 15px;
  outline: none;
  box-shadow: ${props => props.theme.shadow.box};
  text-shadow: ${props => props.theme.shadow.text};
`;