import { useState, useEffect } from "react";
import useFetchFoods from "../hooks/useFetchFood";
import SearchBar from "../components/SearchBar";
import FoodList from "../components/FoodList";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger } from "@fortawesome/free-solid-svg-icons";
import Loader from "../Components/Loader";

const Foods = () => {
  const { foods, loading, error } = useFetchFoods();
  const query = useSelector((state) => state.search.query);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const filteredFoods = foods.filter((food) =>
    food.title.toLowerCase().includes(query.toLowerCase())
  );

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedFoods = filteredFoods.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const totalPages = Math.ceil(filteredFoods.length / itemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [query]);

  if (loading) return <Loader />;
  if (error) return <p className="text-center mt-10">{error}</p>;

  return (
    <div className="pt-24 px-4 sm:px-6 max-w-6xl mx-auto">

      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
        <FontAwesomeIcon icon={faBurger} /> Food Items
      </h2>

      <SearchBar />

      <div className="mt-6">
        <FoodList foods={paginatedFoods} />
      </div>

      <div className="flex flex-wrap justify-center mt-8 gap-2 sm:gap-3">
        
        <button
          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          disabled={currentPage === 1}
          className={`px-3 sm:px-4 py-1 sm:py-2 rounded text-sm sm:text-base ${
            currentPage === 1
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-gray-200 hover:bg-gray-300 transition-transform duration-300 md:hover:scale-105"
          }`}
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 sm:px-4 py-1 sm:py-2 rounded text-sm sm:text-base transition-transform duration-300 md:hover:scale-105 ${
              currentPage === i + 1
                ? "bg-yellow-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() =>
            setCurrentPage((p) => Math.min(totalPages, p + 1))
          }
          disabled={currentPage === totalPages}
          className={`px-3 sm:px-4 py-1 sm:py-2 rounded text-sm sm:text-base ${
            currentPage === totalPages
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-gray-200 hover:bg-gray-300 transition-transform duration-300 md:hover:scale-105"
          }`}
        >
          Next
        </button>

      </div>
    </div>
  );
};

export default Foods;