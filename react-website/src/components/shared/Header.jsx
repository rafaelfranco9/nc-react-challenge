import React from "react";
import { Link, useLocation } from "react-router-dom";

import "../../styles/shared/Header.css";

const Header = ({ title = "New Combin Challenge" }) => {
  const { pathname } = useLocation();

  return (
    <header className="Header">
      <div className="Header-content">
        <h1 className="Header-title">{title}</h1>
        <div className="Header-links">
          <Link
            to="/home"
            className="Header-link"
            style={pathname === "/home" ? { textDecoration: "underline" } : {}}
          >
            home
          </Link>
          <Link
            to="/members"
            className="Header-link"
            style={
              pathname === "/members" ? { textDecoration: "underline" } : {}
            }
          >
            members
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
