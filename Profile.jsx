import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const { currentUser, updateProfile, logout } = useAuth();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: currentUser?.name || '',
    username: currentUser?.username || '',
    email: currentUser?.email || '',
    phone: currentUser?.phone || '',
    address: currentUser?.address || ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      updateProfile(formData);
      setIsEditing(false);
      alert('Profile updated successfully!');
    } catch (error) {
      alert('Error updating profile: ' + error.message);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!currentUser) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-orange-600 mb-4">Profile</h1>
          <p className="text-gray-600 mb-6">Please log in to view your profile.</p>
          <button
            onClick={() => navigate('/login')}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition duration-300"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-orange-600">My Profile</h1>
          <div className="space-x-4">
            {!isEditing && (
              <button
                onClick={() => setIsEditing(true)}
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition duration-300"
              >
                Edit Profile
              </button>
            )}
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition duration-300"
            >
              Logout
            </button>
          </div>
        </div>

        {isEditing ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="flex space-x-4">
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition duration-300"
              >
                Save Changes
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsEditing(false);
                  setFormData({
                    name: currentUser.name || '',
                    username: currentUser.username || '',
                    email: currentUser.email || '',
                    phone: currentUser.phone || '',
                    address: currentUser.address || ''
                  });
                }}
                className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition duration-300"
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <p className="text-gray-900 bg-gray-50 px-4 py-2 rounded-lg">{currentUser.name || 'Not provided'}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
                <p className="text-gray-900 bg-gray-50 px-4 py-2 rounded-lg">{currentUser.username || 'Not provided'}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <p className="text-gray-900 bg-gray-50 px-4 py-2 rounded-lg">{currentUser.email}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <p className="text-gray-900 bg-gray-50 px-4 py-2 rounded-lg">{currentUser.phone || 'Not provided'}</p>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                <p className="text-gray-900 bg-gray-50 px-4 py-2 rounded-lg">{currentUser.address || 'Not provided'}</p>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-600">Member since</p>
                  <p className="text-gray-900">{new Date(currentUser.createdAt).toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">User ID</p>
                  <p className="text-gray-900 font-mono text-sm">{currentUser.id}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
