import { useNavigate } from "react-router-dom";

const NotFound = () => {
      const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
      
      <h1 className="text-8xl font-extrabold text-red-500 mb-4">
        404
      </h1>

      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
        Oops! Page not found 😵
      </h2>

      <p className="text-gray-600 mb-6 max-w-md">
        The page you're looking for doesn’t exist or has been moved.
        Maybe it went to grab some food and never came back
      </p>

      <button
        onClick={() => navigate("/")}
        className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-300"
      >
        Go Back Home
      </button>
    </div>
  );
};

export default NotFound;