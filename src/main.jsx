import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import 'antd/dist/antd.less';
import GlobalStyles from './assets/styles/GlobalStyles';
import theme from './assets/styles/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <HashRouter>
      <App />
    </HashRouter>
  </ThemeProvider>,
);
