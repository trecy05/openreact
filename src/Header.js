import logoHeader from "./logo.png";
import style from "./Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <img src={logoHeader} alt="Logo de l'enseigne" />
      <nav>
        {/* <Link to="Accueil">
          <li className={style["style-list"]}>Accueil</li>
        </Link>
        <Link to="À propos">
          <li className={style["style-list"]}>À propos</li>
        </Link> */}
        <Link to="/" className={style["style-list"]}>
          Accueil
        </Link>
        <Link to="À propos" className={style["style-list"]}>
          À propos
        </Link>
      </nav>
    </header>
  );
}
export default Header;
