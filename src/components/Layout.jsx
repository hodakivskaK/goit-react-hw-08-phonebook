import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div style={{  margin: '80px auto 0 auto', padding: '0 16px' }}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};