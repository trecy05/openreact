import React from "react";
import { Link } from "react-router-dom";
import style from "../styles/Header.module.css";
import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <div className={style["navigation"]}>
      <img src={logo} alt="Logo de l'enseigne" />

      <nav>
        <Link to="/" className={style["lien"]}>
          Accueil
        </Link>

        <Link to="/about" className={style["lien"]}>
          A propos
        </Link>
      </nav>
    </div>
  );
};

export default Header;
