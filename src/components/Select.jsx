import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import styled from 'styled-components';

const BootstrapInput = styled(InputBase)`
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.border.radius};
  font-size: ${props => props.theme.fontSizes.small};
  font-family: ${props => props.theme.fontPrimary};
  width: 100%;
  height: 50px;
  line-height: 28px;
  color: ${props => props.theme.colors.black};
  border: none;
  padding: 10px 0 0 11.5px;
  outline: none;
  box-shadow: ${props => props.theme.shadow.box};
`;

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
    maxWidth: '100%',
    width: '100%',
    borderRadius: '15px',
    marginTop: '10px',
    marginBottom: '10px'
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect(props) {
  const classes = useStyles();
  return (
    <FormControl variant="filled" className={classes.formControl} >
      <InputLabel id="demo-simple-select-filled-label">{props.label}</InputLabel>
      <Select
        labelId="demo-simple-select-filled-label"
        id="demo-simple-select-filled"
        value={props.value}
        onChange={props.onChange}
        required
        input={<BootstrapInput />}
      >
        <MenuItem value="">
        </MenuItem>
        {
          props.options.map(opt => <MenuItem key={opt.id} value={opt.id}>{opt.name}</MenuItem>)
        }
      </Select>
    </FormControl>
  );
}