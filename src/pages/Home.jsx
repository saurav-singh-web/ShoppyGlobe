import { useNavigate } from "react-router-dom";
import HeroSlider from "../components/HeroSlider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartFlatbed,
  faWallet,
  faStar,
  faBlender,
  faAppleWhole,
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-24 min-h-screen bg-gray-100 px-4 sm:px-6">

      <div className="text-center mt-10 max-w-2xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
          🍔 Welcome to <span className="text-yellow-500">ShoppyGlobe</span>
        </h1>

        <p className="mt-4 text-gray-600 text-base sm:text-lg">
          Discover delicious food items, manage your cart, and order with ease.
        </p>

        <button
          onClick={() => navigate("/foods")}
          className="mt-6 px-5 sm:px-6 py-2.5 sm:py-3 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition"
        >
          Browse Foods
        </button>
      </div>

      <div className="mt-10">
        <HeroSlider />
      </div>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center max-w-6xl mx-auto">
        
        <div className="bg-white p-6 rounded-lg shadow transition-transform duration-300 md:hover:scale-105">
          <h3 className="font-bold text-lg">
            <FontAwesomeIcon icon={faCartFlatbed} /> Fast Delivery
          </h3>
          <p className="text-gray-500 mt-2">
            Get your food delivered quickly
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow transition-transform duration-300 md:hover:scale-105">
          <h3 className="font-bold text-lg">
            <FontAwesomeIcon icon={faWallet} /> Best Prices
          </h3>
          <p className="text-gray-500 mt-2">
            Affordable and quality products
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow transition-transform duration-300 md:hover:scale-105">
          <h3 className="font-bold text-lg">
            <FontAwesomeIcon icon={faStar} /> Top Rated
          </h3>
          <p className="text-gray-500 mt-2">
            Loved by our customers
          </p>
        </div>
      </div>

      <div className="mt-16 max-w-6xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">
          <FontAwesomeIcon icon={faBlender} /> Categories
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {["🍔 Burger", "🍕 Pizza", "🥗 Healthy", "🍜 Asian"].map((cat) => (
            <div
              key={cat}
              className="bg-white p-4 sm:p-6 rounded-lg shadow text-center hover:shadow-lg transition-transform duration-300 md:hover:scale-105"
            >
              {cat}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 text-center px-2">
        <h2 className="text-xl sm:text-2xl font-bold">
          <FontAwesomeIcon icon={faAppleWhole} /> Popular Items
        </h2>

        <p className="text-gray-500 mt-2 text-sm sm:text-base">
          Check out trending foods loved by customers
        </p>

        <button
          onClick={() => navigate("/foods")}
          className="mt-4 px-5 py-2 bg-yellow-500 text-white rounded-lg transition-transform duration-300 md:hover:scale-105"
        >
          View All Foods
        </button>
      </div>

      <div className="mt-16 mb-10 max-w-4xl mx-auto bg-gray-900 text-white p-6 sm:p-8 rounded-lg text-center transition-transform duration-300 md:hover:scale-105">
        <h2 className="text-xl sm:text-2xl font-bold">
          Ready to Order?
        </h2>

        <p className="mt-2 text-sm sm:text-base">
          Explore delicious food now
        </p>

        <button
          onClick={() => navigate("/foods")}
          className="mt-4 px-6 py-2 bg-yellow-500 rounded-lg"
        >
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Home;