import Header from '@/features/Header';
import { type ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

export default function App(): ReactElement {
  return (
    <div className="wrapper">
      <Header />
      <Outlet />
    </div>
  );
}
