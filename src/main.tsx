import React from 'react';
import ReactDOM from 'react-dom/client';
import { MainProvider } from './providers/main';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MainProvider>
      <App />
    </MainProvider>
  </React.StrictMode>
);
