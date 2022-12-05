import style from "../styles/Accueil.module.css";
import Footer from "../components/Footer";

import Header from "../components/Header";
import Banniere from "../components/Banniere";

function Accueil() {
  return (
    <>
      <Header />
      <Banniere />
      <h1 className={style["style-Accueil"]}>Page d'accueil</h1>;
      <Footer />
    </>
  );
}
export default Accueil;
