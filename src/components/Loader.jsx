import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger } from "@fortawesome/free-solid-svg-icons";

const Loader = () => {
  return (
     <div className="flex flex-col items-center justify-center h-[60vh]">

      {/* Spinner */}
      <div className="relative w-16 h-16">
        
        <div className="absolute inset-0 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>

        <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center text-xl">
          <FontAwesomeIcon icon={faBurger} />
        </div>

      </div>

      <p className="mt-4 text-gray-600 text-lg font-medium animate-pulse">
        Cooking your food...
      </p>

    </div>
  )
};

export default Loader;