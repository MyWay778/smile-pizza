import React from 'react';
import { createRoot } from 'react-dom/client';
// import { Provider } from 'react-redux'
// import { store } from './app/store'
import App from './App';
import './styles/main.scss';

const container = document.getElementById('root');
if (container != null) {
  const root = createRoot(container);

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
