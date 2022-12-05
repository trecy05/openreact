import style from "../styles/APropos.module.css";
import Footer from "../components/Footer";

import Header from "../components/Header";
import Banniere from "../components/Banniere";
function APropos() {
  return (
    <>
      <Header />
      <Banniere />
      <h1 className={style["style-APropos"]}>Page À Propos</h1>
      <Footer />
    </>
  );
}

export default APropos;
