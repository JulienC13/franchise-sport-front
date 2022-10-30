import "../App.css";

const Form = () => {

  return (
    <div className="form-container">
      <form action="">
        <h3>Devenir franchisé :</h3>
        <hr />
        <br />
        <div className="form-group">
          <label htmlFor="name">Nom : </label>
          <br />
          <input type="text" id="name" name="name"/>
        </div>
        <div className="form-group">
          <label htmlFor="firstname">Prénom : </label>
          <br />
          <input type="text" id="firstname" name="firstname" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email : </label>
          <br />
          <input type="email" name="email" id="email" />
        </div>

        <div className="form-group">
          <label htmlFor="tel">Télephone : </label>
          <br />
          <input type="tel" name="tel" id="tel" />
        </div>
        <div className="form-group">
          <label htmlFor="location">Zone d'implantation : </label>
          <br />
          <input type="text" name="location" id="location" />
        </div>
        <div className="form-group">
          <label htmlFor="text" id="description" name="description">
            Message :
          </label>
          <br />
          <textarea rows="5" cols="50" />
        </div>
        <br />
        <button type="submit" className="btn">
          Envoyer ma candidature
        </button>
      </form>
    </div>
  );
};

export default Form;
