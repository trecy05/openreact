import Header from "./Header";
import style from "./page404.module.css";
function Page404(params) {
  return (
    <>
      <Header />
      <h1 className={style["style-Page404"]}>Page 404</h1>;
    </>
  );
}
export default Page404;
