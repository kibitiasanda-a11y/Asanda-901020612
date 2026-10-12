import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import App from './App';
import { LibraryProvider } from './LibraryContext';
import './styles.css';

const Router = window.location.protocol === 'file:' ? HashRouter : BrowserRouter;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <LibraryProvider>
        <App />
      </LibraryProvider>
    </Router>
  </React.StrictMode>,
);