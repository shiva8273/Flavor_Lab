import { Utensils } from "lucide-react";
import { Link } from "react-router-dom";
import "./CategorySelection.css";

const CategorySelection = ({ filterByCategory }) => {
  const featuredCategories = [
    "Chicken",
    "Dessert",
    "Seafood",
    "Vegetarian",
    "Breakfast",
    "Pasta",
    "Goat",
    "Pork",
    "Lamb",
  ];

  return (
    <section className="category-section">
      <h2 className="category-title">
        <Utensils style={{ width: "24px", height: "24px", marginRight: "12px", color: "#3b82f6" }} />
        Quick Filter by Primary Ingredient
      </h2>

      <div className="category-grid">
        {featuredCategories.map((cat, index) => (
          <Link
            to={`search/${cat}`}
            key={index}
            onClick={() => filterByCategory(cat)}
            className="category-card"
          >
            {cat}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategorySelection;