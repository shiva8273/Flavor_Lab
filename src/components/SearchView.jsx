import React from "react";
import { ChevronLeft, Loader } from "lucide-react";
import { Link } from "react-router-dom";
import RecipeCard from "./RecipeCard";

import "./SearchView.css";

const SearchView = ({ meals, loading }) => {
  return (
    <main className="search-main">
      <Link to="/" className="search-back-link">
        <ChevronLeft className="search-back-icon" />
        Back to Dashboard
      </Link>

      {loading && (
        <div className="search-loading">
          <Loader className="loader-icon" />
          Searching the database...
        </div>
      )}

      {!loading && meals.length > 0 && (
        <div className="search-grid">
          {meals.map((meal) => (
            <RecipeCard key={meal.idMeal} meal={meal} />
          ))}
        </div>
      )}
    </main>
  );
};

export default SearchView;
