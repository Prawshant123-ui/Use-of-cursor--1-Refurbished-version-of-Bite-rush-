import React from 'react';
import { useCart } from '../context/CartContext';

function CartPage() {
  const { items, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useCart();

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(itemId);
    } else {
      updateQuantity(itemId, newQuantity);
    }
  };

  if (items.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-orange-600 text-center mb-10">Shopping Cart</h1>
        <div className="text-center py-16">
          <svg className="w-24 h-24 mx-auto text-gray-300 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          <h2 className="text-2xl font-semibold text-gray-600 mb-4">Your cart is empty</h2>
          <p className="text-gray-500 mb-8">Looks like you haven't added any items to your cart yet.</p>
          <a
            href="/menu"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white py-3 px-8 rounded-lg font-semibold transition duration-300"
          >
            Browse Menu
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-orange-600 text-center mb-10">Shopping Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800">Cart Items ({items.length})</h2>
              <button
                onClick={clearCart}
                className="text-red-500 hover:text-red-700 text-sm font-medium"
              >
                Clear All
              </button>
            </div>
            
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 p-4 bg-orange-50 rounded-lg">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-orange-600 font-medium">Rs {item.price}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      className="w-8 h-8 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center text-lg font-bold"
                    >
                      -
                    </button>
                    <span className="text-lg font-medium text-gray-700 w-12 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      className="w-8 h-8 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center text-lg font-bold"
                    >
                      +
                    </button>
                  </div>
                  <div className="text-right min-w-0">
                    <p className="text-lg font-semibold text-gray-800">Rs {item.price * item.quantity}</p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 text-sm mt-1"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal ({items.reduce((total, item) => total + item.quantity, 0)} items)</span>
                <span>Rs {getTotalPrice()}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Delivery Fee</span>
                <span>Rs 50</span>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between text-lg font-semibold text-gray-800">
                  <span>Total</span>
                  <span className="text-orange-600">Rs {getTotalPrice() + 50}</span>
                </div>
              </div>
            </div>
            
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 px-6 rounded-lg font-semibold text-lg transition duration-300 mb-4">
              Proceed to Checkout
            </button>
            
            <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-6 rounded-lg font-medium transition duration-300">
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
