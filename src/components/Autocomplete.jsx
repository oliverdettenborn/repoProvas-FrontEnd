import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import styled from 'styled-components';

export default function ComboBox(props) {
  return (
    <Container
      id="combo-box-demo"
      options={props.options}
      getOptionLabel={(option) => option}
      renderInput={(params) => <Text {...params} label={props.label} />}
    />
  );
}

const Container = styled(Autocomplete)`
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.border.radius};
  font-size: ${props => props.theme.fontSizes.small};
  font-family: ${props => props.theme.fontPrimary};
  width: 100%;
  height: 45px;
  line-height: 28px;
  color: ${props => props.theme.colors.black};
  border: none;
  padding-left: 15px;
  outline: none;
  box-shadow: ${props => props.theme.shadow.box};
`;

const Text = styled(TextField)`
  background-color: transparent;
  border-radius: ${props => props.theme.border.radius};
  font-size: ${props => props.theme.fontSizes.small};
  font-family: ${props => props.theme.fontPrimary};
  color: ${props => props.theme.colors.black};
  border: none;
  border-color: transparent;
  outline: transparent;
`;