import { createBrowserRouter } from 'react-router-dom';
import Cart from '@pages/Cart';
import PizzaList from '@pages/PizzaList';
import App from '../App';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <PizzaList /> },
      {
        path: 'cart',
        element: <Cart />
      }
    ]
  }
]);
