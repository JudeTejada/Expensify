import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    background: "#302D43",
    primary: "#6953f7",
    secondary: "#c34ff7",
    white: "#fff",
    lightText: "#C4C4C4",
    darkText: "#8c8a95",
    green: "#31D0AA",
    red: "#D03131",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
