
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { getTotalItems } = useCart();
  const { isAuthenticated, currentUser, logout } = useAuth();

  const handleLogout = () => {
    logout();
    setMenuOpen(false);
  };

  return (
    <nav className="bg-orange-500 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink to="/" className="text-2xl font-bold hover:text-orange-200 transition duration-300">
            BiteRush
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <NavLink to="/" className={({ isActive }) => isActive ? 'font-bold text-orange-700' : ''}>
              Home
            </NavLink>
            {isAuthenticated && (
              <>
                <NavLink to="/menu" className={({ isActive }) => isActive ? 'font-bold text-orange-700' : ''}>
                  Menu
                </NavLink>
                <NavLink to="/cart" className={({ isActive }) => isActive ? 'font-bold text-orange-700' : ''}>
                  Cart ({getTotalItems()})
                </NavLink>
                <NavLink to="/profile" className={({ isActive }) => isActive ? 'font-bold text-orange-700' : ''}>
                  Profile
                </NavLink>
              </>
            )}
            <NavLink to="/about" className={({ isActive }) => isActive ? 'font-bold text-orange-700' : ''}>
              About
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'font-bold text-orange-700' : ''}>
              Contact
            </NavLink>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <span className="text-orange-200">Welcome, {currentUser?.name || currentUser?.username}</span>
                <button
                  onClick={handleLogout}
                  className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition duration-300"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className="bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded-lg transition duration-300"
                >
                  Login
                </NavLink>
                <NavLink
                  to="/signup"
                  className="bg-white text-orange-600 hover:bg-orange-100 px-4 py-2 rounded-lg transition duration-300"
                >
                  Sign Up
                </NavLink>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden pb-4">
            <div className="space-y-2">
              <NavLink to="/" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'block font-bold text-orange-700' : 'block'}>
                Home
              </NavLink>
              {isAuthenticated && (
                <>
                  <NavLink to="/menu" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'block font-bold text-orange-700' : 'block'}>
                    Menu
                  </NavLink>
                  <NavLink to="/cart" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'block font-bold text-orange-700' : 'block'}>
                    Cart ({getTotalItems()})
                  </NavLink>
                  <NavLink to="/profile" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'block font-bold text-orange-700' : 'block'}>
                    Profile
                  </NavLink>
                </>
              )}
              <NavLink to="/about" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'block font-bold text-orange-700' : 'block'}>
                About
              </NavLink>
              <NavLink to="/contact" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'block font-bold text-orange-700' : 'block'}>
                Contact
              </NavLink>
            </div>
            <div className="mt-4 space-y-2">
              {isAuthenticated ? (
                <div className="space-y-2">
                  <div className="text-orange-200 px-4 py-2">
                    Welcome, {currentUser?.name || currentUser?.username}
                  </div>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition duration-300"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <>
                  <NavLink
                    to="/login"
                    onClick={() => setMenuOpen(false)}
                    className="block bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded-lg transition duration-300"
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to="/signup"
                    onClick={() => setMenuOpen(false)}
                    className="block bg-white text-orange-600 hover:bg-orange-100 px-4 py-2 rounded-lg transition duration-300"
                  >
                    Sign Up
                  </NavLink>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
