import { useState } from "react";

const FoodDetailCard = ({ food, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);


  return (
    <div className="max-w-5xl mx-auto p-6">
      
      <div className="bg-white rounded-xl shadow-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-8">

        <div className="flex justify-center items-center">
          <img
            src={food.thumbnail}
            alt={food.title}
            className="w-full max-h-80 object-cover rounded-lg transition-transform duration-300 hover:scale-110"
          />
        </div>

        <div className="flex flex-col">

          <h2 className="text-2xl font-bold text-gray-800">
            {food.title}
          </h2>

          <p className="text-yellow-600 text-xl font-semibold mt-2">
            ₹{food.price}
          </p>

          <p className="text-gray-500 mt-3">
            {food.description}
          </p>

          <p className="mt-3 text-sm text-gray-400">
            Category: {food.category}
          </p>

          <p className="text-sm text-gray-400">
            Rating: {food.rating}
          </p>
           <div className="flex items-center gap-4 mt-4">

            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
            >
              -
            </button>

            <span className="text-lg font-semibold">{quantity}</span>

            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
            >
              +
            </button>

          </div>

          <div className="flex-grow" />

          <button
            onClick={() => onAddToCart(quantity)}
            className="mt-6 bg-yellow-500 text-white py-3 rounded-lg font-semibold hover:bg-yellow-600 transition"
          >
            Add {quantity} to Cart
          </button>

        </div>

      </div>

    </div>
  );
};

export default FoodDetailCard;