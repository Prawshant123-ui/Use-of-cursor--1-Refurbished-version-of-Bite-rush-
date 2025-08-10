import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Cart from './Cart';
import { useAuth } from '../context/AuthContext';

function Layout() {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <Navbar />
      {isAuthenticated && <Cart />}
      <div className="p-4">
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
