import "./Footer.module.css";
import logoFooter from "./logoFooter.png";
import style from "./Footer.module.css";
function Footer(params) {
  return (
    <footer>
      <div className={style["style-footer"]}>
        <img
          className={style["style-image"]}
          src={logoFooter}
          alt="Logo de l'enseigne"
        />
        <span className={style["style-texte"]}>
          © 2020 Kasa. All rights reserved
        </span>
      </div>
    </footer>
  );
}
export default Footer;
