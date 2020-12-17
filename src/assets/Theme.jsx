import { ThemeProvider } from "styled-components";

const value = {
  colors: {
    white: "#FFFDF9",
    primary: "#06B49A",
    secondary: "#744EAA",
    background: "#36313D",
    black: "#000",
    disabled: '#8b8887',
  },
  fontPrimary: "Andika New Basic, sans-serif",
  fontTitle: "Bungee, cursive",
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
    descriptions: '0.4em',
  },
  shadow: {
    box: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    text: "0px 4px 4px rgba(0, 0, 0, 0.25)"
  },
  border: {
    radius: "15px"
  }
}

const Theme = ({ children }) => (
  <ThemeProvider theme={value}>{children}</ThemeProvider>
);

export default Theme;