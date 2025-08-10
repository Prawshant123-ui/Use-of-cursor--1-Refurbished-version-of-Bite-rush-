import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Counter from './Counter';

function Special() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return (
      <div className="py-16 bg-orange-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-orange-600 mb-4">
            Legendary Dishes
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Sign up to explore our legendary dishes and add them to your cart!
          </p>
          <div className="text-center">
            <NavLink
              to="/signup"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white py-3 px-8 rounded-lg font-semibold transition duration-300"
            >
              Sign Up to Access Menu
            </NavLink>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 bg-orange-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-orange-600 mb-12">
          Legendary Dishes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-orange-100 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">Matar Paneer</h2>
            </div>
            <img
              src="https://th.bing.com/th/id/OIP.27sPAVWWSV_zhTGmEeecigHaE8?r=0&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3"
              alt="Matar Paneer"
              className="w-full h-48 object-cover"
            />
            <Counter 
              id="matar-paneer" 
              name="Matar Paneer" 
              price={250} 
              img="https://th.bing.com/th/id/OIP.27sPAVWWSV_zhTGmEeecigHaE8?r=0&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3" 
            />
          </div>

          <div className="bg-orange-100 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">Butter Chicken</h2>
            </div>
            <img
              src="https://th.bing.com/th/id/OIP.27sPAVWWSV_zhTGmEeecigHaE8?r=0&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3"
              alt="Butter Chicken"
              className="w-full h-48 object-cover"
            />
            <Counter 
              id="butter-chicken" 
              name="Butter Chicken" 
              price={280} 
              img="https://th.bing.com/th/id/OIP.27sPAVWWSV_zhTGmEeecigHaE8?r=0&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3" 
            />
          </div>

          <div className="bg-orange-100 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">Dal Makhani</h2>
            </div>
            <img
              src="https://th.bing.com/th/id/OIP.27sPAVWWSV_zhTGmEeecigHaE8?r=0&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3"
              alt="Dal Makhani"
              className="w-full h-48 object-cover"
            />
            <Counter 
              id="dal-makhani" 
              name="Dal Makhani" 
              price={180} 
              img="https://th.bing.com/th/id/OIP.27sPAVWWSV_zhTGmEeecigHaE8?r=0&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3" 
            />
          </div>

          <div className="bg-orange-100 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">Palak Paneer</h2>
            </div>
            <img
              src="https://th.bing.com/th/id/OIP.27sPAVWWSV_zhTGmEeecigHaE8?r=0&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3"
              alt="Palak Paneer"
              className="w-full h-48 object-cover"
            />
            <Counter 
              id="palak-paneer" 
              name="Palak Paneer" 
              price={220} 
              img="https://th.bing.com/th/id/OIP.27sPAVWWSV_zhTGmEeecigHaE8?r=0&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3" 
            />
          </div>

          <div className="bg-orange-100 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">Chicken Tikka</h2>
            </div>
            <img
              src="https://th.bing.com/th/id/OIP.27sPAVWWSV_zhTGmEeecigHaE8?r=0&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3"
              alt="Chicken Tikka"
              className="w-full h-48 object-cover"
            />
            <Counter 
              id="chicken-tikka" 
              name="Chicken Tikka" 
              price={320} 
              img="https://th.bing.com/th/id/OIP.27sPAVWWSV_zhTGmEeecigHaE8?r=0&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3" 
            />
          </div>

          <div className="bg-orange-100 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">Veg Biryani</h2>
            </div>
            <img
              src="https://th.bing.com/th/id/OIP.27sPAVWWSV_zhTGmEeecigHaE8?r=0&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3"
              alt="Veg Biryani"
              className="w-full h-48 object-cover"
            />
            <Counter 
              id="veg-biryani" 
              name="Veg Biryani" 
              price={200} 
              img="https://th.bing.com/th/id/OIP.27sPAVWWSV_zhTGmEeecigHaE8?r=0&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Special;
