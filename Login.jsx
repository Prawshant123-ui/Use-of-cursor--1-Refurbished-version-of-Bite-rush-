
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();
  const { login, users } = useAuth();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // Check if user exists in the system
      const userExists = users.find(user => user.email === formData.email);
      if (!userExists) {
        setError('Please sign up for access');
        setIsLoading(false);
        return;
      }

      // Try to login
      await login(formData.email, formData.password);
      alert('Login successful!');
      navigate('/');
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-orange-50">
      <div className="bg-orange-200 rounded-2xl w-full max-w-md p-8 shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6 text-orange-600">
          Login to BiteRush
        </h2>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <form className="space-y-4" onSubmit={handleLogin}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={formData.password}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
          />

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full font-semibold py-2 rounded-full transition ${
              isLoading 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-orange-500 hover:bg-orange-600 text-white'
            }`}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Don't have an account?{' '}
          <Link to="/signup" className="text-orange-600 hover:underline font-semibold">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

