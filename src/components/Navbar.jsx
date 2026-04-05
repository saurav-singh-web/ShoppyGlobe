import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItems } from "../redux/cart/cartSelectors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Navbar = () => {
  const cartItems = useSelector(selectCartItems);
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const totalItems = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const linkStyle = (path) =>
    `block px-4 py-2 rounded-lg transition ${
      location.pathname === path
        ? "bg-white text-gray-900 font-semibold"
        : "text-gray-300 hover:text-white hover:bg-gray-700"
    }`;

  return (
    <nav className="bg-gray-900/90 backdrop-blur fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        
        <Link to="/" className="text-xl sm:text-2xl font-bold bg-amber-50 px-3 py-2 sm:p-4 rounded-2xl tracking-wide flex items-center gap-2">
          <FontAwesomeIcon icon={faBurger} />
          <span className="text-yellow-400">Shoppy</span>Globe
        </Link>

        <div className="hidden md:flex items-center gap-4">
          <Link to="/" className={linkStyle("/")}>
            Home
          </Link>

          <Link to="/foods" className={linkStyle("/foods")}>
            Foods
          </Link>

          <Link to="/cart" className={`${linkStyle("/cart")} relative`}>
            Cart
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-xs px-2 py-0.5 rounded-full font-semibold shadow">
                {totalItems}
              </span>
            )}
          </Link>
        </div>

        <button
          className="md:hidden text-white text-xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-gray-900">
          <Link to="/" className={linkStyle("/")} onClick={() => setIsOpen(false)}>
            Home
          </Link>

          <Link to="/foods" className={linkStyle("/foods")} onClick={() => setIsOpen(false)}>
            Foods
          </Link>

          <Link to="/cart" className={`${linkStyle("/cart")} relative`} onClick={() => setIsOpen(false)}>
            Cart
            {totalItems > 0 && (
              <span className="absolute top-2 right-4 bg-red-500 text-xs px-2 py-0.5 rounded-full font-semibold shadow">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;