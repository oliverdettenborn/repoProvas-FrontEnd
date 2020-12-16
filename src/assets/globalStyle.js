import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  }
  a{
    color: inherit;
    text-decoration: none;
    text-transform: none;
    text-emphasis-style: normal;
  }
  button, svg{
    cursor: pointer;
  }
  button {
	box-shadow: 0px 0px 0px transparent;
	border: 0px solid transparent;
	text-shadow: 0px 0px 0px transparent;
	cursor: pointer;
  }
  
  button:hover {
	box-shadow: 0px 0px 0px transparent;
	border: 0px solid transparent;
	text-shadow: 0px 0px 0px transparent;
  }
  
  button:active {
	outline: none;
	border: none;
  }
  
  button:focus {
	outline: 0;
  }

  body{
    font-family: ${props => props.theme.fontPrimary};
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.background};
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export default GlobalStyle;