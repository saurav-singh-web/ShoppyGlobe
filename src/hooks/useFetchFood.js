import { useEffect, useState } from "react";
import foodsData from "../utils/foodApi";

const useFetchFoods = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 500));

        setFoods(foodsData);
      } catch (err) {
        setError("Failed to load food items");
      } finally {
        setLoading(false);
      }
    };

    fetchFoods();
  }, []);
  return { foods, loading, error };
};

export default useFetchFoods;
