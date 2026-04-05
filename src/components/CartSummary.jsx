const CartSummary = ({total, onCheckout}) => {
    return (
        <div>
            <h2>Total: ₹{total}</h2>
            <button onClick={onCheckout} className="bg-blue-500 text-white px-4 py-2 rounded">
                Proceed to Checkout
            </button>
        </div>
    );
};
export default CartSummary