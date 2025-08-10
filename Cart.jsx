import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

function Cart() {
  const { items, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(itemId);
    } else {
      updateQuantity(itemId, newQuantity);
    }
  };

  if (items.length === 0) {
    return (
      <div className="fixed top-20 right-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition duration-300 relative"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
          </svg>
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
            0
          </span>
        </button>
        
        {isOpen && (
          <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-orange-200 p-4">
            <div className="text-center text-gray-500 py-8">
              <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <p className="text-lg font-medium">Your cart is empty</p>
              <p className="text-sm">Add some delicious items to get started!</p>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="fixed top-20 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition duration-300 relative"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
        </svg>
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
          {items.reduce((total, item) => total + item.quantity, 0)}
        </span>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-orange-200 p-4 max-h-96 overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-orange-600">Shopping Cart</h3>
            <button
              onClick={clearCart}
              className="text-red-500 hover:text-red-700 text-sm font-medium"
            >
              Clear All
            </button>
          </div>
          
          <div className="space-y-3">
            {items.map((item) => (
              <div key={item.id} className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-gray-800 truncate">{item.name}</h4>
                  <p className="text-sm text-orange-600 font-medium">Rs {item.price}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    className="w-6 h-6 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold"
                  >
                    -
                  </button>
                  <span className="text-sm font-medium text-gray-700 w-8 text-center">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    className="w-6 h-6 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 p-1"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
          
          <div className="border-t border-orange-200 pt-4 mt-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-bold text-gray-800">Total:</span>
              <span className="text-xl font-bold text-orange-600">Rs {getTotalPrice()}</span>
            </div>
            <Link
              to="/cart"
              className="block w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-lg font-semibold transition duration-300 text-center"
              onClick={() => setIsOpen(false)}
            >
              View Full Cart
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
