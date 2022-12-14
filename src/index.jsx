import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import App from './App';
import reportWebVitals from './reportWebVitals';

import { createStores } from './stores';
import { StoreProvider } from './stores/store-context';

const stores = createStores();

ReactDOM.render(
  <StrictMode>
    <StoreProvider value={stores}>
      <App />
    </StoreProvider>
  </StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
