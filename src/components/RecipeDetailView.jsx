import React from "react";
import { useParams, Link } from "react-router-dom";
import { useFetch, API_URL } from "./useFetch";
import { Loader, ChevronLeft, Utensils, BookOpen } from "lucide-react";
import "./RecipeDetailView.css";

const RecipeDetailView = () => {
  const { id } = useParams();
  const { data, loading } = useFetch(`${API_URL}lookup.php?i=${id}`);
  const meal = data?.meals?.[0];

  if (loading)
    return (
      <div className="recipe-loading">
        <Loader className="loader-icon" />
        Preparing your recipe card...
      </div>
    );

  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];

    if (ingredient && ingredient.trim()) {
      ingredients.push({
        ingredient: ingredient.trim(),
        measure: measure ? measure.trim() : "",
      });
    }
  }

  const instructions = meal.strInstructions
    ? meal.strInstructions
        .split("\r\n")
        .map((step) => step.replace(/^\d+\.?\s*/, "").trim())
        .filter((step) => step.length > 0)
    : [];

  return (
    <main className="recipe-detail-main">

      <Link to="/" className="back-link">
        <ChevronLeft className="back-icon" />
        Back to Dashboard
      </Link>

      <div className="recipe-card-container">

        <div className="recipe-flex">

          <div className="recipe-left">
            <h1 className="recipeCard-title">{meal?.strMeal}</h1>

            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="recipeDetail-image"
            />
          </div>

          <div className="ingredients-box">

            <h2 className="ingredients-title">
              <Utensils className="section-icon" />
              Key Ingredients
            </h2>

            <ul className="ingredients-list">
              {ingredients.map((item, index) => (
                <li key={index} className="ingredients-item">
                  <span className="ingredients-arrow">›</span>
                  <span className="ingredients-measure">
                    {item.measure}
                  </span>
                  {item.ingredient}
                </li>
              ))}
            </ul>

            <div className="recipe-tags">
              <span className="tag-category">{meal.strCategory}</span>
              <span className="tag-area">{meal.strArea}</span>
            </div>

          </div>
        </div>

        {/* Instructions */}

        <div className="instructions-section">

          <h2 className="instructions-title">
            <BookOpen className="section-icon" />
            Detailed Preparation Steps
          </h2>

          <ol className="instructions-list">
            {instructions.map((step, index) => (
              <li key={index} className="instruction-item">
                <span className="step-number">{index + 1}</span>
                {step.trim()}
              </li>
            ))}
          </ol>

        </div>

      </div>

    </main>
  );
};

export default RecipeDetailView;