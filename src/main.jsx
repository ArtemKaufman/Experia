import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { theme } from './ThemeProvider.jsx';

const GlobalStyles = createGlobalStyle`

.recharts-legend-item {
  color: #596579;
  font-weight: 500;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 59px
}
`;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
