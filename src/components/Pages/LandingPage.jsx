import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <main>
      <div style={{ display: "grid", gap: 8, padding: 32 }}>
        <button onClick={() => loginAs("STAFF")}>
          Me connecter en tant que Tech
        </button>
        <button onClick={() => loginAs("PARTNER")}>
          Me connecter en tant que Partenaire
        </button>
        <button onClick={() => loginAs("STRUCTURE")}>
          Me connecter en tant que Structure
        </button>
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
