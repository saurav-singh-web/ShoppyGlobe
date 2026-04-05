import { useDispatch, useSelector } from "react-redux"
import { selectCartItems, selectCartTotal } from "../redux/cart/cartSelectors";
import {clearCart} from "../redux/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const CheckOut = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const cartItems = useSelector(selectCartItems);
    const total = useSelector(selectCartTotal);

    const [formData, setFormData] = useState({
        name: "",
        address: "",
    });
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }
    const handleOrder = () => {
        if(!formData.name || !formData.address) {
            alert("Please fill in all fields");
            return;
        }
        console.log(clearCart);
        dispatch(clearCart());
        navigate("/success");
    };

  return (
    <div className="max-w-5xl mx-auto px-6 py-6 grid md:grid-cols-2 gap-8">

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">📦 Delivery Details</h2>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded focus:ring-2 focus:ring-yellow-400"
        />

        <input
          type="text"
          name="address"
          placeholder="Your Address"
          value={formData.address}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded focus:ring-2 focus:ring-yellow-400"
        />

        <button
          onClick={handleOrder}
          className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600"
        >
          Place Order
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">🛒 Order Summary</h2>

        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between mb-2 text-sm">
            <span className="truncate">{item.title}</span>
            <span>₹{(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}

        <hr className="my-4" />

        <h3 className="text-lg font-semibold">
          Total: ₹{total}
        </h3>
      </div>

    </div>
  );
};
export default CheckOut;