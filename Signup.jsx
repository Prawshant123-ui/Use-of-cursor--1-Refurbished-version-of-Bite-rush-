
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { register } = useAuth();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    if (formData.password !== formData.confirmPassword) {
      setError('Password and Confirm Password do not match');
      setIsLoading(false);
      return;
    }

    try {
      const { confirmPassword, ...userData } = formData;
      await register(userData);
      alert('Signup successful! Please log in.');
      navigate('/login');
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
          Sign Up Here
        </h2>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-600 rounded-md outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            required
            value={formData.username}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-600 rounded-md outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-600 rounded-md outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={formData.password}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-600 rounded-md outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            required
            value={formData.confirmPassword}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-600 rounded-md outline-none focus:ring-2 focus:ring-orange-400"
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
            {isLoading ? 'Creating Account...' : 'Register'}
          </button>
        </form>
      </div>
    </div>
  );
}
