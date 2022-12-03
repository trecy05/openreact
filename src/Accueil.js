import style from "./Accueil.module.css";
import Footer from "./Footer";
import Layout from "./Layout";
function Accueil() {
  return (
    <>
      <Layout />
      <h1 className={style["style-Accueil"]}>Page d'accueil</h1>;
      <Footer />
    </>
  );
}
export default Accueil;
