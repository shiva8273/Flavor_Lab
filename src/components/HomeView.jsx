import React from "react";

import RecipeSlider from "./RecipeSlider";
import TredingRecipe from "./TredingRecipe";
import CategorySection from "./CategorySelection";

import { API_URL } from "./useFetch";
import "./HomeView.css";

const HomeView = ({ filterByCategory }) => {
  return (
    <main className="home-main">
      <RecipeSlider
        title="Staff Curated Picks"
        fetchUrl={`${API_URL}search.php?f=c`}
      />

      <TredingRecipe
        title="Quick & Easy Meals"
        fetchUrl={`${API_URL}filter.php?a=Canadian`}
      />

      <CategorySection filterByCategory={filterByCategory} />
    </main>
  );
};

export default HomeView;