import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../redux/cart/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white p-4 rounded-lg shadow">

     
      <Link to={`/foods/${item.id}`} className="flex-shrink-0">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-md"
        />
      </Link>

      <div className="flex-1 w-full">

        <div className="flex justify-between items-start sm:items-center">
          <div className="min-w-0">
            <h3 className="font-semibold text-gray-800 text-sm sm:text-base truncate">
              {item.title}
            </h3>
            <p className="text-gray-500 text-sm">
              ₹{item.price}
            </p>
          </div>

          <p className="font-semibold text-yellow-600 sm:hidden">
            ₹{(item.price * item.quantity).toFixed(2)}
          </p>
        </div>

        <div className="flex justify-between items-center mt-3">

          <div className="flex items-center gap-2 bg-gray-100 px-2 py-1 rounded">
            <button
              onClick={() => dispatch(decrementQuantity(item.id))}
              className="px-2 text-lg"
            >
              -
            </button>

            <span className="text-sm font-semibold w-5 text-center">
              {item.quantity}
            </span>

            <button
              onClick={() => dispatch(incrementQuantity(item.id))}
              className="px-2 text-lg"
            >
              +
            </button>
          </div>

          
        </div>
      </div>

      <div className="hidden sm:flex flex-col items-end gap-2">
        <p className="font-semibold text-yellow-600">
          ₹{(item.price * item.quantity).toFixed(2)}
        </p>

        <button
          onClick={() => dispatch(removeFromCart(item.id))}
          className="text-red-500 text-sm hover:underline"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;