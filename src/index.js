import React from 'react';
import ReactDOM from 'react-dom/client'; // This should be the only import for ReactDOM
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter

// ReactDOM.createRoot is used for React 18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

