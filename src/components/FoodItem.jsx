import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cart/cartSlice";
import { Link } from "react-router-dom";

const FoodItem = ({ food }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg p-4 flex flex-col transition-transform duration-300 hover:scale-110">

      <Link to={`/foods/${food.id}`}>
        <img
          src={food.thumbnail}
          alt={food.title}
          className="h-40 w-full object-cover rounded-md"
        />
      </Link>

      <div className="mt-3 flex flex-col flex-grow">

        <h3 className="font-semibold text-lg text-gray-800 line-clamp-1">
          {food.title}
        </h3>

        <p className="text-yellow-600 font-bold mt-1">
          ₹{food.price.toFixed(2)}
        </p>

        <p className="text-sm text-gray-500 mt-1 line-clamp-2">
          {food.description}
        </p>

        <div className="flex-grow" />

        <button
          onClick={() =>
            dispatch(
              addToCart({
                id: food.id,
                title: food.title,
                price: food.price,
                thumbnail: food.thumbnail,
                
              })
            )
          }
          className="mt-3 bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodItem;