import { useState, useEffect } from "react";

const slides = [
  {
    title: "🍔 Big Discounts on Burgers",
    desc: "Get up to 50% off",
  },
  {
    title: "🍕 Fresh Pizza Deals",
    desc: "Hot and cheesy offers",
  },
  {
    title: "🥗 Healthy Food Options",
    desc: "Eat clean, stay fit",
  },
];

const HeroSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[index];

  return (
    <div className="bg-gradient-to-r from-yellow-200 to-orange-200 p-10 rounded-lg text-center shadow mt-15 transition-transform duration-300 hover:scale-110">
      <h2 className="text-2xl font-bold">{slide.title}</h2>
      <p className="mt-2 text-gray-700">{slide.desc}</p>
    </div>
  );
};

export default HeroSlider;