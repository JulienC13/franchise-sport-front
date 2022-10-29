import React from "react";

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <br />
      <h3>Contacter l'équipe technique</h3>
      <hr />
      <br />
      <form action="">
        <label htmlFor="email">Email : </label>
        <input type="email" name="email" id="email" />
        <br />
        <label htmlFor="option">Objet : </label>
        <select name="option" id="option">
          <option value="account">Etat du compte</option>
          <option value="new_features">
            Demande de nouvelle fonctionnalité
          </option>
        </select>
        <br />
        <label htmlFor="text" id="description" name="description">
          Message :
        </label>
        <br />
        <textarea rows="5" cols="50" />
        <br />
        <br />
        <input type="submit" value="Envoyer" />
      </form>

      <br />
      <br />
      <form action="">
        <h3>Devenir franchisé :</h3>
        <hr />
        <br />
        <label htmlFor="name">Nom : </label>
        <input type="text" id="name" name="name" />
        <label htmlFor="firstname">Prénom : </label>
        <input type="text" id="firstname" name="firstname" />
        <br />
        <br />
        <label htmlFor="email">Email : </label>
        <input type="email" name="email" id="email" />
        <br />
        <label htmlFor="tel">Télephone : </label>
        <input type="tel" name="tel" id="tel" />
        <br />
        <label htmlFor="location">Zone d'implantation : </label>
        <input type="text" name="location" id="location" />
        <br />
        <label htmlFor="text" id="description" name="description">
          Message :
        </label>
        <br />
        <textarea rows="5" cols="50" />
        <br />
        <br />
        <input type="submit" value="Envoyer ma candidature" />
      </form>
    </div>
  );
};

export default Contact;
