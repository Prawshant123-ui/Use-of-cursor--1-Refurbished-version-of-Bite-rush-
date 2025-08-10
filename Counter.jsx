import React, { useState } from "react";
import { useCart } from '../context/CartContext';

const Counter = ({ price, name, img, id }) => {
    const [count, setCount] = useState(0);
    const { addToCart } = useCart();

    const increment = () => {
        if (count < 100) {
            setCount(count + 1);
        }
    };

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const handleAddToCart = () => {
        if (count > 0) {
            addToCart({
                id,
                name,
                price,
                img,
                quantity: count
            });
            setCount(0); // Reset counter after adding to cart
        }
    };

    return (
        <div className="flex flex-col items-center justify-center p-4 space-y-3">
            <div className="flex space-x-4">
                <button
                    onClick={increment}
                    className={`px-4 py-1 text-xl ${
                        count >= 100
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-orange-500 hover:bg-orange-600"
                    } text-white rounded-lg shadow transition`}
                    disabled={count >= 100}
                >
                    +
                </button>
                <button
                    onClick={decrement}
                    className={`px-4 py-1 text-xl ${
                        count <= 0
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-red-500 hover:bg-red-600"
                    } text-white rounded-lg shadow transition`}
                    disabled={count <= 0}
                >
                    -
                </button>
            </div>

            <div className="text-center text-sm text-gray-700">
                <p>Quantity: <span className="font-semibold">{count}</span></p>
                <p>Price: <span className="font-semibold">Rs {count * price}</span></p>
            </div>

            <button
                onClick={handleAddToCart}
                disabled={count === 0}
                className={`w-full py-2 px-4 rounded-lg font-semibold transition duration-300 ${
                    count === 0
                        ? "bg-gray-400 cursor-not-allowed text-gray-600"
                        : "bg-orange-500 hover:bg-orange-600 text-white"
                }`}
            >
                {count === 0 ? "Select Quantity" : "Add to Cart"}
            </button>
        </div>
    );
};

export default Counter;
