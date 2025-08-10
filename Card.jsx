import React from 'react';


function Card() {

  return (
    <div className="max-w-5xl mx-auto mt-10 p-10 rounded-xl shadow-md text-center bg-gradient-to-r from-orange-500 to-yellow-400 text-white">
      <h1 className="text-4xl font-bold mb-4">
        Welcome to <span className="text-white">Bite Rush</span>
      </h1>
      <p className="text-lg text-white/90 mb-6">
        Your favorite meals, delivered fresh and fast to your doorstep. Explore our diverse menu and satisfy your cravings today!
      </p>
      <button className="bg-white text-orange-600 font-semibold py-2 px-6 rounded-full hover:bg-orange-100 transition duration-300"
      onClick={() => alert('Sign up to get started!')}
      >
        Get Started →
         
      </button>
    </div>
  );
}

export default Card;

