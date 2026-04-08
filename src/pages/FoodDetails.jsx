import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import FoodDetailCard from "../components/FoodDetailCard";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cart/cartSlice";
import Loader from "../Components/Loader";
import ErrorMessage from "../Components/ErrorMessage";

const FoodDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const [food, setFood] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFood = async () => {
        try {

          const res = await fetch(`https://dummyjson.com/products/${id}`)
          const data = await res.json();
          setFood(data);
        }catch (err) {
            setError("Failed to load details");
        } finally {
            setLoading(false);
        }
        }
        fetchFood();
    }, [id]);

    if (loading) return <Loader />;
    if (error) return <ErrorMessage message={error} />;
  return (
    <FoodDetailCard
      food={food}
      onAddToCart={(quantity) =>
        dispatch(
          addToCart({
            id: food.id,
            title: food.title,
            price: food.price,
            thumbnail: food.thumbnail,
            quantity,
          })
        )
      }
    />
  );
}   
export default FoodDetail;