import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import theme from "../index";

interface Props {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: Props) => (
  <StyledThemeProvider theme={theme.defaultAppTheme}>
    {children}
  </StyledThemeProvider>
);
