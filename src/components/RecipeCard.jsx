import React from "react";
import { Link } from "react-router-dom";
import "./RecipeCard.css";

const RecipeCard = ({ meal }) => {
  return (
    <Link to={`/recipe/${meal.idMeal}`}>
      <div className="recipe-card">

        <div className="recipe-hover-glow"></div>

        <div className="recipe-image-container">
          <img
            src={meal?.strMealThumb}
            alt={meal?.strMeal}
            className="recipeCard-image"
          />
        </div>

        <div className="recipe-text">
          <h3 className="recipe-title">{meal.strMeal}</h3>
        </div>

      </div>
    </Link>
  );
};

export default RecipeCard;