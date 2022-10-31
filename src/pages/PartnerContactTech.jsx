import React from "react"

const PartnerContactTech = () => {
  return (
    <div>
      <h1 className="title">Structure de (nom de la salle / adresse)</h1>
      <br />
      <div className="form-container">
        <form action="" className="">
          <h3>Contacter l'équipe technique</h3>
          <hr />
          <div className="form-group">
            <label htmlFor="email">Email : </label>
            <br />
            <input type="email" name="email" id="email" />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="option">Objet : </label>
            <br />
            <select name="option" id="option">
              <option value="account">Etat du compte</option>
              <option value="new_features">
                Demande de nouvelle fonctionnalité
              </option>
              <option value="question">Autre question</option>
            </select>
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="text" id="description" name="description">
              <br />
              Message :
            </label>
            <br />
            <textarea rows="5" cols="30" />
          </div>
          <br />
          <button type="submit" className="btn">
            Envoyer
          </button>
        </form>
      </div>
      <br />
      <div className="container">
        <h3>Liste des fonctionnalités disponible : </h3>
      </div>
    </div>
  )
}

export default PartnerContactTech
