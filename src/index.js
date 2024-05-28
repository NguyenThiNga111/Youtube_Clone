import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './YouToBe/store';
import App from './App';

const rootElement = document.getElementById('root');

// Sử dụng ReactDOM.createRoot() để render ứng dụng
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
