import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/partenaire/:id">Partenaire</Link>
      <Link to="/structure/:id">Structure</Link>
      <Link to="/contact/">Contact</Link>
      <Link to="/technicien/:id">
      <button>Profil technicien</button>
      </Link>
    </nav>
  );
};

export default Navbar;
