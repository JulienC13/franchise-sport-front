import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <h2>Veuillez vous identifier</h2>
      <label htmlFor="email">Email : </label>
      <input type="text" id="email" name="email" />
      <br />
      <label htmlFor="paswword">Mot de passe : </label>
      <input type="password" id="password" name="password" />
      <br />
      <Link to="/profil/"><button>se connecter</button></Link>
    </div>
  );
};

export default Login;