import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './themeObj';

const ThemeContext = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {/* Render children  */}
      {children}
    </ThemeProvider>
  );
};

export default ThemeContext;
