import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import './index.scss';
import App from './pages/app';

const Root = (
  <ThemeProvider>
    <CSSReset />
    <App />
  </ThemeProvider>
);

ReactDOM.render(Root, document.getElementById('root'));
