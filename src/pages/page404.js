import style from "../styles/page404.module.css";
import { Link } from "react-router-dom";

import Header from "../components/Header";
function Page404(params) {
  return (
    <>
      <Header />
      <h1 className={style["style-Page404"]}>404</h1>;
      <p className={style["style-Page404"]}>
        Oups!La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className={style["style-Page404"]}>
        Retournez sur la page d'accueil
      </Link>
    </>
  );
}
export default Page404;
