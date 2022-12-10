import React from "react";
import { Link } from "react-router-dom";
import style from "../styles/Card.module.css";

const Card = ({ appart }) => {
  return (
    <article className={style["card-logement"]}>
      <div className={style["card_lien"]}>
        <Link to="/location">
          <div className={style["card_infos"]}></div>
          <img
            className={style["card_img"]}
            src={appart.cover}
            alt={"appartement" + appart.title}
          />
          <h2 className={style["card_title"]}>{appart.title}</h2>
        </Link>
      </div>
    </article>
  );
};

export default Card;
