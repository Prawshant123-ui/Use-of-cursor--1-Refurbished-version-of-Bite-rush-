import React from 'react';

function Process() {
  return (
    <div className="max-w-6xl mx-auto my-12 px-4 text-center">
      <h1 className="text-3xl font-bold text-orange-600 mb-10">How It Works</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-orange-100 rounded-lg shadow-md p-6 hover:shadow-lg transition">
          <div className="w-10 h-10 mx-auto mb-4 text-orange-500">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 0 1 3.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0 1 21 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 0 1 7.5 16.125V3.375Z" />
              <path d="M15 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 17.25 7.5h-1.875A.375.375 0 0 1 15 7.125V5.25ZM4.875 6H6v10.125A3.375 3.375 0 0 0 9.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V7.875C3 6.839 3.84 6 4.875 6Z" />
            </svg>
          </div>
          <p className="font-semibold text-lg text-orange-500 mb-2">1. Browse Our Menu</p>
          <p className="text-gray-600">Discover a wide variety of delicious dishes from local favorites.</p>
        </div>

        {/* Card 2 */}
        <div className="bg-orange-100 rounded-lg shadow-md p-6 hover:shadow-lg transition">
          <div className="w-10 h-10 mx-auto mb-4 text-orange-500">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
            </svg>
          </div>
          <p className="font-semibold text-lg text-orange-500 mb-2">2. Place Your Order</p>
          <p className="text-gray-600">Add your desired items to the cart and proceed to checkout easily.</p>
        </div>

        {/* Card 3 */}
        <div className="bg-orange-100 rounded-lg shadow-md p-6 hover:shadow-lg transition">
          <div className="w-10 h-10 mx-auto mb-4 text-orange-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
            </svg>
          </div>
          <p className="font-semibold text-lg text-orange-500 mb-2">3. Fast Delivery</p>
          <p className="text-gray-600">Sit back and relax! Your food will be delivered to your doorstep swiftly.</p>
        </div>
      </div>
    </div>
  );
}

export default Process;

