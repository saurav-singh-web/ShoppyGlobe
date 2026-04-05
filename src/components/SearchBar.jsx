import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../redux/search/searchSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


const SearchBar = () => {
    const dispatch = useDispatch();
    const query = useSelector((state) => state.search.query);

    return (
        <div className="flex justify-center my-6 px-4">
      
      <div className="relative w-full max-w-md">
        
        <input
          type="text"
          placeholder="Search food..."
          value={query}
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
          className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 
                     focus:outline-none focus:ring-2 focus:ring-yellow-400 
                     shadow-sm"
        />
        <span className="absolute left-3 top-2.5 text-gray-400">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
        </span>

      </div>

    </div>
    );
};

export default SearchBar;