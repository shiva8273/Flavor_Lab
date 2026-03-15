import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useFetch } from "./useFetch";
import RecipeCard from "./RecipeCard";

import { Clock, Loader } from "lucide-react";

import "./RecipeSlider.css";

const RecipeSlider = ({ title, fetchUrl }) => {
  const { data, loading } = useFetch(fetchUrl);
  const meals = data?.meals || [];

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  if (loading)
    return (
      <div className="slider-loading">
        <Loader className="loader-icon" />
        Loading {title}...
      </div>
    );

  return (
    <section className="recipe-slider-section">

      <h2 className="recipe-slider-title">
        <Clock className="slider-icon" />
        {title}
      </h2>

      <div className="slider-container">
        <Slider {...settings}>
          {meals.map((meal) => (
            <div key={meal.idMeal} className="slider-item">
              <RecipeCard meal={meal} />
            </div>
          ))}
        </Slider>
      </div>

    </section>
  );
};

export default RecipeSlider;