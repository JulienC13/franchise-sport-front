import { useNavigate, Link } from "react-router-dom";
import Technician from "./Technician";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <main>
      <div style={{ display: "grid", gap: 8, padding: 32, textAlign:"center" }}>
        <Link to="/technicien">
          <button className="btn btn-width" onClick={() => loginAs("STAFF")}>
            Me connecter en tant que Tech
          </button>
        </Link>
        <Link to="/partenaire/">
          <button className="btn btn-width" onClick={() => loginAs("PARTNER")}>
            Me connecter en tant que Partenaire
          </button>
        </Link>
        <Link to="/structure/">
          <button className="btn btn-width" onClick={() => loginAs("STRUCTURE")}>
            Me connecter en tant que Structure
          </button>
        </Link>
      </div>
    </main>
  );

  function loginAs(profile) {
    // requete
    // si c'est good
    switch (profile) {
      case "STAFF":
        navigate("/gestion-des-partenaires");
        break;
      case "STAFF":
        navigate("/gestion-des-structures");
        break;
      case "STRUCTURE":
        navigate("/visu-des-fonctionnalites");
        break;
      default:
        throw `${profile} isn't handled`;
    }
  }
}
