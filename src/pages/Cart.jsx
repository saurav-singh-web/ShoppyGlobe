import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../redux/cart/cartSelectors";
import CartItem from "../components/CartItem";
import { useNavigate } from "react-router-dom";
import Loader from "../Components/Loader";
import useFetchFoods from "../hooks/useFetchFood";

const Cart = () => {
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const { loading } = useFetchFoods();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  if (loading) return <Loader />;

  return (
    <div className="pt-24 max-w-4xl mx-auto px-4 sm:px-6 py-6">

      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
        🛒 Your Cart
      </h2>

      {cartItems.length === 0 ? (
        <p className="text-center font-semibold text-2xl sm:text-4xl text-gray-500 mt-20">
          Your cart is empty...
        </p>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className="mt-6 bg-white p-4 sm:p-6 rounded-lg shadow flex flex-col sm:flex-row justify-between items-center gap-4">
            
            <h3 className="text-lg sm:text-xl font-semibold">
              Total: ₹{total.toFixed(2)}
            </h3>

            <button
              onClick={handleCheckout}
              className="w-full sm:w-auto bg-yellow-500 text-white px-5 py-2 rounded-lg hover:bg-yellow-600 transition"
            >
              Proceed to Checkout
            </button>

          </div>
        </>
      )}
    </div>
  );
};

export default Cart;