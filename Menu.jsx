
import React from 'react';
import Counter from './Counter';

function Menu() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-orange-600 text-center mb-10">
        Menu
      </h1>

      {/* Mo:Mo Section */}
      <h2 className="text-2xl font-bold text-orange-500 my-8">Mo:Mo Section</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <FoodCard 
          id="jhol-momo" 
          name="Jhol Mo:Mo" 
          price={180} 
          img="https://preview.redd.it/homemade-jhol-momo-v0-i796a5ob8vk91.jpg?width=1080&crop=smart&auto=webp&s=6f0c0b79ca70f1c8cea123678176a3e340adcadd" 
        />
        <FoodCard 
          id="buff-momo" 
          name="Buff Mo:Mo" 
          price={160} 
          img="https://th.bing.com/th/id/OIP.27sPAVWWSV_zhTGmEeecigHaE8?r=0&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3" 
        />
        <FoodCard 
          id="chicken-momo" 
          name="Chicken Mo:Mo" 
          price={170} 
          img="https://th.bing.com/th/id/R.686eea5b785d964e9c6f5aa622ec8db6?rik=I2e8p9gFjfaHeg&riu=http%3a%2f%2frecipedose.com%2fwp-content%2fuploads%2f2013%2f03%2fChicken-momos.jpg&ehk=P8WqN4eTADZLNRHw%2f58ok2K00IOoMqab1qmn9DrSLIw%3d&risl=1&pid=ImgRaw&r=0" 
        />
        <FoodCard 
          id="chilli-momo" 
          name="Chilli Mo:Mo" 
          price={190} 
          img="https://th.bing.com/th/id/OIP.jOr5Rhxf5Wr7cajVeTFK8AHaEK?r=0&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3" 
        />
      </div>

      {/* Biryani Section */}
      <h2 className="text-2xl font-bold text-orange-500 my-8">Biryani Section</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <FoodCard 
          id="fish-biryani" 
          name="Fish Biryani" 
          price={280} 
          img="https://th.bing.com/th/id/OIP.JH0E_Tdm3jDDF-DPUZ9v-gHaGS?r=0&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3" 
        />
        <FoodCard 
          id="veg-biryani" 
          name="Veg Biryani" 
          price={220} 
          img="https://th.bing.com/th/id/OIP.LadujoU81UAUhQjy9gElUwHaHa?r=0&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3" 
        />
        <FoodCard 
          id="chicken-biryani" 
          name="Chicken Biryani" 
          price={260} 
          img="https://spicecravings.com/wp-content/uploads/2021/04/Chicken-Biryani-Featured-2.jpg" 
        />
        <FoodCard 
          id="paneer-biryani" 
          name="Paneer Biryani" 
          price={240} 
          img="https://th.bing.com/th/id/OIP.W_jE-_0a1btwW_hI9YF7iwHaHa?r=0&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3" 
        />
      </div>

      {/* Seafood Section */}
      <h2 className="text-2xl font-bold text-orange-500 my-8">Seafood Section</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <FoodCard 
          id="prawn" 
          name="Prawn" 
          price={350} 
          img="https://th.bing.com/th/id/OIP.pP5SGZCpAWOJlAv6L1IjKwHaHa?r=0&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3" 
        />
        <FoodCard 
          id="fish" 
          name="Fish" 
          price={300} 
          img="https://feastwithsafiya.com/wp-content/uploads/2021/08/Baked-fish-masala-recipe.jpg" 
        />
        <FoodCard 
          id="crab" 
          name="Crab" 
          price={370} 
          img="https://th.bing.com/th/id/OIP.qMCSoFKmJC_1AvHhaAqhJAHaHa?r=0&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3" 
        />
        <FoodCard 
          id="shrimp" 
          name="Shrimp" 
          price={340} 
          img="https://th.bing.com/th/id/R.691dd7c7e92f572d123034cbb19c6f3c?rik=O9xXaY1GNACJIg&pid=ImgRaw&r=0" 
        />
      </div>

      {/* Dessert Section */}
      <h2 className="text-2xl font-bold text-orange-500 my-8">Dessert Section</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <FoodCard 
          id="ice-cream" 
          name="Ice Cream" 
          price={120} 
          img="https://th.bing.com/th/id/OIP.Z2rbbXU5A4uQHYJCzBRfoQHaF_?r=0&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3" 
        />
        <FoodCard 
          id="cake" 
          name="Cake" 
          price={180} 
          img="https://th.bing.com/th/id/OIP.MuGX1Q2dj7SLrWr8ijLg7gHaHa?r=0&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3" 
        />
        <FoodCard 
          id="pineapple-dessert" 
          name="Pineapple Dessert" 
          price={150} 
          img="https://th.bing.com/th/id/OIP.cgRP0SC-KLLi72BKIv9dKwHaLC?r=0&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3" 
        />
        <FoodCard 
          id="chocolate-dessert" 
          name="Chocolate Dessert" 
          price={200} 
          img="https://th.bing.com/th/id/R.6e2664b5d36e472ec18e99b4c9e661aa?rik=VbGJmgKI7TeiyA&pid=ImgRaw&r=0" 
        />
      </div>
    </div>
  );
}

// Reusable card component
function FoodCard({ id, name, img, price }) {
  return (
    <div className="bg-orange-100 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
      </div>
      <img src={img} alt={name} className="w-full h-48 object-cover" />
      <Counter id={id} name={name} price={price} img={img} />
    </div>
  );
}

export default Menu;
