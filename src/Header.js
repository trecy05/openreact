import logoHeader from "./logo.png";
import style from "./Header.module.css";

function Header() {
  return (
    <header>
      <img src={logoHeader} alt="Logo de l'enseigne" />
      <nav>
        <li className={style["style-list"]}>Accueil</li>
        <li className={style["style-list"]}>À propos</li>
      </nav>
    </header>
  );
}
export default Header;
