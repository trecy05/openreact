import logoBanniere from "../assets/images/Banniere.png";
import style from "../styles/Banniere.module.css";

function Banniere(params) {
  return (
    <div className={style["Banniere"]}>
      <img
        className={style["image"]}
        src={logoBanniere}
        alt="Logo de la bannière"
      />
      <span className={style["Texte"]}>Chez vous, partout et ailleurs</span>
    </div>
  );
}
export default Banniere;
