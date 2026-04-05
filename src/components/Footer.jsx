import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faAt, faBurger } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div>
          <h2 className="text-xl font-bold text-white">
            <FontAwesomeIcon icon={faBurger} /> ShoppyGlobe
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Your one-stop destination for delicious food and quick delivery.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Quick Links
          </h3>

          <div className="flex flex-col space-y-2 items-start">
            
            <Link className="hover:text-yellow-400" to="/">Home</Link>
            <Link className="hover:text-yellow-400" to="/foods">foods</Link>
            <Link className="hover:text-yellow-400" to="/cart">cart</Link>

          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Contact
          </h3>
          <p className="text-sm"><FontAwesomeIcon icon={faAt} /> support@shoppyglobe.com</p>
          <p className="text-sm mt-1"><FontAwesomeIcon icon={faPhone} /> +91 98765 43210</p>
        </div>

      </div>

      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-500">
        © 2026 ShoppyGlobe. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;