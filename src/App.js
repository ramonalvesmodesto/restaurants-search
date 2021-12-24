import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import Home from './pages/Home';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import { Reset } from 'styled-reset';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Reset />
        <Home />
      </ThemeProvider>
    </Provider>
  );
}

export default App;

