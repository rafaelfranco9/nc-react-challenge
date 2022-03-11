import React from "react";
import { Link } from "react-router-dom";

import "../../styles/shared/Header.css";

const Header = ({ title = "New Combin Website" }) => {
  return (
    <header className="Header">
      <div className="Header-content">
        <h1 className="Header-title">{title}</h1>
        <div className="Header-links">
          <Link to="/home" className="Header-link">
            home
          </Link>
          <Link to="/members" className="Header-link">
            members
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
