import React from "react";
import "../../styles/shared/Header.css";

const Header = ({ title = "New Combin Website" }) => {
  return (
    <header className="Header">
      <div className="Header-content">
        <h1 className="Header-title">{title}</h1>
        <a className="Header-link" href="#">
          members
        </a>
      </div>
    </header>
  );
};

export default Header;
