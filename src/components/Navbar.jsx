import React from "react"
import { Link } from "react-router-dom"
import "../App.css"
import { useRecoilState } from "recoil"
import { me_state } from "../recoil"

const Navbar = () => {
  const [me, set_me] = useRecoilState(me_state)

  return (
    <nav className="navbar-container">
      <Link to="/">Accueil 🔥</Link>
      {me ? (
        <Link to="/login" onClick={() => set_me(null)}>
          Se déconnecter
        </Link>
      ) : (
        <Link to="/login">Se connecter</Link>
      )}

      <Link to="/">Accueil</Link>
      <Link to="/manage-partners">Gestion partenaires</Link>
      <Link to="/manage-functionalities">Gestion fonctionalités</Link>
      <Link to="/manage-structures">Gestion structures</Link>
      <Link to="/my-functionalities">Mes fonctionalitiés</Link>
      <Link to="/contact/">Contact</Link>
    </nav>
  )
}

export default Navbar
