import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <main>
      <h1>Bienvenue sur l'application de gestion des franchises Orange Bleu</h1>
      <p>Il faut te connecter pour pouvoir acceder aux ecrans appropriés</p>

      <h3>Gérer les:</h3>
      <ul>
        <li>
          <Link to="/manage-partners">Partenaires</Link>
        </li>
        <li>
          <Link to="/manage-structures">Structures</Link>
        </li>
        <li>
          <Link to="/manage-functionalities">Fonctionalités</Link>
        </li>
      </ul>
    </main>
  );
}
