import logoBanniere from "./Banniere.png";
import style from "./Banniere.module.css";

function Banniere(params) {
  return (
    <div className={style["Banniere"]}>
      <img
        className={style["style-Banniere"]}
        src={logoBanniere}
        alt="Logo de la bannière"
      />
      <span className={style["style-Texte"]}>
        Chez vous, partout et ailleurs
      </span>
    </div>
  );
}
export default Banniere;
