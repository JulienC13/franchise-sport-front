import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <Link to="/">Accueil</Link>
      <Link to="/partenaire/">Partenaire</Link>
      <Link to="/structure/">Structure</Link>
      <Link to="/contact/">Contact</Link>
    </nav>
  );
};

export default Navbar;
