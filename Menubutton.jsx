import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Menubutton = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return (
      <div className="text-center py-16 bg-orange-50">
        <h2 className="text-3xl font-bold text-orange-600 mb-4">Ready to Order?</h2>
        <p className="text-gray-600 mb-8">Explore our delicious menu and add items to your cart!</p>
        <NavLink
          to="/menu"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white py-3 px-8 rounded-lg font-semibold transition duration-300"
        >
          View Menu
        </NavLink>
      </div>
    );
  }

  return (
    <div className="text-center py-16 bg-orange-50">
      <h2 className="text-3xl font-bold text-orange-600 mb-4">Want to Order Food?</h2>
      <p className="text-gray-600 mb-8">Sign up now to access our delicious menu and start ordering!</p>
      <div className="space-x-4">
        <NavLink
          to="/signup"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white py-3 px-8 rounded-lg font-semibold transition duration-300"
        >
          Sign Up Now
        </NavLink>
        <NavLink
          to="/login"
          className="inline-block bg-white text-orange-600 hover:bg-orange-100 py-3 px-8 rounded-lg font-semibold transition duration-300 border border-orange-500"
        >
          Already have an account? Login
        </NavLink>
      </div>
    </div>
  );
};

export default Menubutton;
