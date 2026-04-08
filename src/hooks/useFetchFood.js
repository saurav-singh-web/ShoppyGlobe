import { useEffect, useState } from "react";

const useFetchFoods = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        setFoods(data.products);
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
