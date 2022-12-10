import React from "react";
import logement from "../assets/api/logements.json";
import Card from "./Card";
import style from "../styles/Appartement.module.css";

const Appartement = () => {
  return (
    <div className={style["appartement"]}>
      {logement.map((appart, index) => (
        <Card key={index} appart={appart} />
      ))}
    </div>
  );
};

export default Appartement;
