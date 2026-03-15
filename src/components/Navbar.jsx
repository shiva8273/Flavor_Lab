import React, { useState } from "react";
import { Search, Zap } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ handleSearch }) => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const searchHandler = (e) => {
    e.preventDefault();

    if (input.trim()) {
      handleSearch(input.trim());
      navigate(`search/${input}`);
      setInput("");
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-row">
          
          <Link to="/" className="navbar-logo">
            <Zap className="logo-icon" />
            <span className="logo-highlight">Flavor</span>Lab
          </Link>

          <form onSubmit={searchHandler} className="search-form">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Search dishes, ingredients, or cuisine..."
              className="search-input"
            />

            <button type="submit" className="search-button">
              <Search className="search-icon" />
            </button>
          </form>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;