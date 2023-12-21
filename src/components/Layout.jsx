import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import { Loader } from './Loader/Loader';
import { ErrorMessage } from './ErrorMessage/ErrorMessage';

export const Layout = () => {
  return (
    <div style={{ maxWidth: '100%', margin: '0 auto', padding: '0 16px' }}>
      <AppBar />
      <Suspense fallback={null}>
        <ErrorMessage/>
        <Loader />
        <Outlet />
      </Suspense>
    </div>
  );
};