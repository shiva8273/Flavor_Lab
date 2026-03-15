import React from "react";
import Slider from "react-slick";
import { useFetch } from "./useFetch";
import { Link } from "react-router-dom";
import { Clock, Loader } from "lucide-react";

import "./TredingRecipe.css";

const TrendingSlider = ({ title, fetchUrl }) => {
  const { data, loading } = useFetch(fetchUrl);
  const meals = data?.meals || [];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    appendDots: () => null,
    customPaging: () => null,
  };

  if (loading)
    return (
      <div className="trending-loading">
        <Loader className="trending-loader-icon" />
        Loading {title}...
      </div>
    );

  return (
    <section className="trending-section">

      <h2 className="trending-title">
        <Clock className="trending-icon" />
        {title}
      </h2>

      <div className="trending-slider-container">
        <Slider {...settings}>

          {meals.map((meal) => (
            <div key={meal.idMeal} className="trending-slide-item">

              <Link to={`/recipe/${meal.idMeal}/`}>
                <div className="trending-card">

                  <div className="trending-hover-glow"></div>

                  <div className="trending-image-wrapper">
                    <img
                      src={meal?.strMealThumb}
                      alt={meal?.strMeal}
                      className="trending-image"
                    />
                  </div>

                </div>
              </Link>

            </div>
          ))}

        </Slider>
      </div>

    </section>
  );
};

export default TrendingSlider;