import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFaceSmile} from "@fortawesome/free-solid-svg-icons";

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[51vh] flex flex-col justify-center items-center text-center px-4">

      <h1 className="text-4xl font-bold text-green-600">
        <FontAwesomeIcon icon={faFaceSmile} /> Order Placed Successfully!
      </h1>

      <p className="mt-4 text-gray-600">
        Thank you for your order. Your food is on the way!
      </p>

      <button
        onClick={() => navigate("/foods")}
        className="mt-6 px-6 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
      >
        Order More
      </button>

    </div>
  );
};

export default Success;