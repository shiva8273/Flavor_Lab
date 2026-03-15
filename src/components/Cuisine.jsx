import React from "react";
import { Globe } from "lucide-react";
import { Link } from "react-router-dom";
import "./Cuisine.css";

const Cuisine = ({ filterByArea }) => {
  const featuredAreas = [
    "American",
    "British",
    "Canadian",
    "Chinese",
    "Indian",
    "Italian",
    "Mexican",
    "Russian",
    "Thai",
  ];

  return (
    <div className="cuisine-wrapper">
      <div className="cuisine-container">
        <div className="cuisine-row">
          <div className="cuisine-title">
            <Globe className="cuisine-icon" />
            Global Cuisines:
          </div>

          {featuredAreas.map((area) => (
            <Link
              to={`search/${area}`}
              onClick={() => filterByArea(area)}
              key={area}
              className="cuisine-link"
            >
              {area}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cuisine;