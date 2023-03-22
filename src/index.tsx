import React from 'react';
import { createRoot } from 'react-dom/client';
// import { Provider } from 'react-redux'
// import { store } from './app/store'
import './styles/main.scss';
import './assets/icons';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

const container = document.getElementById('root');
if (container != null) {
  const root = createRoot(container);

  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
