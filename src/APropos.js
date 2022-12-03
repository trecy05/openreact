import style from "./APropos.module.css";
import Footer from "./Footer";
import Layout from "./Layout";
function APropos() {
  return (
    <>
      <Layout />
      <h1 className={style["style-APropos"]}>Page À Propos</h1>
      <Footer />
    </>
  );
}

export default APropos;
