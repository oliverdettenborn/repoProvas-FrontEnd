import { ThemeProvider } from "styled-components";

const value = {
  colors: {
    white: "#FFFDF9",
    primary: "#06B49A",
    secondary: "#B744B8",
    background: "#36313D",
    black: "#000",
  },
  fontPrimary: "Andika New Basic, sans-serif",
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em"
  }
}

const Theme = ({ children }) => (
  <ThemeProvider theme={value}>{children}</ThemeProvider>
);

export default Theme;