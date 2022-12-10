import style from "../styles/Accueil.module.css";
import Footer from "../components/Footer";

import Header from "../components/Header";
import Banniere from "../components/Banniere";
import Appartement from "../components/Appartement";

function Accueil() {
  return (
    <>
      <Header />
      <Banniere />
      <Appartement />
      <h1 className={style["style-Accueil"]}>Page d'accueil</h1>;
      <Footer />
    </>
  );
}
export default Accueil;
