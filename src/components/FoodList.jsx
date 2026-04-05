import FoodItem from "./FoodItem";

const FoodList = ({ foods }) => {
  return (
    <div className="px-6 pb-10 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        {foods.map((food) => (
          <FoodItem key={food.id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default FoodList;