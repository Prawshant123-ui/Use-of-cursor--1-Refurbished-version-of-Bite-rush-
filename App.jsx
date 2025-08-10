
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Landingpage from './components/Landingpage';
import About from './components/About';
import Contact from './components/Contact';
import Menu from './components/Menu';
import Signup from './components/Signup';
import Login from './components/Login';
import CartPage from './components/CartPage';
import Profile from './components/Profile';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Routes>
            {/* Routes with Layout wrapper */}
            <Route path="/" element={<Layout />}>
              <Route index element={<Landingpage />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="signup" element={<Signup />} />
              <Route path="login" element={<Login />} />
              
              {/* Protected Routes - Only accessible after signup and login */}
              <Route path="menu" element={
                <ProtectedRoute>
                  <Menu />
                </ProtectedRoute>
              } />
              <Route path="cart" element={
                <ProtectedRoute>
                  <CartPage />
                </ProtectedRoute>
              } />
              <Route path="profile" element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              } />
              
              <Route path="*" element={<h1>404 Not Found</h1>} />
            </Route>
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;






















